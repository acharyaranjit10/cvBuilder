import React from 'react';
import { useTheme } from '../utils/Theme.jsx'; // Or '../utils/theme' if you haven't forced .js
import { toggleTheme } from '../utils/Theme.jsx'; // Or '../utils/theme'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeToggle = () => {
  const { theme } = useTheme();

  return (
    <button onClick={toggleTheme} className="focus:outline-none">
      {theme === 'dark' ? (
        <SunIcon className="h-6 w-6 text-yellow-400" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-500" />
      )}
    </button>
  );
};

export default ThemeToggle;