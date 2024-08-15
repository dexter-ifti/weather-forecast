import './InputBox.css';
import React, { useState } from 'react';

function InputBox({ onClick }) {
  const [location, setLocation] = useState('');

  return (
    <div className="input-box">
      <input
        type="text"
        className="input-field"
        value={location}
        placeholder="Enter a city"
        onChange={(e) => setLocation(e.target.value)}
      />
      <button className="search-button" onClick={() => onClick(location)}>
        Search
      </button>
    </div>
  );
}

export default InputBox;
