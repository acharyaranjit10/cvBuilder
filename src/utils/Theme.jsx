import { useState, useEffect, createContext, useContext } from 'react';

const ThemeContext = createContext();

// Declare toggleTheme and _setTheme at the top level
let _setTheme;

export const toggleTheme = () => {
  if (_setTheme) {
    _setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || 'dark'; // Default to 'light' if no stored theme
  });
  _setTheme = setTheme;

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme === 'dark' ? 'dark' : '';
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};