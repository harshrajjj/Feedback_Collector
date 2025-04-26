import React from 'react';

/**
 * Theme toggle component (JSDoc)
 * @param {Object} props - Component props
 * @param {string} props.theme - Current theme ('light' or 'dark')
 * @param {Function} props.toggleTheme - Function to toggle theme
 * @returns {JSX.Element} - Theme toggle button
 */
const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition duration-200 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="flex items-center">
        <div className={`p-1 rounded-md mr-2 ${theme === 'light' ? 'bg-indigo-100 dark:bg-indigo-900/30' : 'bg-yellow-100 dark:bg-yellow-900/30'}`}>
          {theme === 'light' ? (
            // Moon icon for dark mode
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            // Sun icon for light mode
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </div>
        <span className="text-sm">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
      </div>
    </button>
  );
};

export default ThemeToggle;
