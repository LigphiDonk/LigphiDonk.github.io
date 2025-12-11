import React, { useEffect, useState } from 'react';

interface TOCProps {
  content: string;
}

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const TOC: React.FC<TOCProps> = ({ content }) => {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Regex to extract headings (H2 and H3 only for simplicity)
    const regex = /^(#{2,3})\s+(.+)$/gm;
    const items: TOCItem[] = [];
    let match;
    
    // Simple id generation map to handle duplicates
    const idMap: Record<string, number> = {};

    while ((match = regex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      let id = text.toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g, '-');
      
      if (idMap[id]) {
          idMap[id]++;
          id += `-${idMap[id]}`;
      } else {
          idMap[id] = 1;
      }

      items.push({ id, text, level });
    }
    setHeadings(items);
  }, [content]);

  // Handle intersection observer to highlight active heading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -66%' }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for header
        behavior: 'smooth'
      });
      setActiveId(id);
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="hidden xl:block w-64 shrink-0 pl-8 border-l border-gray-100 dark:border-gray-800 sticky top-24 self-start h-[calc(100vh-6rem)] overflow-y-auto">
      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">目录</h4>
      <nav className="flex flex-col space-y-3">
        {headings.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className={`text-sm transition-colors border-l-2 pl-3 -ml-[13px] line-clamp-2 py-0.5 ${
              activeId === item.id
                ? 'border-black dark:border-white text-black dark:text-white font-medium'
                : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-300'
            } ${item.level === 3 ? 'ml-4' : ''}`}
            style={{ marginLeft: item.level === 3 ? '1rem' : undefined }}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default TOC;