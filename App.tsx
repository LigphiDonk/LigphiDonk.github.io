import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route, Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { BLOG_POSTS } from './constants';
import { BlogPost } from './types';
import Assistant from './components/Assistant';
import CommentSection from './components/CommentSection';
import AdminDashboard from './components/AdminDashboard';
import { Sidebar } from './components/Sidebar';
import TOC from './components/TOC';
import AboutPage from './components/AboutPage';
import AdminGate from './components/AdminGate';
import { Menu, X, Sun, Moon, ArrowRight, ArrowLeft, Calendar, Clock, Tag } from './components/Icons';

// --- Theme Context ---
type Theme = 'light' | 'dark';
const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({ theme: 'light', toggleTheme: () => {} });

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// --- Components ---

const MobileHeader: React.FC<{ toggleSidebar: () => void }> = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="lg:hidden sticky top-0 z-40 w-full bg-white/80 dark:bg-primary-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 h-16 flex items-center justify-between px-6">
       <button onClick={toggleSidebar} className="p-2 -ml-2 text-gray-600 dark:text-gray-300">
         <Menu className="w-6 h-6" />
       </button>
       <Link to="/" className="font-bold text-lg text-black dark:text-white">TechnoLogos</Link>
       <button onClick={toggleTheme} className="p-2 -mr-2 text-gray-600 dark:text-gray-300">
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
       </button>
    </header>
  );
};

const DesktopThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button 
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-2.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-all hover:shadow-md hidden lg:flex"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
}

const PostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <Link to={`/post/${post.slug}`} className="group block mb-6">
    <article className="bg-white dark:bg-secondary-dark/30 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 sm:p-8 hover:shadow-lg dark:hover:shadow-black/20 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {post.title}
        </h2>
        <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
           <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{post.date}</div>
           <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-2">
           <div className="flex gap-2">
             {post.tags.map(tag => (
                <span key={tag} className="text-xs bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-1 rounded-md border border-gray-100 dark:border-gray-700">{tag}</span>
             ))}
           </div>
           <span className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
             阅读 <ArrowRight className="w-4 h-4" />
           </span>
        </div>
      </div>
    </article>
  </Link>
);

// --- Pages ---

const HomePage: React.FC<{ searchTerm: string; selectedTag: string | null }> = ({ searchTerm, selectedTag }) => {
  // Filter logic
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="w-full py-8 lg:py-12 animate-in fade-in duration-500">
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">最新文章</h2>
        {filteredPosts.length > 0 ? (
          <div className="flex flex-col">
            {filteredPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-gray-500 bg-gray-50 dark:bg-secondary-dark/30 rounded-2xl border border-gray-100 dark:border-gray-800">
            <p>没有找到相关文章。</p>
            <button onClick={() => window.location.reload()} className="text-sm text-blue-500 mt-2 hover:underline">重置筛选</button>
          </div>
        )}
      </section>
    </div>
  );
};

const ArticlePage: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const postIndex = BLOG_POSTS.findIndex(p => p.slug === slug);
  const post = BLOG_POSTS[postIndex];
  
  const prevPost = postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null;
  const nextPost = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <div className="p-10 text-center">文章未找到</div>;

  // Enhance Markdown headers for TOC linkage
  const components = {
    h2: ({node, ...props}: any) => {
       const id = props.children?.toString().toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g, '-') || '';
       return <h2 id={id} className="scroll-mt-24 group relative" {...props}>
           <a href={`#${id}`} className="absolute -left-6 opacity-0 group-hover:opacity-100 text-gray-300 no-underline">#</a>
           {props.children}
       </h2>;
    },
    h3: ({node, ...props}: any) => {
       const id = props.children?.toString().toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g, '-') || '';
       return <h3 id={id} className="scroll-mt-24" {...props}>{props.children}</h3>;
    }
  };

  return (
    <div className="flex gap-12 w-full animate-in fade-in duration-500 lg:py-12">
      {/* Main Content */}
      <div className="flex-1 min-w-0 max-w-3xl">
         <button onClick={() => navigate('/')} className="mb-8 text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white flex items-center gap-2 group transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 返回列表
         </button>

         <header className="mb-10 pb-10 border-b border-gray-100 dark:border-gray-800">
            <div className="flex gap-2 mb-6">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
               <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</div>
               <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</div>
            </div>
         </header>

         <article className="prose prose-lg prose-slate dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-xl text-gray-800 dark:text-gray-200">
            <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
         </article>

         {/* Prev/Next Nav */}
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
            {prevPost ? (
              <Link to={`/post/${prevPost.slug}`} className="group p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 bg-gray-50 dark:bg-secondary-dark/20 text-right sm:text-left transition-all">
                 <div className="text-xs text-gray-400 mb-1">上一篇</div>
                 <div className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-1">{prevPost.title}</div>
              </Link>
            ) : <div />}
            {nextPost ? (
              <Link to={`/post/${nextPost.slug}`} className="group p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 bg-gray-50 dark:bg-secondary-dark/20 text-right transition-all">
                 <div className="text-xs text-gray-400 mb-1">下一篇</div>
                 <div className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-1">{nextPost.title}</div>
              </Link>
            ) : <div />}
         </div>

         <CommentSection postSlug={post.slug} />
         
         <Assistant articleContent={post.title + "\n" + post.content} />
      </div>

      {/* Right Sidebar - TOC */}
      <TOC content={post.content} />
    </div>
  );
};

// --- Main Layout ---

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const location = useLocation();

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white dark:bg-primary-dark transition-colors duration-300 flex flex-col">
      <DesktopThemeToggle />
      <MobileHeader toggleSidebar={() => setSidebarOpen(true)} />

      <div className="flex-1 max-w-[1400px] mx-auto w-full flex items-start">
        {/* Left Sidebar - Desktop Fixed / Mobile Drawer */}
        <div className={`
          fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity duration-300
          ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `} onClick={() => setSidebarOpen(false)} />
        
        <div className={`
          fixed lg:sticky top-0 left-0 bottom-0 z-50 lg:z-auto w-[280px] bg-white dark:bg-primary-dark lg:bg-transparent border-r lg:border-r-0 border-gray-100 dark:border-gray-800 p-6 lg:py-12 lg:h-[100vh] lg:overflow-y-auto overflow-y-auto transition-transform duration-300 ease-in-out shrink-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
           <div className="lg:hidden flex justify-end mb-4">
             <button onClick={() => setSidebarOpen(false)}><X className="w-6 h-6 text-gray-500" /></button>
           </div>
           <Sidebar 
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
           />
        </div>

        {/* Main Scrollable Area */}
        <main className="flex-1 min-w-0 px-6 lg:px-12 pb-12">
         <Routes>
            <Route path="/" element={<HomePage searchTerm={searchTerm} selectedTag={selectedTag} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/:slug" element={<ArticlePage />} />
            <Route
              path="/admin"
              element={
                <AdminGate>
                  <AdminDashboard />
                </AdminGate>
              }
            />
         </Routes>
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  );
};

export default App;
