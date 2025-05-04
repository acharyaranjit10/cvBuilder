import React from 'react';

const FormSection = ({ title, children }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-700">{title}</h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
};

export default FormSection;