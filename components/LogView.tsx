import React, { useState, useEffect } from 'react';
import { Message } from '../types';
import { themeConfig } from '../theme';

const LogView: React.FC = () => {
  const [logs, setLogs] = useState<Message[]>([]);

  useEffect(() => {
    try {
      const savedLogsJSON = localStorage.getItem('chat-logs');
      if (savedLogsJSON) {
        const savedLogs = JSON.parse(savedLogsJSON);
        if (Array.isArray(savedLogs)) {
          setLogs(savedLogs);
        }
      }
    } catch (error) {
      console.error('Failed to load logs from localStorage', error);
    }
  }, []);

  const handleClearLogs = () => {
    if (
      window.confirm(
        'Are you sure you want to delete all conversation logs? This action cannot be undone.'
      )
    ) {
      localStorage.removeItem('chat-logs');
      setLogs([]);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="h-full w-full flex flex-col bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center flex-wrap gap-2">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Conversation Logs
        </h1>
        <button
          onClick={handleClearLogs}
          className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
          aria-label="Clear all conversation logs"
        >
          Clear Logs
        </button>
      </div>
      <div className="flex-grow p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        {logs.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-center text-gray-500 dark:text-gray-400">
              No conversation logs found.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {logs.map((message) => (
              <div
                key={message.id}
                className={`flex flex-col ${
                  message.role === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`text-xs text-gray-500 dark:text-gray-400 mb-1 px-2`}
                >
                  <strong>{message.role === 'user' ? 'User' : 'Bot'}</strong> -{' '}
                  {formatDate(message.timestamp)}
                </div>
                <div
                  className={`max-w-xl px-4 py-2 rounded-xl ${
                    message.role === 'user'
                      ? `bg-${themeConfig.primaryColor}-600 text-white rounded-br-none`
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm" style={{ whiteSpace: 'pre-wrap' }}>
                    {message.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LogView;
