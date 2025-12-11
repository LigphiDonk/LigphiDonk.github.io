import React from 'react';
import { NavLink } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Home, User, Github, Search, Tag, Sparkles } from './Icons';

interface SidebarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedTag, 
  setSelectedTag,
  className = "" 
}) => {
  const allTags = Array.from(new Set(BLOG_POSTS.flatMap(p => p.tags)));

  return (
    <aside className={`flex flex-col h-full ${className}`}>
      {/* Profile Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                <span className="text-white dark:text-black font-bold text-lg">TL</span>
            </div>
            <div>
                <h1 className="font-bold text-lg leading-tight tracking-tight text-gray-900 dark:text-white">TechnoLogos</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">构建未来的代码</p>
            </div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-4">
          专注探讨软件架构、AGI 以及下一代人机交互设计的技术博客。
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <input 
          type="text" 
          placeholder="搜索文章..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-gray-900 dark:text-gray-100 placeholder-gray-400"
        />
        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
      </div>

      {/* Navigation */}
      <nav className="space-y-1 mb-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              isActive 
                ? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-black dark:hover:text-white'
            }`
          }
        >
          <Home className="w-4 h-4" />
          首页
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              isActive 
                ? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-black dark:hover:text-white'
            }`
          }
        >
          <User className="w-4 h-4" />
          关于我
        </NavLink>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-black dark:hover:text-white transition-all"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
      </nav>

      {/* Tags */}
      <div>
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-1 flex items-center gap-2">
           <Tag className="w-3 h-3" /> 标签
        </h3>
        <div className="flex flex-wrap gap-2">
           <button
             onClick={() => setSelectedTag(null)}
             className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
               selectedTag === null
                 ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                 : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700'
             }`}
           >
             全部
           </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                selectedTag === tag
                  ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      
      <div className="mt-auto pt-6 text-xs text-gray-400">
         © {new Date().getFullYear()} TechnoLogos
      </div>
    </aside>
  );
};
