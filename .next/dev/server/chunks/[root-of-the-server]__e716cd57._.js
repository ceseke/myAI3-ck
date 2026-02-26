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
const MODEL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["google"])('gemini-2.5-flash');
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
const AI_NAME = "Ranger";
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
    "DATA_SOURCE_PROMPT",
    ()=>DATA_SOURCE_PROMPT,
    "GUARDRAILS_PROMPT",
    ()=>GUARDRAILS_PROMPT,
    "IDENTITY_PROMPT",
    ()=>IDENTITY_PROMPT,
    "SYSTEM_PROMPT",
    ()=>SYSTEM_PROMPT,
    "TONE_STYLE_PROMPT",
    ()=>TONE_STYLE_PROMPT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config.ts [app-route] (ecmascript)");
;
;
const IDENTITY_PROMPT = `
You are ${__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AI_NAME"]}, a knowledgeable and enthusiastic AI assistant specializing in YETI products.
You were designed by ${__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OWNER_NAME"]} to help customers explore, compare, and choose the perfect YETI products for their needs.
You are NOT OpenAI, Anthropic, or any other third-party AI vendor — you are ${__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AI_NAME"]}, built specifically for YETI.
`;
const DATA_SOURCE_PROMPT = `
- You will be provided with YETI product data from our knowledge base or from yeti.com. Use ONLY this provided data to answer questions.
- If the provided data does not contain the answer, say so honestly and suggest the user visit yeti.com for more information.
- Do NOT make up product details, prices, or specifications that are not in the provided data.
- If no product data is provided, give a brief general response and direct the user to yeti.com for specific details.
`;
const TONE_STYLE_PROMPT = `
- Maintain an enthusiastic, friendly, and outdoors-inspired tone — like a knowledgeable friend at a gear shop.
- Be conversational but informative. Use vivid descriptions that help customers imagine using the product.
- When comparing products, use clear bullet points or tables to make differences easy to understand.
- If a customer is unsure, ask clarifying questions about their use case (camping, fishing, daily carry, etc.) to recommend the best product.
- Use emojis sparingly and naturally (🏕️ 🎣 🧊 🥤) to enhance the outdoor vibe.
- Keep responses concise and focused — avoid overly long answers.
`;
const GUARDRAILS_PROMPT = `
- Stay focused on YETI products, outdoor gear, and related topics (camping, fishing, hunting, tailgating, travel, etc.).
- Politely redirect off-topic conversations back to YETI products and outdoor adventures.
- Strictly refuse and end engagement if a request involves dangerous, illegal, or inappropriate activities.
- Never disparage competing brands. If asked about competitors, focus on YETI's unique strengths instead.
`;
const CITATIONS_PROMPT = `
- When citing product information, reference the source if a URL is available, e.g., [Source](URL).
- Prefer linking to yeti.com product pages when available.
`;
const SYSTEM_PROMPT = `
${IDENTITY_PROMPT}

<data_source>
${DATA_SOURCE_PROMPT}
</data_source>

<tone_style>
${TONE_STYLE_PROMPT}
</tone_style>

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
    try {
        const results = await pineconeIndex.namespace('__default__').searchRecords({
            query: {
                inputs: {
                    text: query
                },
                topK: __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PINECONE_TOP_K"]
            },
            fields: [
                'text',
                'Product',
                'Color',
                'Dimensions',
                'Size',
                'Weight',
                'Rating',
                'Price'
            ]
        });
        // Extract hits from the response
        const hits = results?.result?.hits || [];
        if (hits.length === 0) {
            console.log('Pinecone: No matching records found');
            return '';
        }
        console.log(`Pinecone: Found ${hits.length} matching records`);
        // Format each record into readable text for the AI
        const formatted = hits.map((hit, i)=>{
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pinecone$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pinecone.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$exa$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/exa-js/dist/index.mjs [app-route] (ecmascript)");
;
;
;
;
;
;
const exa = process.env.EXA_API_KEY ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$exa$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](process.env.EXA_API_KEY) : null;
// Fallback: search the web via Exa ONLY when Pinecone has no results
async function searchWebFallback(query) {
    if (!exa) return '';
    try {
        const { results } = await exa.search(query + ' site:yeti.com', {
            contents: {
                text: true
            },
            numResults: 2
        });
        if (results.length === 0) return '';
        const formatted = results.map((r, i)=>`Source ${i + 1}: ${r.title}\nURL: ${r.url}\n${(r.text || '').slice(0, 800)}`).join('\n\n');
        return `<web_search_results>\n${formatted}\n</web_search_results>`;
    } catch (error) {
        console.error('Exa search failed:', error);
        return '';
    }
}
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
            // Step 1: Always search Pinecone first (free — no API cost)
            let context = '';
            try {
                context = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pinecone$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["searchPinecone"])(textParts);
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
            const systemWithContext = context ? `${__TURBOPACK__imported__module__$5b$project$5d2f$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SYSTEM_PROMPT"]}\n\n<yeti_product_data>\nThe following product data was retrieved. Use this to answer the user's question:\n${context}\n</yeti_product_data>` : __TURBOPACK__imported__module__$5b$project$5d2f$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SYSTEM_PROMPT"];
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["streamText"])({
                model: __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MODEL"],
                system: systemWithContext,
                messages: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToModelMessages"])(messages)
            });
            return result.toUIMessageStreamResponse();
        }
    }
    // Fallback if no text content found
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["streamText"])({
        model: __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MODEL"],
        system: __TURBOPACK__imported__module__$5b$project$5d2f$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SYSTEM_PROMPT"],
        messages: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToModelMessages"])(messages)
    });
    return result.toUIMessageStreamResponse();
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e716cd57._.js.map