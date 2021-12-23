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
            <span>
              <input type="checkbox" />
            </span>

            <span>
              <p>Project Name</p>
            </span>

            <span>
              <p>Date</p>
            </span>

            <span>
              <p>Milestone Nr</p>
            </span>

            <span>
              <p>Description</p>
            </span>

            <span>
              <p>Status</p>
            </span>

            <span>
              <p>Action</p>
            </span>
          </div>
          <div>
            <MilestoneApprovalCard />
            <MilestoneApprovalCard />
            <MilestoneApprovalCard />
            <MilestoneApprovalCard />
            <MilestoneApprovalCard />
            <MilestoneApprovalCard />
            <MilestoneApprovalCard />
            <MilestoneApprovalCard />
            <MilestoneApprovalCard />
            <MilestoneApprovalCard />
            <MilestoneApprovalCard />
            <MilestoneApprovalCard />
          </div>
        </div>
      </DatagridBase>
    </BaseTemplate>
  );
};

export default MilestoneApproval;
