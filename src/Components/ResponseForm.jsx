import React, { useState } from 'react';
import '../Css/style.css';

const ResponseForm = () => {
  const [response, setResponse] = useState('');

  const handleChange = (event) => {
    setResponse(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission here
    console.log('Response submitted:', response);
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-box"
          placeholder="Enter your response here"
          value={response}
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ResponseForm;
