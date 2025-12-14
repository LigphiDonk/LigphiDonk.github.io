import React from 'react';
import { Github, MessageSquare } from './Icons';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 animate-in fade-in duration-500">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">关于我</h1>
        <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300">
          <p className="lead">你好，我是 keepgo 的创建者。我是一名探索 AI 的普通人。</p>
          <p>这个博客用来记录与分享我在学习、实践中的一些想法与笔记。</p>
          <ul>
            <li><strong>生活随记</strong>：记录一些灵感与见闻</li>
            <li><strong>AI 基础设施</strong>：LLM 应用开发、RAG 架构、Agent 设计模式</li>
            <li><strong>读书笔记</strong>：阅读与学习过程中的总结</li>
          </ul>
          <p>我相信技术应当服务于人，创造更好的体验。</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">技术栈</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Node.js', 'Rust', 'Tailwind', 'Next.js', 'PostgreSQL', 'Docker'].map(skill => (
              <span
                key={skill}
                className="text-xs px-2 py-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md text-gray-600 dark:text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">联系方式</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              <span>contact@keepgo.icu</span>
            </li>
            <li className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <span>@keepgo</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
