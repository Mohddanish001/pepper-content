import React, { useState } from 'react';

function CheckboxGroup() {
  const options = [
    'Social Media',
    'Advertisement',
    'GIFs',
    'A+ or E-commerce Graphics',
    'Emailers',
    'Infographics',
    'Presentations',
    'Whitepapers',
    'Branding and Logo'
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter((item) => item !== option)
        : [...prevSelectedOptions, option]
    );
  };

  const handleSubmit = () => {
    // Send selectedOptions to the backend
    console.log('Selected options:', selectedOptions);
    
    // Example fetch call to backend (replace URL with your actual backend endpoint)
    fetch('https://your-backend-endpoint.com/api/selected-options', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ selectedOptions })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='checkbox-1'>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default CheckboxGroup;
