import React, { useState, useRef } from 'react';
import PersonalInfoForm from '../components/Form/PersonalInfoForm';
import EducationForm from '../components/Form/EducationForm';
import ExperienceForm from '../components/Form/ExperienceForm';
import SkillsForm from '../components/Form/SkillsForm';
import ProjectsForm from '../components/Form/ProjectsForm';
import CVPreview from '../components/CVPreview/CVPreview';
import { useReactToPrint } from 'react-to-print';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Button from '../components/UI/Button';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from '../utils/Theme';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const CvBuilderPage = () => {
  const [personalInfo, setPersonalInfo] = useLocalStorage('personalInfo', {});
  const [education, setEducation] = useLocalStorage('education', []);
  const [experience, setExperience] = useLocalStorage('experience', []);
  const [skills, setSkills] = useLocalStorage('skills', []);
  const [projects, setProjects] = useLocalStorage('projects', []);
  const { theme } = useTheme();
 
  const cvPreviewRef = useRef(null);

  const handleSavePDF = async () => {
    if (!cvPreviewRef.current) return;
    
    try {
      const canvas = await html2canvas(cvPreviewRef.current, {
        scale: 2, // Higher quality
        logging: false,
        useCORS: true,
        allowTaint: true
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('my-cv.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };


  // Keep all your existing handler functions...
  const updatePersonalInfo = (data) => setPersonalInfo(data);
  const updateEducation = (data) => setEducation(data);
  const updateExperience = (data) => setExperience(data);
  const updateSkills = (data) => setSkills(data);
  const updateProjects = (data) => setProjects(data);

  return (
    <div className={`min-h-screen py-10 ${theme === 'dark' ? 'bg-gray-900 text-gray-800' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Section (Unchanged) */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-800">CV Builder</h2>
          </div>
          <PersonalInfoForm onChange={updatePersonalInfo} initialData={personalInfo} />
          <EducationForm onChange={updateEducation} initialData={education} />
          <ExperienceForm onChange={updateExperience} initialData={experience} />
          <SkillsForm onChange={updateSkills} initialData={skills} />
          <ProjectsForm onChange={updateProjects} initialData={projects} />
        </div>

        {/* Preview Section (Only added ref to wrapper div) */}
        <div className="bg-white shadow-md rounded-lg p-6 print:bg-white">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-800 print:hidden">Live Preview</h2>
          {/* FIX: Added ref here */}
              <div ref={cvPreviewRef}  >
            <CVPreview
              personalInfo={personalInfo}
              education={education}
              experience={experience}
              skills={skills}
              projects={projects}
            />
          </div>
          <div className="mt-4 print:hidden">
            <Button 
              onClick={handleSavePDF} 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Download as PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvBuilderPage;