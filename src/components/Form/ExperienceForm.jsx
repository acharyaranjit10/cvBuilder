import React, { useState, useEffect } from 'react';
import Input from '../UI/Input';
import Textarea from '../UI/Textarea';
import Button from '../UI/Button';
import FormSection from './FormSection';

const ExperienceForm = ({ onChange, initialData }) => {
  const [experienceList, setExperienceList] = useState(initialData);

  useEffect(() => {
    onChange(experienceList);
  }, [experienceList, onChange]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newList = [...experienceList];
    newList[index][name] = value;
    setExperienceList(newList);
  };

  const handleAddItem = () => {
    setExperienceList([...experienceList, { title: '', company: '', location: '', startDate: '', endDate: '', description: '' }]);
  };

  const handleRemoveItem = (index) => {
    const newList = experienceList.filter((_, i) => i !== index);
    setExperienceList(newList);
  };

  return (
    <FormSection title="Experience">
      {experienceList.map((experience, index) => (
        <div key={index} className="mb-4 p-4 border rounded dark:border-gray-700">
          <h4 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-700">Experience Entry #{index + 1}</h4>
          <Input
            label="Title"
            type="text"
            name="title"
            value={experience.title}
            onChange={(e) => handleInputChange(index, e)}
          />
          <Input
            label="Company"
            type="text"
            name="company"
            value={experience.company}
            onChange={(e) => handleInputChange(index, e)}
          />
          <Input
            label="Location"
            type="text"
            name="location"
            value={experience.location}
            onChange={(e) => handleInputChange(index, e)}
          />
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Input
              label="Start Date"
              type="text"
              name="startDate"
              value={experience.startDate}
              onChange={(e) => handleInputChange(index, e)}
            />
            <Input
              label="End Date (or 'Present')"
              type="text"
              name="endDate"
              value={experience.endDate}
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>
          <Textarea
            label="Description"
            name="description"
            value={experience.description}
            onChange={(e) => handleInputChange(index, e)}
            rows={3}
          />
          {experienceList.length > 1 && (
            <Button onClick={() => handleRemoveItem(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm">
              Remove
            </Button>
          )}
        </div>
      ))}
      <Button onClick={handleAddItem} className="mt-2">
        Add Experience
      </Button>
    </FormSection>
  );
};

export default ExperienceForm;