import React from 'react';
import { Github, MessageSquare } from './Icons';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 animate-in fade-in duration-500">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">关于我</h1>
        <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300">
          <p className="lead">
            你好，我是 TechnoLogos 的创建者。我是一名热衷于探索软件架构与人工智能交叉领域的全栈工程师。
          </p>
          <p>
            在这个日新月异的技术时代，我相信“系统思维”是解决复杂问题的关键。这个博客是我思考、记录和分享技术见解的数字花园。我主要关注以下领域：
          </p>
          <ul>
            <li><strong>前端工程化</strong>：React 生态、Server Components、Web 性能优化。</li>
            <li><strong>AI 基础设施</strong>：LLM 应用开发、RAG 架构、Agent 设计模式。</li>
            <li><strong>UI/UX 设计</strong>：极简主义设计哲学、设计系统构建。</li>
          </ul>
          <p>
            除写代码外，我也热衷于摄影和科幻小说。我相信技术应当服务于人文，创造更美好的体验。
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
         <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">技术栈</h3>
            <div className="flex flex-wrap gap-2">
               {['React', 'TypeScript', 'Node.js', 'Rust', 'Tailwind', 'Next.js', 'PostgreSQL', 'Docker'].map(skill => (
                  <span key={skill} className="text-xs px-2 py-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md text-gray-600 dark:text-gray-300">
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
                   <span>contact@technologos.dev</span>
                </li>
                <li className="flex items-center gap-2">
                   <Github className="w-4 h-4" />
                   <span>@TechnoLogosGithub</span>
                </li>
             </ul>
         </div>
      </div>
    </div>
  );
};

export default AboutPage;