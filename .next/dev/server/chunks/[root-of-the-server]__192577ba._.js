module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AI_NAME",
    ()=>AI_NAME,
    "CLEAR_CHAT_TEXT",
    ()=>CLEAR_CHAT_TEXT,
    "DATE_AND_TIME",
    ()=>DATE_AND_TIME,
    "MODEL",
    ()=>MODEL,
    "MODERATION_DENIAL_MESSAGE_DEFAULT",
    ()=>MODERATION_DENIAL_MESSAGE_DEFAULT,
    "MODERATION_DENIAL_MESSAGE_HARASSMENT",
    ()=>MODERATION_DENIAL_MESSAGE_HARASSMENT,
    "MODERATION_DENIAL_MESSAGE_HARASSMENT_THREATENING",
    ()=>MODERATION_DENIAL_MESSAGE_HARASSMENT_THREATENING,
    "MODERATION_DENIAL_MESSAGE_HATE",
    ()=>MODERATION_DENIAL_MESSAGE_HATE,
    "MODERATION_DENIAL_MESSAGE_HATE_THREATENING",
    ()=>MODERATION_DENIAL_MESSAGE_HATE_THREATENING,
    "MODERATION_DENIAL_MESSAGE_ILLICIT",
    ()=>MODERATION_DENIAL_MESSAGE_ILLICIT,
    "MODERATION_DENIAL_MESSAGE_ILLICIT_VIOLENT",
    ()=>MODERATION_DENIAL_MESSAGE_ILLICIT_VIOLENT,
    "MODERATION_DENIAL_MESSAGE_SELF_HARM",
    ()=>MODERATION_DENIAL_MESSAGE_SELF_HARM,
    "MODERATION_DENIAL_MESSAGE_SELF_HARM_INSTRUCTIONS",
    ()=>MODERATION_DENIAL_MESSAGE_SELF_HARM_INSTRUCTIONS,
    "MODERATION_DENIAL_MESSAGE_SELF_HARM_INTENT",
    ()=>MODERATION_DENIAL_MESSAGE_SELF_HARM_INTENT,
    "MODERATION_DENIAL_MESSAGE_SEXUAL",
    ()=>MODERATION_DENIAL_MESSAGE_SEXUAL,
    "MODERATION_DENIAL_MESSAGE_SEXUAL_MINORS",
    ()=>MODERATION_DENIAL_MESSAGE_SEXUAL_MINORS,
    "MODERATION_DENIAL_MESSAGE_VIOLENCE",
    ()=>MODERATION_DENIAL_MESSAGE_VIOLENCE,
    "MODERATION_DENIAL_MESSAGE_VIOLENCE_GRAPHIC",
    ()=>MODERATION_DENIAL_MESSAGE_VIOLENCE_GRAPHIC,
    "OWNER_NAME",
    ()=>OWNER_NAME,
    "PINECONE_INDEX_NAME",
    ()=>PINECONE_INDEX_NAME,
    "PINECONE_TOP_K",
    ()=>PINECONE_TOP_K,
    "WELCOME_MESSAGE",
    ()=>WELCOME_MESSAGE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ai-sdk/google/dist/index.mjs [app-route] (ecmascript)");
;
const MODEL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["google"])('gemini-2.0-flash');
function getDateAndTime() {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const timeStr = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        timeZoneName: 'short'
    });
    return `The day today is ${dateStr} and the time right now is ${timeStr}.`;
}
const DATE_AND_TIME = getDateAndTime();
const AI_NAME = "YETI Guide";
const OWNER_NAME = "YETI";
const WELCOME_MESSAGE = `Hey there! 👋 I'm **${AI_NAME}**, your AI-powered assistant for all things YETI. Whether you need help choosing the right cooler, drinkware, or outdoor gear — I've got you covered. Ask me anything!`;
const CLEAR_CHAT_TEXT = "New Chat";
const MODERATION_DENIAL_MESSAGE_SEXUAL = "I can't discuss explicit sexual content. Please ask something else — maybe about a great YETI cooler instead?";
const MODERATION_DENIAL_MESSAGE_SEXUAL_MINORS = "I can't discuss content involving minors in a sexual context. Please ask something else.";
const MODERATION_DENIAL_MESSAGE_HARASSMENT = "I can't engage with harassing content. Let's keep things friendly — just like a day on the trail.";
const MODERATION_DENIAL_MESSAGE_HARASSMENT_THREATENING = "I can't engage with threatening or harassing content. Please be respectful.";
const MODERATION_DENIAL_MESSAGE_HATE = "I can't engage with hateful content. The outdoors is for everyone.";
const MODERATION_DENIAL_MESSAGE_HATE_THREATENING = "I can't engage with threatening hate speech. Please be respectful.";
const MODERATION_DENIAL_MESSAGE_ILLICIT = "I can't discuss illegal activities. How about we talk about YETI products instead?";
const MODERATION_DENIAL_MESSAGE_ILLICIT_VIOLENT = "I can't discuss violent illegal activities. Please ask something else.";
const MODERATION_DENIAL_MESSAGE_SELF_HARM = "I can't discuss self-harm. If you're struggling, please reach out to a mental health professional or call 988.";
const MODERATION_DENIAL_MESSAGE_SELF_HARM_INTENT = "I can't discuss self-harm intentions. If you're struggling, please reach out to a mental health professional or call 988.";
const MODERATION_DENIAL_MESSAGE_SELF_HARM_INSTRUCTIONS = "I can't provide instructions related to self-harm. If you're struggling, please reach out to a mental health professional or call 988.";
const MODERATION_DENIAL_MESSAGE_VIOLENCE = "I can't discuss violent content. Please ask something else.";
const MODERATION_DENIAL_MESSAGE_VIOLENCE_GRAPHIC = "I can't discuss graphic violent content. Please ask something else.";
const MODERATION_DENIAL_MESSAGE_DEFAULT = "Your message violates our guidelines. I can't answer that.";
const PINECONE_TOP_K = 40;
const PINECONE_INDEX_NAME = "yeti-products";
}),
"[project]/prompts.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CITATIONS_PROMPT",
    ()=>CITATIONS_PROMPT,
    "GUARDRAILS_PROMPT",
    ()=>GUARDRAILS_PROMPT,
    "IDENTITY_PROMPT",
    ()=>IDENTITY_PROMPT,
    "PRODUCT_KNOWLEDGE_PROMPT",
    ()=>PRODUCT_KNOWLEDGE_PROMPT,
    "SYSTEM_PROMPT",
    ()=>SYSTEM_PROMPT,
    "TONE_STYLE_PROMPT",
    ()=>TONE_STYLE_PROMPT,
    "TOOL_CALLING_PROMPT",
    ()=>TOOL_CALLING_PROMPT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config.ts [app-route] (ecmascript)");
;
;
const IDENTITY_PROMPT = `
You are ${__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AI_NAME"]}, a knowledgeable and enthusiastic AI assistant specializing in YETI products.
You were designed by ${__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OWNER_NAME"]} to help customers explore, compare, and choose the perfect YETI products for their needs.
You are NOT OpenAI, Anthropic, or any other third-party AI vendor — you are ${__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AI_NAME"]}, built specifically for YETI.
`;
const TOOL_CALLING_PROMPT = `
- IMPORTANT: Answer from your built-in YETI product knowledge FIRST. You already know a lot about YETI products — use that knowledge directly.
- Only call tools when the user asks about something very specific that you're not confident about (e.g., exact current pricing, new product releases, availability, or very niche product details).
- If you do need to use a tool, prefer the vector database over web search.
- Do NOT call both tools for the same question — pick the one most likely to help.
- For general product recommendations, comparisons, and feature explanations, answer directly without tools.
`;
const TONE_STYLE_PROMPT = `
- Maintain an enthusiastic, friendly, and outdoors-inspired tone — like a knowledgeable friend at a gear shop.
- Be conversational but informative. Use vivid descriptions that help customers imagine using the product.
- When comparing products, use clear bullet points or tables to make differences easy to understand.
- If a customer is unsure, ask clarifying questions about their use case (camping, fishing, daily carry, etc.) to recommend the best product.
- Use emojis sparingly and naturally (🏕️ 🎣 🧊 🥤) to enhance the outdoor vibe.
`;
const GUARDRAILS_PROMPT = `
- Stay focused on YETI products, outdoor gear, and related topics (camping, fishing, hunting, tailgating, travel, etc.).
- Politely redirect off-topic conversations back to YETI products and outdoor adventures.
- Do not make up product names, prices, or specifications that you are not confident about. If unsure, say so and suggest checking yeti.com.
- Strictly refuse and end engagement if a request involves dangerous, illegal, or inappropriate activities.
- Never disparage competing brands. If asked about competitors, focus on YETI's unique strengths instead.
`;
const CITATIONS_PROMPT = `
- Always cite your sources using inline markdown, e.g., [Source #](Source URL).
- Prefer linking to yeti.com product pages when available.
- Do not ever just use [Source #] by itself and not provide the URL as a markdown link — this is forbidden.
`;
const PRODUCT_KNOWLEDGE_PROMPT = `
- You have deep knowledge of YETI's full product lineup including:
  • **Coolers**: Tundra (hard coolers), Roadie, Hopper (soft coolers), Tank (beverage buckets), Silo (water cooler)
  • **Drinkware**: Rambler (tumblers, mugs, bottles, jugs, cups, straw cups, wine tumblers, stackable cups), Yonder (lightweight bottles)
  • **Bags & Cargo**: Panga (waterproof duffels), Crossroads (backpacks & bags), Camino (carryall), LoadOut (GoBox, Bucket)
  • **Outdoor Living**: Trailhead (camp chairs), Lowlands (blankets), Hondo (chairs)
  • **Dog Products**: Boomer (dog bowls), Trailhead (dog bed)
  • **Accessories**: Ice packs (ICE), bottle slings, replacement lids, handles, mounts, etc.
- Key YETI product features to emphasize: rotomolded construction, double-wall vacuum insulation, MagSlider lids, DryHide shell, PermaFrost insulation, FatWall design, No Sweat design, bear-resistant certification, dishwasher-safe drinkware.
- YETI products are premium-priced; frame value in terms of durability, performance, and long-term investment.
`;
const SYSTEM_PROMPT = `
${IDENTITY_PROMPT}

<tool_calling>
${TOOL_CALLING_PROMPT}
</tool_calling>

<tone_style>
${TONE_STYLE_PROMPT}
</tone_style>

<product_knowledge>
${PRODUCT_KNOWLEDGE_PROMPT}
</product_knowledge>

<guardrails>
${GUARDRAILS_PROMPT}
</guardrails>

<citations>
${CITATIONS_PROMPT}
</citations>

<date_time>
${__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DATE_AND_TIME"]}
</date_time>
`;
}),
"[project]/lib/moderation.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isContentFlagged",
    ()=>isContentFlagged
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/client.mjs [app-route] (ecmascript) <export OpenAI as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config.ts [app-route] (ecmascript)");
;
;
const CATEGORY_DENIAL_MESSAGES = {
    'sexual': __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MODERATION_DENIAL_MESSAGE_SEXUAL"],
    'sexual/minors': __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MODERATION_DENIAL_MESSAGE_SEXUAL_MINORS"],
    'harassment': __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MODERATION_DENIAL_MESSAGE_HARASSMENT"],
    'harassment/threatening': __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MODERATION_DENIAL_MESSAGE_HARASSMENT_THREATENING"],
    'hate': __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MODERATION_DENIAL_MESSAGE_HATE"],
    'hate/threatening': __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MODERATION_DENIAL_MESSAGE_HATE_THREATENING"],
    'illicit': __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MODERATION_DENIAL_MESSAGE_ILLICIT"],
    'illicit/violent': __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MODERATION_DENIAL_MESSAGE_ILLICIT_VIOLENT"],
    'self-harm': __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MODERATION_DENIAL_MESSAGE_SELF_HARM"],
    'self-harm/intent': __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MODERATION_DENIAL_MESSAGE_SELF_HARM_INTENT"],
    'self-harm/instructions': __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MODERATION_DENIAL_MESSAGE_SELF_HARM_INSTRUCTIONS"],
    'violence': __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MODERATION_DENIAL_MESSAGE_VIOLENCE"],
    'violence/graphic': __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MODERATION_DENIAL_MESSAGE_VIOLENCE_GRAPHIC"]
};
const CATEGORY_CHECK_ORDER = [
    'sexual/minors',
    'sexual',
    'harassment/threatening',
    'harassment',
    'hate/threatening',
    'hate',
    'illicit/violent',
    'illicit',
    'self-harm/instructions',
    'self-harm/intent',
    'self-harm',
    'violence/graphic',
    'violence'
];
async function isContentFlagged(text) {
    if (!text || text.trim().length === 0) {
        return {
            flagged: false
        };
    }
    // Skip moderation if no OpenAI API key is configured
    if (!process.env.OPENAI_API_KEY) {
        return {
            flagged: false
        };
    }
    const openai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__["default"]({
        apiKey: process.env.OPENAI_API_KEY
    });
    try {
        const moderationResult = await openai.moderations.create({
            input: text
        });
        const result = moderationResult.results[0];
        if (!result?.flagged) {
            return {
                flagged: false
            };
        }
        const categories = result.categories;
        for (const category of CATEGORY_CHECK_ORDER){
            if (categories[category] === true) {
                return {
                    flagged: true,
                    category,
                    denialMessage: CATEGORY_DENIAL_MESSAGES[category] || __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MODERATION_DENIAL_MESSAGE_DEFAULT"]
                };
            }
        }
        return {
            flagged: true,
            denialMessage: __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MODERATION_DENIAL_MESSAGE_DEFAULT"]
        };
    } catch (error) {
        return {
            flagged: false
        };
    }
}
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/app/api/chat/tools/web-search.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "webSearch",
    ()=>webSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ai/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$exa$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/exa-js/dist/index.mjs [app-route] (ecmascript)");
;
;
;
const exa = process.env.EXA_API_KEY ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$exa$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](process.env.EXA_API_KEY) : null;
const webSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
    description: 'Search the web for up-to-date information',
    inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).describe('The search query')
    }),
    execute: async ({ query })=>{
        if (!exa) {
            console.warn('Web search skipped: EXA_API_KEY not configured');
            return [];
        }
        try {
            const { results } = await exa.search(query, {
                contents: {
                    text: true
                },
                numResults: 3
            });
            return results.map((result)=>({
                    title: result.title,
                    url: result.url,
                    content: result.text?.slice(0, 1000) || '',
                    publishedDate: result.publishedDate
                }));
        } catch (error) {
            console.error('Error searching the web:', error);
            return [];
        }
    }
});
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/types/data.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chunkSchema",
    ()=>chunkSchema,
    "citationSchema",
    ()=>citationSchema,
    "sourceSchema",
    ()=>sourceSchema,
    "uploadedDocumentSchema",
    ()=>uploadedDocumentSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
const uploadedDocumentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    created_at: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const chunkSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    pre_context: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    post_context: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    chunk_type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "image",
        "text"
    ]),
    source_url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    source_description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    source_name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    order: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
});
const sourceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    chunks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(chunkSchema),
    source_url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    source_description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    source_name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const citationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    source_url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    source_description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
}),
"[project]/lib/sources.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aggregateSourcesFromChunks",
    ()=>aggregateSourcesFromChunks,
    "buildContextFromOrderedChunks",
    ()=>buildContextFromOrderedChunks,
    "getCitationsFromSources",
    ()=>getCitationsFromSources,
    "getContextFromSource",
    ()=>getContextFromSource,
    "getContextFromSources",
    ()=>getContextFromSources,
    "getSourceKey",
    ()=>getSourceKey,
    "getSourcesFromChunks",
    ()=>getSourcesFromChunks,
    "mergeSourcesWithChunks",
    ()=>mergeSourcesWithChunks,
    "searchResultsToChunks",
    ()=>searchResultsToChunks,
    "sortChunksInSourceByOrder",
    ()=>sortChunksInSourceByOrder,
    "stripCitationsFromText",
    ()=>stripCitationsFromText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/data.ts [app-route] (ecmascript)");
;
function getSourceKey(source_url, source_description) {
    return `${source_url}|||${source_description}`;
}
function getChunkSourceKey(chunk) {
    return getSourceKey(chunk.source_url, chunk.source_description);
}
function aggregateSourcesFromChunks(chunks) {
    const sourceMap = new Map();
    chunks.forEach((chunk)=>{
        const key = getChunkSourceKey(chunk);
        if (!sourceMap.has(key)) {
            sourceMap.set(key, {
                chunks: [],
                source_url: chunk.source_url,
                source_description: chunk.source_description,
                source_name: chunk.source_name
            });
        }
        sourceMap.get(key).chunks.push(chunk);
    });
    return Array.from(sourceMap.values());
}
function mergeSourcesWithChunks(existingSources, newChunks) {
    const sourceMap = new Map();
    const sourceOrder = [];
    existingSources.forEach((source)=>{
        const key = getSourceKey(source.source_url, source.source_description);
        sourceMap.set(key, source);
        sourceOrder.push(key);
    });
    newChunks.forEach((chunk)=>{
        const key = getChunkSourceKey(chunk);
        if (sourceMap.has(key)) {
            sourceMap.get(key).chunks.push(chunk);
        } else {
            const newSource = {
                chunks: [
                    chunk
                ],
                source_url: chunk.source_url,
                source_description: chunk.source_description,
                source_name: chunk.source_name
            };
            sourceMap.set(key, newSource);
            sourceOrder.push(key);
        }
    });
    return sourceOrder.map((key)=>{
        const source = sourceMap.get(key);
        return sortChunksInSourceByOrder(source);
    });
}
function sortChunksInSourceByOrder(source) {
    source.chunks.sort((a, b)=>a.order - b.order);
    return source;
}
function getSourcesFromChunks(chunks) {
    const sources = aggregateSourcesFromChunks(chunks);
    return sources.map((source)=>sortChunksInSourceByOrder(source));
}
function buildContextFromOrderedChunks(chunks, citationNumber) {
    if (chunks.length === 0) {
        return "";
    }
    let context = "";
    for(let i = 0; i < chunks.length; i++){
        const chunk = chunks[i];
        if (i === 0 || chunk.pre_context !== chunks[i - 1].post_context) {
            context += chunk.pre_context;
        }
        context += " " + chunk.text + ` [${citationNumber}] `;
        if (i === chunks.length - 1 || chunk.post_context !== chunks[i + 1].pre_context) {
            context += chunk.post_context;
        }
        if (i < chunks.length - 1) {
            context += "\n\n";
        }
    }
    return context.trim();
}
function getContextFromSource(source, citationNumber) {
    return `
    <excerpt-from-source>
    # Source ${citationNumber}
    ## Source Name
    ${source.source_name}
    ## Source Description
    ${source.source_description}
    ## Source Citation
    If you use this source, cite it using a markdown link with the source number as the link text, as follows: [${citationNumber}](${source.source_url})
    ## Excerpt from Source
    ${buildContextFromOrderedChunks(source.chunks, citationNumber)}
    </excerpt-from-source>
  `;
}
function getContextFromSources(sources) {
    return sources.map((source, index)=>getContextFromSource(source, index + 1)).join("\n\n\n");
}
function getCitationsFromSources(sources) {
    return sources.map((source)=>__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["citationSchema"].parse({
            source_url: source.source_url,
            source_description: source.source_description
        }));
}
function searchResultsToChunks(results) {
    let records = [];
    if (Array.isArray(results)) {
        records = results;
    } else if (results?.result?.hits && Array.isArray(results.result.hits)) {
        records = results.result.hits;
    } else if (results?.records && Array.isArray(results.records)) {
        records = results.records;
    } else if (results?.matches && Array.isArray(results.matches)) {
        records = results.matches;
    } else if (results?.data && Array.isArray(results.data)) {
        records = results.data;
    } else {
        console.warn("searchResultsToChunks - Invalid results structure:", {
            hasResults: !!results,
            isArray: Array.isArray(results),
            hasResultHits: !!(results && results.result && results.result.hits),
            hasRecords: !!(results && results.records),
            hasMatches: !!(results && results.matches),
            hasData: !!(results && results.data),
            resultsKeys: results ? Object.keys(results) : [],
            resultsType: typeof results
        });
        return [];
    }
    return records.map((record, index)=>{
        const fields = record.fields || record.values || record.data || {};
        const metadata = record.metadata || {};
        let classNo = undefined;
        const classNoValue = fields.class_no !== undefined ? fields.class_no : metadata.class_no !== undefined ? metadata.class_no : undefined;
        if (classNoValue !== undefined && classNoValue !== null && classNoValue !== "") {
            const parsed = typeof classNoValue === 'string' ? parseInt(classNoValue, 10) : classNoValue;
            if (!isNaN(parsed)) {
                classNo = parsed;
            }
        }
        const chunkData = {
            pre_context: fields.pre_context || metadata.pre_context || "",
            text: fields.chunk_text || fields.text || metadata.chunk_text || metadata.text || record.text || "",
            post_context: fields.post_context || metadata.post_context || "",
            chunk_type: fields.chunk_type || metadata.chunk_type || "text",
            source_url: fields.source_url || metadata.source_url || "",
            source_description: fields.source_description || metadata.source_description || "",
            source_name: fields.source_name || metadata.source_name || "",
            order: fields.order !== undefined ? fields.order : metadata.order !== undefined ? metadata.order : 0
        };
        try {
            const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["chunkSchema"].parse(chunkData);
            return parsed;
        } catch (error) {
            return null;
        }
    }).filter((chunk)=>chunk !== null);
}
function stripCitationsFromText(text) {
    return text.replace(/\[\d+\]/g, "").trim();
}
}),
"[project]/lib/pinecone.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pinecone",
    ()=>pinecone,
    "pineconeIndex",
    ()=>pineconeIndex,
    "searchPinecone",
    ()=>searchPinecone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pinecone$2d$database$2f$pinecone$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pinecone-database/pinecone/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sources$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sources.ts [app-route] (ecmascript)");
;
;
;
;
if (!process.env.PINECONE_API_KEY) {
    throw new Error('PINECONE_API_KEY is not set');
}
const pinecone = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pinecone$2d$database$2f$pinecone$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Pinecone"]({
    apiKey: process.env.PINECONE_API_KEY
});
const pineconeIndex = pinecone.Index(__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PINECONE_INDEX_NAME"]);
async function searchPinecone(query) {
    const results = await pineconeIndex.namespace('default').searchRecords({
        query: {
            inputs: {
                text: query
            },
            topK: __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PINECONE_TOP_K"]
        },
        fields: [
            'text',
            'pre_context',
            'post_context',
            'source_url',
            'source_description',
            'source_type',
            'order'
        ]
    });
    const chunks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sources$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["searchResultsToChunks"])(results);
    const sources = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sources$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSourcesFromChunks"])(chunks);
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sources$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getContextFromSources"])(sources);
    return `< results > ${context} </results>`;
}
}),
"[project]/app/api/chat/tools/search-vector-database.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "vectorDatabaseSearch",
    ()=>vectorDatabaseSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ai/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pinecone$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pinecone.ts [app-route] (ecmascript)");
;
;
;
const vectorDatabaseSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
    description: 'Search the vector database for information',
    inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe('The query to search the vector database for. Optimally is a hypothetical answer for similarity search.')
    }),
    execute: async ({ query })=>{
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pinecone$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["searchPinecone"])(query);
    }
});
}),
"[project]/app/api/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "maxDuration",
    ()=>maxDuration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prompts.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$moderation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/moderation.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$chat$2f$tools$2f$web$2d$search$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/chat/tools/web-search.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$chat$2f$tools$2f$search$2d$vector$2d$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/chat/tools/search-vector-database.ts [app-route] (ecmascript)");
;
;
;
;
;
;
const maxDuration = 30;
async function POST(req) {
    const { messages } = await req.json();
    const latestUserMessage = messages.filter((msg)=>msg.role === 'user').pop();
    if (latestUserMessage) {
        const textParts = latestUserMessage.parts.filter((part)=>part.type === 'text').map((part)=>'text' in part ? part.text : '').join('');
        if (textParts) {
            const moderationResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$moderation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isContentFlagged"])(textParts);
            if (moderationResult.flagged) {
                const stream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUIMessageStream"])({
                    execute ({ writer }) {
                        const textId = 'moderation-denial-text';
                        writer.write({
                            type: 'start'
                        });
                        writer.write({
                            type: 'text-start',
                            id: textId
                        });
                        writer.write({
                            type: 'text-delta',
                            id: textId,
                            delta: moderationResult.denialMessage || "Your message violates our guidelines. I can't answer that."
                        });
                        writer.write({
                            type: 'text-end',
                            id: textId
                        });
                        writer.write({
                            type: 'finish'
                        });
                    }
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUIMessageStreamResponse"])({
                    stream
                });
            }
        }
    }
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["streamText"])({
        model: __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MODEL"],
        system: __TURBOPACK__imported__module__$5b$project$5d2f$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SYSTEM_PROMPT"],
        messages: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToModelMessages"])(messages),
        tools: {
            webSearch: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$chat$2f$tools$2f$web$2d$search$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["webSearch"],
            vectorDatabaseSearch: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$chat$2f$tools$2f$search$2d$vector$2d$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["vectorDatabaseSearch"]
        },
        stopWhen: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["stepCountIs"])(2)
    });
    return result.toUIMessageStreamResponse();
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__192577ba._.js.map