import './WorkList.scss';
import './components/WorkListCards/WorkListCards.scss';

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
          <span className="work-list-card-check-input">
            <input type="checkbox" />
          </span>

          <span className="work-list-card-task-id">
            <p> Task Id</p>
          </span>

          <span className="work-list-card-task-name">
            <p> Task Name </p>
          </span>

          <span className="work-list-card-task-description">
            <p> Task Description </p>
          </span>

          <span className="work-list-card-task-milestone">
            <p> Ismilestone </p>
          </span>

          <span className="work-list-card-task-type">
            <p> Type </p>
          </span>

          <span className="work-list-card-task-status">
            <p> Status </p>
          </span>

          <span className="work-list-card-task-actions">
            <p> Actions </p>
          </span>
        </div>
        <div>
          <WorkListCards />
          <WorkListCards />
          <WorkListCards />
          <WorkListCards />
          <WorkListCards />
        </div>
      </div>
    </div>
  );
};

export default WorkList;
