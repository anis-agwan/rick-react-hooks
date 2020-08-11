import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange, searchField }) => (
    <input className='search'
          type='search' 
          placeholder={placeholder}
          onChange={handleChange}
          value={searchField}
        />
);