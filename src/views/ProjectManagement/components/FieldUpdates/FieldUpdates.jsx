import './FieldUpdates.scss';

import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { GrMap } from 'react-icons/gr';

import FieldUpdateCard from '../FieldUpdateCards/FieldUpdateCard';

const FieldUpdates = () => {
  return (
    <div className="field-update-base-div">
      <div className="field-update-search-div">
        <span>
          <SearchIcon className="field-search-icon" />

          <input className="field-input" placeholder="Search Task" />
        </span>
        <span>
          <SearchIcon className="field-search-icon" />

          <input className="field-input" placeholder="Search Company" />
        </span>
        <span className="map-view-button">
          <GrMap className="map-icon" /> Map View
        </span>
      </div>

      <div>
        <FieldUpdateCard />
      </div>
    </div>
  );
};

export default FieldUpdates;
