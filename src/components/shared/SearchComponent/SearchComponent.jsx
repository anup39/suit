import './SearchComponent.scss';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React from 'react';
// eslint-disable-next-line
const SearchComponent = ({ title }) => {
  return (
    <div className="search-div">
      <input className="search-input" placeholder={title} />
      <SearchOutlinedIcon className="company-search-icon" />
      <p className="delete-botton">Delete</p>
    </div>
  );
};

export default SearchComponent;
