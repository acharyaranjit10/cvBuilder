import React from 'react';

const Textarea = ({ label, name, value, onChange, rows = 3 }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 dark:text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default Textarea;
