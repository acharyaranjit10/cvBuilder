import React from 'react';

const HeaderSection = ({ personalInfo }) => {
  const { name, email, phone, linkedin, location } = personalInfo;

  return (
    <div className="mb-6 print:mb-4">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-700 print:text-2xl">{name}</h1>
      <p className="text-gray-700 dark:text-gray-700 print:text-sm">
        {email && <span className="mr-4">{email}</span>}
        {phone && <span className="mr-4">{phone}</span>}
        {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-4">{linkedin.split('linkedin.com/')[1] || 'LinkedIn'}</a>}
        {location && <span>{location}</span>}
      </p>
    </div>
  );
};

export default HeaderSection;