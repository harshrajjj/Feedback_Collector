/**
 * Get the current theme from localStorage
 * @returns {string} - 'dark' or 'light'
 */
export const getInitialTheme = () => {
  // Check if theme is stored in localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }

  // Default to light theme if no preference is stored
  return 'light';
};

/**
 * Apply theme to document
 * @param {string} theme - 'dark' or 'light'
 */
export const applyTheme = (theme) => {
  const root = window.document.documentElement;

  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }

  // Save theme to localStorage
  localStorage.setItem('theme', theme);
};
