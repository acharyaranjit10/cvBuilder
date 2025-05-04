import React from 'react';

const Input = ({ label, type, name, value, onChange, className }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 dark:text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline ${className}`}
      />
    </div>
  );
};

export default Input;