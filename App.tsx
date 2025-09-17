import React, { useState, useEffect } from 'react';
import Chatbot from './components/Chatbot';
import LogView from './components/LogView';
import { knowledgeBases } from './knowledge-base';

const App: React.FC = () => {
  const [view, setView] = useState<'chat' | 'log'>('chat');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('view') === 'log') {
      setView('log');
    } else {
      setView('chat');
    }
  }, []);

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
    <div className="h-screen w-screen p-4 font-sans antialiased text-gray-800 dark:text-gray-200">
      {view === 'log' ? (
        <LogView />
      ) : (
        <div className="h-full w-full flex flex-col bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
          <Chatbot knowledgeBase={combinedKnowledgeBase} />
        </div>
      )}
    </div>
  );
};

export default App;
