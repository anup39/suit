import './FieldUpdates.scss';

import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { GrMap } from 'react-icons/gr';

import FieldUpdateCard from './components/FieldUpdateCards/FieldUpdateCard';

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

      <div className="field-update-header">
        <span className="field-updates-header-checkInput">
          <input type="checkbox" />
        </span>
        <span className="field-updates-header-taskItem">Task Item</span>
        <span className="field-updates-header-fieldLogs">Field Logs</span>
        <span className="field-updates-header-activityReport">
          Activity report
        </span>
        <span className="field-updates-header-changeRequest">
          Change request
        </span>
        <span className="field-updates-header-milestoneApproval">
          Milestone approval
        </span>
        <span className="field-updates-header-status">Status</span>
        <span className="field-updates-header-controlActivity">
          Control Activity
        </span>
        <span className="field-updates-header-actions">Actions</span>
      </div>
      <div>
        <FieldUpdateCard />
        <FieldUpdateCard />
        <FieldUpdateCard />
        <FieldUpdateCard />
      </div>
    </div>
  );
};

export default FieldUpdates;
