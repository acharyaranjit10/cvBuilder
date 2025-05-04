import React from 'react';

const ProjectsSection = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <div className="mb-6 print:mb-4">
      <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-700 mb-2 print:text-lg">Projects</h2>
      <ul className="list-none space-y-2 print:space-y-1">
        {projects.map((project, index) => (
          <li key={index} className="print:text-sm">
            <h3 className="font-semibold text-gray-800 dark:text-gray-900 print:font-bold">{project.name}</h3>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline print:text-xs">
                {project.link}
              </a>
            )}
            <p className="text-gray-600 dark:text-gray-700 print:text-xs">{project.description}</p>
            {project.technologies && project.technologies.length > 0 && (
               <p className="text-gray-500 dark:text-gray-700 print:text-xs">
               Technologies: <span className="font-semibold">
                 {Array.isArray(project.technologies)
                   ? project.technologies.join(', ')
                   : project.technologies}
               </span>
             </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;