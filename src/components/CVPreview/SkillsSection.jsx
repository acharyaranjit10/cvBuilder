import React from 'react';

const SkillsSection = ({ skills }) => {
  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <div className="mb-6 print:mb-4">
      <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-800 mb-2 print:text-lg">Skills</h2>
      <ul className="list-none flex flex-wrap gap-2 print:gap-1 print:text-sm">
        {skills.map((skill, index) => (
          <li key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white px-2 py-2  rounded-lg  text-center">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsSection;