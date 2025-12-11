import React from 'react';
import { NavLink } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

export const Sidebar: React.FC = () => {
  return (
    <aside className="hidden lg:block w-64 shrink-0 border-r border-gray-100 pr-6 py-8 sticky top-16 self-start h-[calc(100vh-4rem)] overflow-y-auto scrollbar-hide">
      <nav className="space-y-10">
        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-3">
            探索
          </h3>
          <div className="flex flex-col space-y-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`
              }
            >
              首页
            </NavLink>
             <NavLink
              to="/admin"
              className={({ isActive }) =>
                `text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`
              }
            >
              管理后台
            </NavLink>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-3">
            文章列表
          </h3>
          <div className="flex flex-col space-y-1">
            {BLOG_POSTS.map((post) => (
              <NavLink
                key={post.id}
                to={`/post/${post.slug}`}
                className={({ isActive }) =>
                  `text-sm px-3 py-2 rounded-lg transition-colors line-clamp-2 block ${
                    isActive ? 'bg-gray-100 text-black font-medium' : 'text-gray-500 hover:text-black hover:bg-gray-50'
                  }`
                }
              >
                {post.title}
              </NavLink>
            ))}
          </div>
        </div>
        
        <div>
           <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-3">
            标签
          </h3>
           <div className="flex flex-wrap gap-2 px-3">
             {Array.from(new Set(BLOG_POSTS.flatMap(p => p.tags))).map(tag => (
               <span key={tag} className="text-[10px] text-gray-500 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                 {tag}
               </span>
             ))}
           </div>
        </div>
      </nav>
    </aside>
  );
};