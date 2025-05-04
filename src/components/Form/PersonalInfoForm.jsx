import React, { useState, useEffect } from 'react';
import Input from '../UI/Input';
import FormSection from './FormSection';

const PersonalInfoForm = ({ onChange, initialData }) => {
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    onChange(formData);
  }, [formData, onChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <FormSection title="Personal Information">
      <Input
        label="Full Name"
        type="text"
        name="name"
        value={formData.name || ''}
        onChange={handleChange}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email || ''}
        onChange={handleChange}
      />
      <Input
        label="Phone"
        type="tel"
        name="phone"
        value={formData.phone || ''}
        onChange={handleChange}
      />
      <Input
        label="LinkedIn Profile URL"
        type="url"
        name="linkedin"
        value={formData.linkedin || ''}
        onChange={handleChange}
      />
      <Input
        label="Location"
        type="text"
        name="location"
        value={formData.location || ''}
        onChange={handleChange}
      />
      {/* Add more personal info fields as needed */}
    </FormSection>
  );
};

export default PersonalInfoForm;