import React from 'react';
import Chatbot from './components/Chatbot';
import { knowledgeBases } from './knowledge-base';

const App: React.FC = () => {
  // Combine all configured knowledge bases into a single string for the chatbot.
  // Each knowledge base is clearly demarcated for the AI to understand the context.
  const combinedKnowledgeBase = knowledgeBases
    .map(
      (kb) =>
        `--- START OF KNOWLEDGE BASE: ${kb.name} ---\n\n${kb.content.trim()}\n\n--- END OF KNOWLEDGE BASE: ${
          kb.name
        } ---`
    )
    .join('\n\n');

  return (
    <div className="min-h-screen font-sans antialiased text-gray-800 bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[85vh] md:h-[90vh]">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col h-full">
           <Chatbot knowledgeBase={combinedKnowledgeBase} />
        </div>
      </div>
    </div>
  );
};

export default App;