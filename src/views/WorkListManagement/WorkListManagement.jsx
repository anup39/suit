import './WorkListManagement.scss';

import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { FaRegShareSquare } from 'react-icons/fa';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import DatagridBase from '../../components/shared/DatagridBase/DatagridBase';
import WorklistForm from './components/WorklistForm/WorklistForm';

const WorkListManagement = () => {
  const [menuOpen, setMenuOpen] = React.useState(null);

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const open = Boolean(menuOpen);
  const handelMenuOpen = (event) => {
    setMenuOpen(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuOpen(null);
  };

  const handelCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handelOpenDrawer = () => {
    setIsDrawerOpen(true);
  };
  return (
    <>
      <Drawer
        anchor="right"
        onClose={() => handelCloseDrawer()}
        open={isDrawerOpen}
      >
        <WorklistForm handelClose={handelCloseDrawer} />
      </Drawer>
      <BaseTemplate title="Worklist Management">
        <span className="add-task-button" onClick={handelOpenDrawer}>
          + Add Task
        </span>
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
            <span className="worklist-export-button" onClick={handelMenuOpen}>
              <FaRegShareSquare className="worklist-export-icon" />
              Export Worklist
            </span>
            <Menu
              anchorEl={menuOpen}
              id="basic-menu"
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              onClose={handleMenuClose}
              open={open}
            >
              <MenuItem onClick={handleMenuClose}>Export CSV</MenuItem>
              <MenuItem onClick={handleMenuClose}>Export XML</MenuItem>
            </Menu>
          </div>
          <div>
            <div className="worklist-table-header">
              <span className="worklist-management-check-input">
                <input type="checkbox" />
              </span>
              <span className="worklist-management-project-name">
                Project Name
              </span>
              <span className="worklist-management-task-name">Task Name</span>
              <span className="worklist-management-task-description">
                Task Description
              </span>
              <span className="worklist-management-isMilestone">
                Ismilestone
              </span>
              <span className="worklist-management-type">Type</span>
              <span className="worklist-management-actions">Actions</span>
            </div>
          </div>
        </DatagridBase>
      </BaseTemplate>
    </>
  );
};

export default WorkListManagement;
