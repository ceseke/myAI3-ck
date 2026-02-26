
import { streamText, UIMessage, convertToModelMessages, createUIMessageStream, createUIMessageStreamResponse } from 'ai';
import { MODEL } from '@/config';
import { SYSTEM_PROMPT } from '@/prompts';
import { isContentFlagged } from '@/lib/moderation';
import { searchPinecone } from '@/lib/pinecone';
import Exa from 'exa-js';

const exa = process.env.EXA_API_KEY ? new Exa(process.env.EXA_API_KEY) : null;

// Fallback: search the web via Exa ONLY when Pinecone has no results
async function searchWebFallback(query: string): Promise<string> {
    if (!exa) return '';
    try {
        const { results } = await exa.search(query + ' site:yeti.com', {
            contents: { text: true },
            numResults: 2, // Keep it minimal to save credits
        });

        if (results.length === 0) return '';

        const formatted = results.map((r, i) =>
            `Source ${i + 1}: ${r.title}\nURL: ${r.url}\n${(r.text || '').slice(0, 800)}`
        ).join('\n\n');

        return `<web_search_results>\n${formatted}\n</web_search_results>`;
    } catch (error) {
        console.error('Exa search failed:', error);
        return '';
    }
}

export const maxDuration = 30;
export async function POST(req: Request) {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const latestUserMessage = messages
        .filter(msg => msg.role === 'user')
        .pop();

    if (latestUserMessage) {
        const textParts = latestUserMessage.parts
            .filter(part => part.type === 'text')
            .map(part => 'text' in part ? part.text : '')
            .join('');

        if (textParts) {
            const moderationResult = await isContentFlagged(textParts);

            if (moderationResult.flagged) {
                const stream = createUIMessageStream({
                    execute({ writer }) {
                        const textId = 'moderation-denial-text';

                        writer.write({
                            type: 'start',
                        });

                        writer.write({
                            type: 'text-start',
                            id: textId,
                        });

                        writer.write({
                            type: 'text-delta',
                            id: textId,
                            delta: moderationResult.denialMessage || "Your message violates our guidelines. I can't answer that.",
                        });

                        writer.write({
                            type: 'text-end',
                            id: textId,
                        });

                        writer.write({
                            type: 'finish',
                        });
                    },
                });

                return createUIMessageStreamResponse({ stream });
            }

            // Step 1: Always search Pinecone first (free — no API cost)
            let context = '';
            try {
                context = await searchPinecone(textParts);
            } catch (error) {
                console.error('Pinecone search failed:', error);
            }

            // Step 2: If Pinecone returned no useful data, fall back to Exa web search
            const pineconeHasData = context.length > 0;
            if (!pineconeHasData) {
                console.log('Pinecone returned no data — falling back to Exa web search');
                const webResults = await searchWebFallback(textParts);
                if (webResults) {
                    context = webResults;
                }
            }

            // Step 3: Single Gemini API call with all context injected
            const systemWithContext = context
                ? `${SYSTEM_PROMPT}\n\n<yeti_product_data>\nThe following product data was retrieved. Use this to answer the user's question:\n${context}\n</yeti_product_data>`
                : SYSTEM_PROMPT;

            const result = streamText({
                model: MODEL,
                system: systemWithContext,
                messages: await convertToModelMessages(messages),
            });

            return result.toUIMessageStreamResponse();
        }
    }

    // Fallback if no text content found
    const result = streamText({
        model: MODEL,
        system: SYSTEM_PROMPT,
        messages: await convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
}