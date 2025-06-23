import React from 'react';

const Button = ({ variant = 'primary', size = 'md', className = '', ...props }) => {
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  const sizeStyles = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`rounded-lg font-medium transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    />
  );
};

export default Button;