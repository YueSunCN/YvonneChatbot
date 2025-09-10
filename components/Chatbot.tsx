
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { Message } from '../types';

interface ChatbotProps {
  knowledgeBase: string;
}

// ⚠️ IMPORTANT: Replace this with your actual Google AI API key.
// Your API key will be visible in the browser's source code.
// Go to your Google Cloud console and RESTRICT this key to your website's domain for security.
const API_KEY = "AIzaSyArzXuQ64W1oa4vVymvVNWEvpxnk3zO6Bk";

const BotIcon = () => (
  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold flex-shrink-0">
    Y
  </div>
);

const UserIcon = () => (
  <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold flex-shrink-0">
    U
  </div>
);

const TypingIndicator = () => (
    <div className="flex items-center space-x-1 p-2">
        <div className="w-2 h-2 bg-indigo-300 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-indigo-300 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-indigo-300 rounded-full animate-pulse"></div>
    </div>
);


const Chatbot: React.FC<ChatbotProps> = ({ knowledgeBase }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [chat, setChat] = useState<Chat | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    // Check if the API key has been set. If not, show an error and stop.
    if (!API_KEY || API_KEY === "YOUR_API_KEY_HERE") {
      setError("API Key is missing. Please add your key to components/Chatbot.tsx");
      return;
    }

    if (knowledgeBase) {
      const systemInstruction = `You are a personal chatbot representing Yvonne (Yue) Sun. Your purpose is to help visitors learn more about her career journey, skills, and experiences. Your role is to go beyond the main points on her website by sharing additional context, background stories, and insights. Present information in a clear and professional manner to help users fully understand Yvonne’s expertise and what makes her unique.

**Formatting Guidelines:**
- Formulate your answers in complete sentences and well-structured paragraphs.
- Avoid using markdown formatting, especially asterisks (*), for lists or emphasis. Instead, integrate lists naturally into your sentences.

**Answering Strategy:**
Your primary goal is to answer questions using the provided knowledge base(s) below. First, try to find a direct answer. If one is not available, analyze the information to infer a logical and relevant response. If the question cannot be answered even through analysis of the knowledge base, you may use your general knowledge to provide a helpful answer, but you must preface it by stating that the information comes from your general knowledge and is not from Yvonne's provided materials.

Here are the knowledge bases you must use:
${knowledgeBase}`;

      try {
        const ai = new GoogleGenAI({ apiKey: API_KEY });
        const newChat = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: systemInstruction,
          },
        });
        setChat(newChat);
        setMessages([
          {
            id: 'init',
            role: 'bot',
            text: "Hi there, this is Yvonne's chatbot, welcome to ask me anything.",
          },
        ]);
      } catch (e) {
         setError('Failed to initialize the chatbot. Please check the API key and configuration.');
         console.error(e);
      }
    }
  }, [knowledgeBase]);

  const handleSendMessage = useCallback(async () => {
    if (!input.trim() || isLoading || !chat) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await chat.sendMessage({ message: input });
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: response.text,
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (e: any) {
      const errorMessage = 'Sorry, I encountered an error. Please try again.';
      setError(errorMessage);
      setMessages(prev => [...prev, {id: 'error', role: 'bot', text: errorMessage}]);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, chat]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
        <div className="p-4 border-b border-gray-200 text-center">
            <h1 className="text-2xl font-bold text-gray-900">Yvonne's Chatbot</h1>
            <p className="text-sm text-gray-500 mt-1">
                Ask me anything about her career, skills, and experiences.
            </p>
        </div>
      <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
              {message.role === 'bot' && <BotIcon />}
              <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-xl ${
                  message.role === 'user'
                    ? 'bg-indigo-600 text-white rounded-br-none'
                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
                }`}>
                <p className="text-sm" style={{ whiteSpace: 'pre-wrap' }}>{message.text}</p>
              </div>
              {message.role === 'user' && <UserIcon />}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3">
              <BotIcon />
              <div className="bg-gray-200 text-gray-800 rounded-xl rounded-bl-none">
                 <TypingIndicator />
              </div>
            </div>
          )}
           {error && (
            <div className="flex justify-center p-4">
              <p className="text-red-600 bg-red-100 p-3 rounded-lg text-sm mt-2">{error}</p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="relative">
          <input
            type="text"
            className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200 disabled:bg-gray-100"
            placeholder={error ? "Chatbot is disabled." : "Type your message..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading || !chat || !!error}
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading || !input.trim() || !chat || !!error}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
