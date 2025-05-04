import React from 'react';

const ExperienceSection = ({ experience }) => {
  if (!experience || experience.length === 0) {
    return null;
  }

  return (
    <div className="mb-6 print:mb-4">
      <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-800 mb-2 print:text-lg">Experience</h2>
      <ul className="list-none space-y-2 print:space-y-1">
        {experience.map((item, index) => (
          <li key={index} className="print:text-sm">
            <h3 className="font-semibold text-gray-800 dark:text-gray-700 print:font-bold">{item.title} at {item.company}</h3>
            <p className="text-gray-600 dark:text-gray-700 print:text-xs">{item.location}</p>
            <p className="text-gray-500 dark:text-gray-700 print:text-xs">{item.startDate} - {item.endDate || 'Present'}</p>
            <ul className="list-disc ml-5 print:list-disc print:ml-3 print:text-xs">
              {item.description && item.description.split('\n').map((point, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-700">{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceSection;