import { useState, useEffect } from 'react';
import { getInitialTheme, applyTheme } from '../utils/themeUtils';

/**
 * Custom hook for managing theme
 * @returns {Array} - [theme, toggleTheme]
 */
export const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme());
  
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  return [theme, toggleTheme];
};
