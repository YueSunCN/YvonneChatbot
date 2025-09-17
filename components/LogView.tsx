
import React, { useState, useEffect, useCallback } from 'react';
import { Message } from '../types';
import { themeConfig } from '../theme';

type Logs = Record<string, Message[]>;

const LogView: React.FC = () => {
  const [logs, setLogs] = useState<Logs>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLogs = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('/api/logs');
      if (!response.ok) {
        throw new Error('Failed to fetch logs from the server.');
      }
      const data: Logs = await response.json();
      setLogs(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(errorMessage);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);

  const handleClearLogs = async () => {
    if (
      window.confirm(
        'Are you sure you want to delete ALL conversation logs from the server? This action cannot be undone.'
      )
    ) {
      try {
        const response = await fetch('/api/clear-logs', { method: 'POST' });
        if (!response.ok) {
          throw new Error('Failed to clear logs.');
        }
        setLogs({});
        // also clear local logs for consistency
        localStorage.removeItem('chat-logs');
      } catch (err) {
        alert('An error occurred while clearing logs. Please try again.');
        console.error(err);
      }
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500 dark:text-gray-400">Loading logs...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex items-center justify-center h-full">
          <p className="text-red-500 dark:text-red-400">Error: {error}</p>
        </div>
      );
    }

    if (Object.keys(logs).length === 0) {
      return (
        <div className="flex items-center justify-center h-full">
          <p className="text-center text-gray-500 dark:text-gray-400">
            No conversation logs found on the server.
          </p>
        </div>
      );
    }

    // Sort sessions by the timestamp of their first message, descending
    const sortedSessionIds = Object.keys(logs).sort((a, b) => {
        const aFirstMessage = logs[a]?.[0]?.timestamp ?? 0;
        const bFirstMessage = logs[b]?.[0]?.timestamp ?? 0;
        return bFirstMessage - aFirstMessage;
    });

    return (
        <div className="space-y-6">
        {sortedSessionIds.map((sessionId) => (
          <div key={sessionId} className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden">
            <div className="bg-gray-100 dark:bg-gray-800 p-3 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-md font-semibold text-gray-800 dark:text-gray-200">
                Session ID: <span className="font-mono text-sm text-gray-600 dark:text-gray-400">{sessionId}</span>
              </h2>
            </div>
            <div className="p-4 space-y-4">
            {logs[sessionId].map((message) => (
              <div
                key={message.id}
                className={`flex flex-col ${
                  message.role === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 px-2">
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
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="h-full w-full flex flex-col bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center flex-wrap gap-2">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Conversation Logs (Server)
        </h1>
        <button
          onClick={handleClearLogs}
          className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors disabled:bg-red-400"
          aria-label="Clear all conversation logs from server"
          disabled={isLoading || Object.keys(logs).length === 0}
        >
          Clear All Logs
        </button>
      </div>
      <div className="flex-grow p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        {renderContent()}
      </div>
    </div>
  );
};

export default LogView;
