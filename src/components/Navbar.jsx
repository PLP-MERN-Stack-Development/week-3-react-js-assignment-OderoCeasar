import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Button from './Button';

const Navbar = () => {
  const { toggleTheme, isDark } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex space-x-4">
            <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
              Task Manager
            </Link>
            <Link to="/tasks" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Tasks
            </Link>
            <Link to="/data" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Data
            </Link>
          </div>
          <Button onClick={toggleTheme} size="sm">
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;