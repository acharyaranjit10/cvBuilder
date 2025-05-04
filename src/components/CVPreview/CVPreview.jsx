import React from 'react';
import HeaderSection from './HeaderSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';

const CVPreview = ({ personalInfo, education, experience, skills, projects }) => {
  return (
    <div className="bg-white p-8 shadow-md rounded-lg" style={{ minWidth: '125mm' }}>
      <HeaderSection personalInfo={personalInfo} />
      <EducationSection education={education} />
      <ExperienceSection experience={experience} />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
    </div>
  );
};

export default CVPreview;