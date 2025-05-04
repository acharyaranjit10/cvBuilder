import React, { useState, useEffect } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import FormSection from './FormSection';
import Textarea from '../UI/Textarea';

const EducationForm = ({ onChange, initialData }) => {
  const [educationList, setEducationList] = useState(initialData);

  useEffect(() => {
    onChange(educationList);
  }, [educationList, onChange]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newList = [...educationList];
    newList[index][name] = value;
    setEducationList(newList);
  };

  const handleAddItem = () => {
    setEducationList([...educationList, { degree: '', major: '', institution: '', location: '', startDate: '', endDate: '', description: '' }]);
  };

  const handleRemoveItem = (index) => {
    const newList = educationList.filter((_, i) => i !== index);
    setEducationList(newList);
  };

  return (
    <FormSection title="Education" >
      {educationList.map((education, index) => (
        <div key={index} className="mb-4 p-4 border rounded dark:border-gray-700">
          <h4 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-700">Education Entry #{index + 1}</h4>
          <Input
            label="Degree"
            type="text"
            name="degree"
            value={education.degree}
            onChange={(e) => handleInputChange(index, e)}
          />
          <Input
            label="Major"
            type="text"
            name="major"
            value={education.major}
            onChange={(e) => handleInputChange(index, e)}
          />
          <Input
            label="Institution"
            type="text"
            name="institution"
            value={education.institution}
            onChange={(e) => handleInputChange(index, e)}
          />
          <Input
            label="Location"
            type="text"
            name="location"
            value={education.location}
            onChange={(e) => handleInputChange(index, e)}
          />
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Input
              label="Start Date"
              type="text"
              name="startDate"
              value={education.startDate}
              onChange={(e) => handleInputChange(index, e)}
            />
            <Input
              label="End Date (or 'Present')"
              type="text"
              name="endDate"
              value={education.endDate}
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>
          <Textarea
            label="Description"
            name="description"
            value={education.description}
            onChange={(e) => handleInputChange(index, e)}
            rows={2}
          />
          {educationList.length > 1 && (
            <Button onClick={() => handleRemoveItem(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm">
              Remove
            </Button>
          )}
        </div>
      ))}
      <Button onClick={handleAddItem} className="mt-2">
        Add Education
      </Button>
    </FormSection>
  );
};

export default EducationForm;