import React, { useState, useEffect } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import FormSection from './FormSection';

const SkillsForm = ({ onChange, initialData }) => {
  const [skillsList, setSkillsList] = useState(initialData);
  const [newSkill, setNewSkill] = useState('');

  useEffect(() => {
    onChange(skillsList);
  }, [skillsList, onChange]);

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setSkillsList([...skillsList, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (index) => {
    const newList = skillsList.filter((_, i) => i !== index);
    setSkillsList(newList);
  };

  return (
    <FormSection title="Skills">
      <div className="flex items-center mb-4">
        <Input
          label="Add Skill"
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          className="mr-2"
        />
        <Button onClick={handleAddSkill}>Add</Button>
      </div>
      {skillsList.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {skillsList.map((skill, index) => (
            <div key={index} className="bg-gray-200 dark:bg-gray-700 text-white dark:text-white py-1 px-2 rounded-full flex items-center">
              {skill}
              <button
                onClick={() => handleRemoveSkill(index)}
                className="ml-1 focus:outline-none text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </FormSection>
  );
};

export default SkillsForm;