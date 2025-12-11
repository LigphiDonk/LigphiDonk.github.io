import React, { useEffect, useMemo, useState } from 'react';

interface AdminGateProps {
  children: React.ReactNode;
}

const STORAGE_KEY = 'adminAuthToken';

/**
 * A simple front-end gate for the admin page.
 * NOTE: This only hides the UI and should not be considered secure for sensitive data.
 */
const AdminGate: React.FC<AdminGateProps> = ({ children }) => {
  const expectedPassword = import.meta.env.VITE_ADMIN_PASSWORD || '';

  const expectedToken = useMemo(() => {
    return expectedPassword ? btoa(expectedPassword) : '';
  }, [expectedPassword]);

  const [token, setToken] = useState<string>(() => localStorage.getItem(STORAGE_KEY) || '');
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const isAuthed = expectedToken && token === expectedToken;

  useEffect(() => {
    // If password changed in env, force re-auth
    if (token && expectedToken && token !== expectedToken) {
      localStorage.removeItem(STORAGE_KEY);
      setToken('');
    }
  }, [expectedToken, token]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!expectedToken) {
      setError('缺少环境变量 VITE_ADMIN_PASSWORD，后台入口已被锁定。');
      return;
    }

    if (btoa(input) === expectedToken) {
      localStorage.setItem(STORAGE_KEY, expectedToken);
      setToken(expectedToken);
      setInput('');
    } else {
      setError('密码错误，请重试。');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setToken('');
    setInput('');
  };

  if (!isAuthed) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm p-8">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">管理员登录</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            访问评论管理后台前请输入访问口令。
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                管理口令
              </label>
              <input
                type="password"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                placeholder="请输入 VITE_ADMIN_PASSWORD"
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium hover:opacity-90 transition"
            >
              进入后台
            </button>
          </form>
          {!expectedToken && (
            <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-4">
              提示：当前未设置 VITE_ADMIN_PASSWORD 环境变量，后台处于锁定状态。请在构建前设置该变量。
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute top-4 right-4">
        <button
          onClick={handleLogout}
          className="text-xs text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1 bg-white dark:bg-gray-900 transition"
        >
          退出后台
        </button>
      </div>
      {children}
    </div>
  );
};

export default AdminGate;
