import { Comment } from '../types';

const STORAGE_KEY = 'technologos_comments';

const getStore = (): Comment[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
};

const saveStore = (comments: Comment[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
};

export const getCommentsForPost = (slug: string): Comment[] => {
  // Only return approved comments for public view
  return getStore()
    .filter(c => c.postSlug === slug && c.status === 'approved')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getAllComments = (): Comment[] => {
  // Return all comments for admin view
  return getStore().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const addComment = (slug: string, author: string, content: string): Comment => {
  const comments = getStore();
  const newComment: Comment = {
    id: Date.now().toString(),
    postSlug: slug,
    author: author.trim() || '匿名用户',
    content: content.trim(),
    date: new Date().toLocaleString('zh-CN', { hour12: false }),
    status: 'pending' // Default status
  };
  comments.push(newComment);
  saveStore(comments);
  return newComment;
};

export const approveComment = (id: string) => {
  const comments = getStore();
  const idx = comments.findIndex(c => c.id === id);
  if (idx !== -1) {
    comments[idx].status = 'approved';
    saveStore(comments);
  }
};

export const deleteComment = (id: string) => {
  const comments = getStore();
  const newComments = comments.filter(c => c.id !== id);
  saveStore(newComments);
};

export const getPendingCount = (): number => {
  return getStore().filter(c => c.status === 'pending').length;
};
