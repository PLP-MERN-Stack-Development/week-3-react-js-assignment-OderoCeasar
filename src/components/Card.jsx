import React from 'react';

const Card = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow p-6 ${className}`}>
      {title && <h3 className="text-xl font-bold mb-4">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;