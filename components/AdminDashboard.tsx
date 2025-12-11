import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Comment, BlogPost } from '../types';
import { getAllComments, approveComment, deleteComment } from '../services/commentService';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, Sparkles } from './Icons';

const AdminDashboard: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [filter, setFilter] = useState<'all' | 'pending'>('all');

  const refreshComments = () => {
    setComments(getAllComments());
  };

  useEffect(() => {
    refreshComments();
  }, []);

  const handleApprove = (id: string) => {
    approveComment(id);
    refreshComments();
  };

  const handleDelete = (id: string) => {
    if (confirm('确定要删除这条评论吗？')) {
      deleteComment(id);
      refreshComments();
    }
  };

  const getPostTitle = (slug: string) => {
    const post = BLOG_POSTS.find(p => p.slug === slug);
    return post ? post.title : slug;
  };

  const filteredComments = filter === 'all' 
    ? comments 
    : comments.filter(c => c.status === 'pending');

  return (
    <div className="w-full text-gray-900 font-sans">
      <div className="py-8">
        <div className="flex items-center justify-between mb-8">
           <h1 className="text-2xl font-bold tracking-tight">评论审核后台</h1>
           <div className="flex gap-2 bg-white p-1 rounded-lg border border-gray-200">
             <button
               onClick={() => setFilter('all')}
               className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${filter === 'all' ? 'bg-black text-white' : 'text-gray-500 hover:text-black'}`}
             >
               全部 ({comments.length})
             </button>
             <button
                onClick={() => setFilter('pending')}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${filter === 'pending' ? 'bg-black text-white' : 'text-gray-500 hover:text-black'}`}
             >
               待审核 ({comments.filter(c => c.status === 'pending').length})
             </button>
           </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {filteredComments.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              <Sparkles className="w-8 h-8 mx-auto mb-3 text-gray-300" />
              <p>暂无相关评论</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-gray-500">状态</th>
                    <th className="px-6 py-4 font-semibold text-gray-500">作者</th>
                    <th className="px-6 py-4 font-semibold text-gray-500 w-1/3">内容</th>
                    <th className="px-6 py-4 font-semibold text-gray-500">文章</th>
                    <th className="px-6 py-4 font-semibold text-gray-500">时间</th>
                    <th className="px-6 py-4 font-semibold text-gray-500 text-right">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredComments.map(comment => (
                    <tr key={comment.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        {comment.status === 'pending' ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            待审核
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            已发布
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 font-medium">{comment.author}</td>
                      <td className="px-6 py-4 text-gray-600 max-w-xs truncate" title={comment.content}>
                        {comment.content}
                      </td>
                      <td className="px-6 py-4 text-gray-500 max-w-xs truncate">
                        {getPostTitle(comment.postSlug)}
                      </td>
                      <td className="px-6 py-4 text-gray-400 whitespace-nowrap text-xs">
                        {comment.date}
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        {comment.status === 'pending' && (
                          <button
                            onClick={() => handleApprove(comment.id)}
                            className="text-green-600 hover:text-green-800 font-medium text-xs border border-green-200 hover:border-green-300 bg-green-50 px-3 py-1.5 rounded-full transition-all"
                          >
                            通过
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(comment.id)}
                          className="text-red-600 hover:text-red-800 font-medium text-xs border border-red-200 hover:border-red-300 bg-red-50 px-3 py-1.5 rounded-full transition-all"
                        >
                          删除
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;