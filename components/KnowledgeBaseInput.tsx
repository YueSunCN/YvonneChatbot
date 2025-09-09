import React, { useState } from 'react';

interface KnowledgeBaseInputProps {
  onUpdate: (kbs: { kb1: string; kb2: string }) => void;
}

type ActiveTab = 'kb1' | 'kb2';

const KnowledgeBaseInput: React.FC<KnowledgeBaseInputProps> = ({ onUpdate }) => {
  const [kb1Content, setKb1Content] = useState('');
  const [kb2Content, setKb2Content] = useState('');
  const [activeTab, setActiveTab] = useState<ActiveTab>('kb1');

  const handleUpdateClick = () => {
    onUpdate({ kb1: kb1Content, kb2: kb2Content });
  };
  
  const getTabClass = (tab: ActiveTab) => {
    return activeTab === tab
      ? 'border-indigo-500 text-indigo-600'
      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300';
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
        1. Provide Your Knowledge Bases
      </h2>
      <p className="text-gray-600 mb-4">
        Paste content into the knowledge bases below. The chatbot will use information from both to answer questions.
      </p>
      
      <div className="border-b border-gray-200 mb-4">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('kb1')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${getTabClass('kb1')}`}
          >
            Knowledge Base 1
          </button>
          <button
            onClick={() => setActiveTab('kb2')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${getTabClass('kb2')}`}
            aria-current={activeTab === 'kb2' ? 'page' : undefined}
          >
            Knowledge Base 2
          </button>
        </nav>
      </div>

      <div className="flex-grow flex flex-col">
        {activeTab === 'kb1' && (
          <textarea
            className="w-full flex-grow p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200"
            placeholder="Paste content for the first knowledge base here..."
            value={kb1Content}
            onChange={(e) => setKb1Content(e.target.value)}
          />
        )}
        {activeTab === 'kb2' && (
          <textarea
            className="w-full flex-grow p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200"
            placeholder="Paste content for the second knowledge base here..."
            value={kb2Content}
            onChange={(e) => setKb2Content(e.target.value)}
          />
        )}
      </div>

      <button
        onClick={handleUpdateClick}
        className="mt-4 w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 duration-200"
      >
        Update Chatbot Knowledge
      </button>
    </div>
  );
};

export default KnowledgeBaseInput;