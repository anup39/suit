import './WorkListManagement.scss';

import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { FaRegShareSquare } from 'react-icons/fa';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import DatagridBase from '../../components/shared/DatagridBase/DatagridBase';

const WorkListManagement = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <BaseTemplate title="Worklist Management">
      <span className="add-task-button">+ Add Task</span>
      <DatagridBase>
        <div className="worklist-search-div">
          <div className="worklist-input-container">
            <SearchIcon className="search-icon" />
            <input placeholder="Project Name" />
          </div>

          <div className="worklist-input-container">
            <SearchIcon className="search-icon" />
            <input placeholder="Company Name" />
          </div>
          <span className="worklist-export-button" onClick={handleClick}>
            <FaRegShareSquare className="worklist-export-icon" />
            Export Worklist
          </span>
          <Menu
            anchorEl={anchorEl}
            id="basic-menu"
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            onClose={handleClose}
            open={open}
          >
            <MenuItem onClick={handleClose}>Export CSV</MenuItem>
            <MenuItem onClick={handleClose}>Export XML</MenuItem>
          </Menu>
        </div>
        <div>
          <div className="worklist-table-header">
            <span>
              <input type="checkbox" />
            </span>
            <span>Project Name</span>
            <span>Task Name</span>
            <span>Task Description</span>
            <span>Ismilestone</span>
            <span>Type</span>
            <span>Actions</span>
          </div>
        </div>
      </DatagridBase>
    </BaseTemplate>
  );
};

export default WorkListManagement;
