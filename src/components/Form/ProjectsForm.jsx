import React, { useState, useEffect } from 'react';
import Input from '../UI/Input';
import Textarea from '../UI/Textarea';
import Button from '../UI/Button';
import FormSection from './FormSection';

const ProjectsForm = ({ onChange, initialData }) => {
  const [projectsList, setProjectsList] = useState(initialData);

  useEffect(() => {
    onChange(projectsList);
  }, [projectsList, onChange]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newList = [...projectsList];
    if (name === 'technologies') {
      newList[index][name] = value.split(',').map(tech => tech.trim()); // Split into array and trim whitespace
    } else {
      newList[index][name] = value;
    }
    setProjectsList(newList);
  };

  const handleAddItem = () => {
    setProjectsList([...projectsList, { name: '', link: '', description: '', technologies: '' }]);
  };

  const handleRemoveItem = (index) => {
    const newList = projectsList.filter((_, i) => i !== index);
    setProjectsList(newList);
  };

  return (
    <FormSection title="Projects">
      {projectsList.map((project, index) => (
        <div key={index} className="mb-4 p-4 border rounded dark:border-gray-700">
          <h4 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-700">Project Entry #{index + 1}</h4>
          <Input
            label="Project Name"
            type="text"
            name="name"
            value={project.name}
            onChange={(e) => handleInputChange(index, e)}
          />
          <Input
            label="Link (Optional)"
            type="url"
            name="link"
            value={project.link}
            onChange={(e) => handleInputChange(index, e)}
          />
          <Textarea
            label="Description"
            name="description"
            value={project.description}
            onChange={(e) => handleInputChange(index, e)}
            rows={2}
          />
          <Input
            label="Technologies Used (Comma Separated)"
            type="text"
            name="technologies"
            value={project.technologies}
            onChange={(e) => handleInputChange(index, e)}
          />
          {projectsList.length > 1 && (
            <Button onClick={() => handleRemoveItem(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm">
              Remove
            </Button>
          )}
        </div>
      ))}
      <Button onClick={handleAddItem} className="mt-2">
        Add Project
      </Button>
    </FormSection>
  );
};

export default ProjectsForm;