import './MilestoneApproval.scss';

import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import DatagridBase from '../../components/shared/DatagridBase/DatagridBase';
import MilestoneApprovalCard from './components/MilestoneApprovalCards/MilestoneApprovalCard';

const MilestoneApproval = () => {
  return (
    <BaseTemplate title="Milestone Approval">
      <DatagridBase>
        <div className="milestone-search-bar">
          <div className="milestone-search-div">
            <SearchIcon className="milestone-search-icon" />
            <input
              className="milestone-search-input"
              placeholder="Search Project"
            />
          </div>

          <div className="milestone-search-div">
            <SearchIcon className="milestone-search-icon" />
            <input
              className="milestone-search-input"
              placeholder="Search Company"
            />
          </div>

          <div className="milestone-search-div">
            <SearchIcon className="milestone-search-icon" />
            <input
              className="milestone-search-input"
              placeholder="Milestone Name"
            />
          </div>
        </div>
        <div className="milestone-table">
          <div className="milestone-header">
            <span className="milestone-approval-checkInput">
              <input type="checkbox" />
            </span>

            <span className="milestone-approval-company">
              <p> Company </p>
            </span>

            <span className="milestone-approval-projectName">
              {' '}
              <p>Project Name</p>
            </span>

            <span className="milestone-approval-date">
              <p>Date</p>
            </span>

            <span className="milestone-approval-milestoneNr">
              <p>Milestone Nr</p>
            </span>

            <span className="milestone-approval-description">
              <p>Description</p>
            </span>

            <span className="milestone-approval-status">
              <p>Status</p>
            </span>

            <span className="milestone-approval-action">
              <p>Action </p>
            </span>
          </div>
        </div>
        <div>
          <MilestoneApprovalCard />
          <MilestoneApprovalCard />
          <MilestoneApprovalCard />
          <MilestoneApprovalCard />
        </div>
      </DatagridBase>
    </BaseTemplate>
  );
};

export default MilestoneApproval;
