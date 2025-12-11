import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { BLOG_POSTS } from './constants';
import { BlogPost } from './types';
import Assistant from './components/Assistant';
import CommentSection from './components/CommentSection';
import AdminDashboard from './components/AdminDashboard';
import { Sidebar } from './components/Sidebar';
import { Github, ArrowRight, ArrowLeft } from './components/Icons';

// --- Components ---

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 border-b border-gray-100 transition-all duration-200">
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity">
            TechnoLogos
          </Link>
        </div>
        <nav className="flex items-center gap-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="border-t border-gray-100 py-12 mt-20">
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
      <p>© {new Date().getFullYear()} TechnoLogos. 基于 React & Gemini 构建。</p>
      <div className="flex gap-6 items-center">
        <Link to="/admin" className="hover:text-black transition-colors">管理后台</Link>
        <span className="text-gray-300">|</span>
        <a href="#" className="hover:text-black transition-colors">Twitter</a>
        <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
      </div>
    </div>
  </footer>
);

const PostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <Link to={`/post/${post.slug}`} className="group block">
    <article className="py-8 border-b border-gray-100 group-last:border-0 hover:bg-gray-50/50 -mx-4 px-4 rounded-2xl transition-colors duration-300">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
           <span>{post.date}</span>
           <span>•</span>
           <span>{post.readTime}</span>
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-gray-600 transition-colors">
          {post.title}
        </h2>
        <p className="text-gray-500 leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-2 text-sm font-medium text-black mt-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          阅读全文 <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </article>
  </Link>
);

const HomePage: React.FC = () => {
  return (
    <div className="w-full py-12 lg:py-16">
      <section className="mb-20 space-y-6">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter text-black max-w-3xl">
          以系统思维思考，<br/>
          用代码构建未来。
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl leading-relaxed font-light">
          关于软件架构、人工智能以及人机交互未来的个人思考合集。
        </p>
      </section>

      <section className="max-w-3xl">
        <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-widest">最新文章</h3>
        </div>
        <div className="flex flex-col gap-2">
          {BLOG_POSTS.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};

const ArticlePage: React.FC = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">文章未找到</h2>
        <Link to="/" className="mt-4 text-blue-600 hover:underline">返回首页</Link>
      </div>
    );
  }

  return (
    <div className="relative w-full py-12 lg:py-16">
      <div className="max-w-3xl">
        <Link to="/" className="lg:hidden inline-flex items-center text-sm text-gray-400 hover:text-black transition-colors mb-12 group">
           <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
           返回首页
        </Link>
        
        <header className="mb-12 space-y-6">
          <div className="flex gap-2 mb-6">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
             <span>{post.date}</span>
             <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
             <span>{post.readTime}</span>
          </div>
        </header>

        <article className="prose prose-lg prose-slate prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-xl text-gray-800">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
        
        {/* Comment Section */}
        <CommentSection postSlug={post.slug} />

        <hr className="my-16 border-gray-100" />
        
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
           <h3 className="text-xl font-bold mb-2">感谢阅读</h3>
           <p className="text-gray-500 mb-6">如果您喜欢这篇文章，欢迎在左侧浏览其他内容。</p>
        </div>
      </div>
      
      {/* AI Assistant available on every article page */}
      <Assistant articleContent={post.title + "\n" + post.content} />
    </div>
  );
};

// --- Main App ---

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white selection:bg-black selection:text-white">
        <Header />
        
        {/* Main Layout Container */}
        <div className="flex-1 max-w-[1400px] mx-auto w-full px-6 flex items-start gap-12">
          {/* Sidebar Navigation - Sticky on Desktop */}
          <Sidebar />
          
          {/* Content Area */}
          <main className="flex-1 min-w-0">
             <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/post/:slug" element={<ArticlePage />} />
               <Route path="/admin" element={<AdminDashboard />} />
             </Routes>
             <Footer />
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;