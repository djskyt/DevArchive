import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth.store';

export const Navbar = ({ darkMode, onToggleDarkMode }) => {
  const { user, clearAuth } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAuth();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white"
        >
          dev-archive
        </Link>

        <nav className="flex items-center gap-4">
          {user && (
            <Link
              to="/bookmarks"
              className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              북마크
            </Link>
          )}

          <button
            onClick={onToggleDarkMode}
            className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          {user ? (
            <button
              onClick={handleLogout}
              className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              로그아웃
            </button>
          ) : (
            <Link
              to="/login"
              className="text-sm px-3 py-1.5 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:opacity-80 transition-opacity"
            >
              로그인
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};