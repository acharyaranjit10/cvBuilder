// src/components/CVPreview/EducationSection.jsx
import React from 'react';

const EducationSection = ({ education }) => {
  if (!education || education.length === 0) {
    return null;
  }

  return (
    <div className="mb-6 print:mb-4">
      <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-800 mb-2 print:text-lg">Education</h2>
      <ul className="list-none space-y-2 print:space-y-1">
        {education.map((item, index) => (
          <li key={index} className="print:text-sm">
            <h3 className="font-semibold text-gray-800 dark:text-gray-700 print:font-bold">{item.degree} in {item.major}</h3>
            <p className="text-gray-600 dark:text-gray-700 print:text-xs">{item.institution}, {item.location}</p>
            <p className="text-gray-500 dark:text-gray-700 print:text-xs">{item.startDate} - {item.endDate || 'Present'}</p>
            {item.description && <p className="text-gray-600 dark:text-gray-700 mt-1 print:text-xs">{item.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationSection;