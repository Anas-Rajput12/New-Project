import { NextRequest, NextResponse } from 'next/server';
import { QdrantClient } from '@qdrant/js-client-rest';
import OpenAI from 'openai';

const QDRANT_URL = process.env.QDRANT_URL || '';
const QDRANT_API_KEY = process.env.QDRANT_API_KEY || '';
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '';

// Using GPT-3.5 Turbo for chat completions (reliable and fast)
const COLLECTION_NAME = 'coforge_website';
const EMBEDDING_MODEL = 'openai/text-embedding-3-small';
const CHAT_MODEL = 'openai/gpt-3.5-turbo';

// Log environment variables status (without exposing keys)
console.log('Environment check:', {
  hasQdrantUrl: !!QDRANT_URL,
  hasQdrantKey: !!QDRANT_API_KEY,
  hasOpenRouterKey: !!OPENROUTER_API_KEY,
});

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: OPENROUTER_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    'X-Title': 'CoForge DevX',
  },
});

const qdrantClient = new QdrantClient({
  url: QDRANT_URL,
  apiKey: QDRANT_API_KEY,
});

async function generateEmbedding(text: string): Promise<number[]> {
  try {
    const response = await openai.embeddings.create({
      model: EMBEDDING_MODEL,
      input: text,
    });
    return response.data[0].embedding;
  } catch (error) {
    console.error('Error generating embedding:', error);
    throw error;
  }
}

async function searchRelevantContext(query: string, limit: number = 5): Promise<string> {
  try {
    const queryEmbedding = await generateEmbedding(query);

    const searchResults = await qdrantClient.search(COLLECTION_NAME, {
      vector: queryEmbedding,
      limit: limit,
      with_payload: true,
    });

    if (searchResults.length === 0) {
      return 'No relevant information found in the knowledge base.';
    }

    const context = searchResults
      .map((result, index) => {
        const payload = result.payload as any;
        return `[Source ${index + 1}: ${payload.title || payload.source}]\n${payload.text}`;
      })
      .join('\n\n---\n\n');

    return context;
  } catch (error) {
    console.error('Error searching Qdrant:', error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('Chatbot API called');

    // Check environment variables
    if (!QDRANT_URL || !QDRANT_API_KEY || !OPENROUTER_API_KEY) {
      console.error('Missing environment variables');
      return NextResponse.json(
        {
          error: 'Server configuration error',
          details: 'Missing required API keys. Please check server configuration.',
        },
        { status: 500 }
      );
    }

    const { message, conversationHistory = [] } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    console.log('User message:', message);

    // Search for relevant context from Qdrant
    console.log('Searching Qdrant...');
    const relevantContext = await searchRelevantContext(message);
    console.log('Context retrieved');

    // Build the system prompt with context
    const systemPrompt = `You are CoForge AI Assistant, a helpful and knowledgeable chatbot for CoForge DevX website.

Your role is to assist visitors by answering questions about:
- Company services and offerings
- Projects and portfolio
- Technologies and tech stack
- Pricing and engagement models
- Contact information
- Team and company culture
- Development process and methodology

Use the following context from the CoForge website to answer the user's question. If the context doesn't contain relevant information, politely say you don't have that specific information and suggest contacting the team directly.

CONTEXT FROM KNOWLEDGE BASE:
${relevantContext}

GUIDELINES:
- Be friendly, professional, and helpful
- Provide accurate information based on the context
- If you're not sure, admit it and suggest contacting the team
- Keep responses concise but informative
- Use emojis sparingly for a friendly tone
- Always encourage users to contact the team for custom quotes or detailed discussions
- Include relevant links when mentioning pages (e.g., /contact, /projects, /about)

Contact Information:
- Email: coforgedevx@gmail.com
- Phone: +92 316 4583774
- LinkedIn: https://www.linkedin.com/company/coforge-devx/
- GitHub: https://github.com/Anas-Rajput12`;

    // Build messages array for the chat completion
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.map((msg: any) => ({
        role: msg.role,
        content: msg.content,
      })),
      { role: 'user', content: message },
    ];

    // Generate response using OpenRouter
    console.log('Calling OpenRouter...');
    const completion = await openai.chat.completions.create({
      model: CHAT_MODEL,
      messages: messages as any,
      temperature: 0.7,
      max_tokens: 800,
    });

    const assistantMessage = completion.choices[0].message.content;
    console.log('Response generated successfully');

    return NextResponse.json({
      message: assistantMessage,
      success: true,
    });
  } catch (error: any) {
    console.error('Error in chatbot API:', error);
    console.error('Error stack:', error.stack);
    return NextResponse.json(
      {
        error: 'Failed to process your message',
        details: error.message || 'Unknown error occurred',
        type: error.constructor.name,
      },
      { status: 500 }
    );
  }
}
