import React, { useState, useRef, useEffect } from 'react';
import { generateBlogInsight } from '../services/geminiService';
import { Sparkles, X, ArrowRight } from './Icons';
import { ChatMessage } from '../types';
import ReactMarkdown from 'react-markdown';

interface AssistantProps {
  articleContent: string;
}

const Assistant: React.FC<AssistantProps> = ({ articleContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: query };
    setMessages(prev => [...prev, userMessage]);
    setQuery('');
    setIsLoading(true);

    const result = await generateBlogInsight(articleContent, userMessage.text);
    
    setMessages(prev => [...prev, { role: 'model', text: result }]);
    setIsLoading(false);
  };

  // Initial greeting when opening
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        role: 'model',
        text: "你好！我是你的 AI 阅读助手。关于这篇文章，你可以问我任何问题，或者让我为你总结摘要。"
      }]);
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl rounded-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-200">
          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="font-semibold text-sm text-gray-900 dark:text-white">AI 助手</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 dark:bg-gray-950/50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-black text-white dark:bg-blue-600 rounded-br-none' 
                      : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 shadow-sm rounded-bl-none prose prose-sm dark:prose-invert max-w-none'
                  }`}
                >
                  {msg.role === 'model' ? (
                     <ReactMarkdown components={{
                        p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                        a: ({node, ...props}) => <a className="text-blue-600 dark:text-blue-400 hover:underline" {...props} />,
                        code: ({node, ...props}) => <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded font-mono text-xs" {...props} />
                     }}>
                        {msg.text}
                     </ReactMarkdown>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start w-full">
                 <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-3 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="关于本文提问..."
              className="flex-1 bg-gray-50 dark:bg-gray-800 border-0 rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-black dark:focus:ring-white focus:outline-none placeholder-gray-400 text-gray-900 dark:text-white"
            />
            <button 
              type="submit"
              disabled={!query.trim() || isLoading}
              className="p-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white rotate-90' 
            : 'bg-black dark:bg-blue-600 text-white hover:scale-110'
        }`}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
      </button>
    </div>
  );
};

export default Assistant;