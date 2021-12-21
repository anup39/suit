import './WorkList.scss';

import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

import WorkListCards from './components/WorkListCards/WorkListCards';

const WorkList = () => {
  return (
    <div className="work-list-base">
      <div className="work-list-header">
        <input
          className="work-list-search-input"
          placeholder="Search Worklist"
        />
        <SearchIcon className="work-list-search-icon" />
      </div>
      <div>
        <div className="work-list-table-header">
          <span>
            <input type="checkbox" />
          </span>

          <span>
            <p> Task id </p>
          </span>

          <span>
            <p> Task Name </p>
          </span>

          <span>
            <p> Task Description </p>
          </span>

          <span>
            <p> Ismilestone </p>
          </span>

          <span>
            <p> Type </p>
          </span>

          <span>
            <p> Status </p>
          </span>

          <span>
            <p> Actions </p>
          </span>
        </div>
        <div>
          <WorkListCards />
        </div>
      </div>
    </div>
  );
};

export default WorkList;
