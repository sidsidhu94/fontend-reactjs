import React, { useState } from 'react';

const TestInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [storedInputs, setStoredInputs] = useState([]);

  const storeInput = () => {
    // Check if the input is not empty
    if (inputValue.trim() !== '') {
      setStoredInputs([...storedInputs, inputValue]);
      setInputValue(''); // Clear the input field
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="inputField">Enter Value:</label>
        <input
          type="text"
          id="inputField"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={storeInput}>Store</button>
      </div>

      <div>
        <h2>Stored Inputs:</h2>
        <ul>
          {storedInputs.map((input, index) => (
            <li key={index}>{input}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TestInput;

