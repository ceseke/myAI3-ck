import { Pinecone } from '@pinecone-database/pinecone';
import { PINECONE_TOP_K } from '@/config';
import { PINECONE_INDEX_NAME } from '@/config';

if (!process.env.PINECONE_API_KEY) {
    throw new Error('PINECONE_API_KEY is not set');
}

export const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
});

export const pineconeIndex = pinecone.Index(PINECONE_INDEX_NAME);

export async function searchPinecone(
    query: string,
): Promise<string> {
    try {

        const results = await pineconeIndex.namespace('__default__').searchRecords({
            query: {
                inputs: {
                    text: query,
                },
                topK: PINECONE_TOP_K,
            },

            fields: ['text', 'Product', 'Color', 'Dimensions', 'Size', 'Weight', 'Rating', 'Price'],
        });

        // Extract hits from the response
        const hits = (results as any)?.result?.hits || [];

        if (hits.length === 0) {
            console.log('Pinecone: No matching records found');
            return '';
        }

        console.log(`Pinecone: Found ${hits.length} matching records`);

        // Format each record into readable text for the AI
        const formatted = hits.map((hit: any, i: number) => {
            const fields = hit.fields || {};
            const parts = [];

            if (fields.Product) parts.push(`Product: ${fields.Product}`);
            if (fields.text) parts.push(`Description: ${fields.text}`);
            if (fields.Price) parts.push(`Price: ${fields.Price}`);
            if (fields.Size) parts.push(`Size: ${fields.Size}`);
            if (fields.Color) parts.push(`Color: ${fields.Color}`);
            if (fields.Dimensions) parts.push(`Dimensions: ${fields.Dimensions}`);
            if (fields.Weight) parts.push(`Weight: ${fields.Weight}`);
            if (fields.Rating) parts.push(`Rating: ${fields.Rating}`);

            return `--- Product ${i + 1} ---\n${parts.join('\n')}`;
        }).join('\n\n');

        return formatted;
    } catch (error) {
        console.error('Pinecone search error:', error);
        return '';
    }
}