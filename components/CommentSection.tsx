import React, { useState, useEffect } from 'react';
import { Comment } from '../types';
import { getCommentsForPost, addComment } from '../services/commentService';
import { MessageSquare } from './Icons';

interface CommentSectionProps {
  postSlug: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ postSlug }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newAuthor, setNewAuthor] = useState('');
  const [newContent, setNewContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  useEffect(() => {
    setComments(getCommentsForPost(postSlug));
  }, [postSlug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newContent.trim()) return;

    setIsSubmitting(true);
    
    // Simulate network delay for better UX
    setTimeout(() => {
      addComment(postSlug, newAuthor, newContent);
      setNewAuthor('');
      setNewContent('');
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 600);
  };

  return (
    <div className="mt-20 pt-10 border-t border-gray-100">
      <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
        <MessageSquare className="w-5 h-5" />
        评论 ({comments.length})
      </h3>

      {/* List */}
      <div className="space-y-8 mb-12">
        {comments.length === 0 ? (
          <p className="text-gray-400 text-sm italic">暂无评论，来抢沙发吧。</p>
        ) : (
          comments.map(comment => (
            <div key={comment.id} className="flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex items-baseline justify-between">
                <span className="font-semibold text-sm text-gray-900">{comment.author}</span>
                <span className="text-xs text-gray-400">{comment.date}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">{comment.content}</p>
            </div>
          ))
        )}
      </div>

      {/* Form */}
      <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
        <h4 className="font-semibold text-sm mb-4">发表评论</h4>
        {submitStatus === 'success' ? (
          <div className="bg-green-50 text-green-700 border border-green-100 p-4 rounded-lg text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            评论提交成功！您的评论正在等待审核，审核通过后将显示。
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="author" className="sr-only">昵称</label>
              <input
                id="author"
                type="text"
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
                placeholder="昵称 (选填)"
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-black focus:outline-none placeholder-gray-400 transition-shadow"
              />
            </div>
            <div>
              <label htmlFor="content" className="sr-only">评论内容</label>
              <textarea
                id="content"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                placeholder="写下您的想法..."
                rows={4}
                required
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-black focus:outline-none placeholder-gray-400 transition-shadow resize-none"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? '提交中...' : '提交评论'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
