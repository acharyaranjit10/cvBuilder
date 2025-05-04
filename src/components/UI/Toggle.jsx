// src/components/UI/Toggle.jsx (Example - you might need to adapt styling)
import React from 'react';

const Toggle = ({ checked, onChange, id }) => {
  return (
    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
      <input
        type="checkbox"
        name={id}
        id={id}
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
    </div>
  );
};

export default Toggle;