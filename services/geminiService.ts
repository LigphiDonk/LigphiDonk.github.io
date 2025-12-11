import { GoogleGenAI } from "@google/genai";

// Initialize the API client
// Note: In a real production build, ensure process.env.API_KEY is replaced during build time or available in runtime.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBlogInsight = async (
  context: string,
  prompt: string
): Promise<string> => {
  try {
    const modelId = 'gemini-2.5-flash';
    
    const fullPrompt = `
    You are a helpful technical assistant embedded in a technical blog.
    
    CONTEXT (The current article content):
    "${context}"
    
    USER PROMPT:
    ${prompt}
    
    Instructions:
    - Answer based on the context provided.
    - Keep the tone professional, concise, and helpful (OpenAI/Technical style).
    - IMPORTANT: Always answer in CHINESE (Simplified) to match the blog's language.
    - If the answer isn't in the context, use your general knowledge but mention that it's outside the article's scope.
    - Format response in Markdown.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: fullPrompt,
    });

    return response.text || "暂时无法生成回复。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "抱歉，处理您的请求时遇到错误。请检查 API Key 配置。";
  }
};
