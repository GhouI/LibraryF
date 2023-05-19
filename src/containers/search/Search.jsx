import React, { useState } from 'react';
import './search.css';

const Search = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const getSearchBoxWidth = () => {
    if (inputValue.length >= 8) {
      return { width: `${inputValue.length * 10}px`};
    }
    return {};
  };

  return (
    <div className="verseify__search">
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handeInputChange}
        style={getSearchBoxWidth()}
        className="search-input"
      />
    </div>
  );
};

export default Search;
