
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

// This function is the serverless endpoint.
export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  // Ensure the API key is available as an environment variable on the server.
  const apiKey = process.env.GEMINI_APNWEvpxnk3zO6BkI_KEY;
  if (!apiKey) {
    console.error('API_KEY is not configured in Vercel environment variables.');
    return response.status(500).json({ error: 'API key not configured on the server.' });
  }

  try {
    const { history, knowledgeBase, message } = request.body;

    if (!history || !knowledgeBase || !message) {
      return response.status(400).json({ error: 'Missing required fields: history, knowledgeBase, message' });
    }

    const ai = new GoogleGenAI({ apiKey });

    // Construct the system instruction and initialize the chat model.
    const systemInstruction = `You are a personal chatbot representing Yvonne (Yue) Sun. Your purpose is to help visitors learn more about her career journey, skills, and experiences. Your role is to go beyond the main points on her website by sharing additional context, background stories, and insights. Present information in a clear and professional manner to help users fully understand Yvonne’s expertise and what makes her unique.

**Formatting Guidelines:**
- Formulate your answers in complete sentences and well-structured paragraphs.
- Avoid using markdown formatting, especially asterisks (*), for lists or emphasis. Instead, integrate lists naturally into your sentences.

**Answering Strategy:**
Your primary goal is to answer questions using the provided knowledge base(s) below. First, try to find a direct answer. If one is not available, analyze the information to infer a logical and relevant response. If the question cannot be answered even through analysis of the knowledge base, you may use your general knowledge to provide a helpful answer, but you must preface it by stating that the information comes from your general knowledge and is not from Yvonne's provided materials.

Here are the knowledge bases you must use:
${knowledgeBase}`;

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
      },
      // Pass the previous conversation history to the model.
      history: history.map((msg: { role: string, text: string }) => ({
        role: msg.role === 'bot' ? 'model' : 'user',
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessage({ message });
    
    // Send the model's response back to the frontend.
    response.status(200).json({ text: result.text });

  } catch (error: unknown) {
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    // Log the detailed error to the Vercel console for debugging.
    console.error('Error communicating with AI service:', error);
    
    // Send a more structured error back to the frontend.
    response.status(500).json({ 
        error: 'Failed to communicate with the AI service.',
        details: errorMessage 
    });
  }
}
