import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Task Manager. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline">Privacy</a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;