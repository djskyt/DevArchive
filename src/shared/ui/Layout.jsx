import { useState, useEffect } from 'react';
import { Navbar } from './Navbar';

export const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('dev-archive:theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dev-archive:theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dev-archive:theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      <Navbar darkMode={darkMode} onToggleDarkMode={() => setDarkMode((prev) => !prev)} />
      <main className="max-w-5xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};