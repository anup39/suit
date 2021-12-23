import './WorkListCards.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

import WorkListDetailsCard from '../WorkListDetailsCard/WorkListDetailsCard';

const WorkListCards = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [view, setView] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleView = () => {
    setView(true);
    handleClose();
  };

  const handelUndoView = () => {
    setView(false);
  };

  return (
    <div>
      {!view ? (
        <div className="work-list-table-body">
          <span className="work-list-card-check-input">
            {/* <input type="checkbox" /> */}
          </span>

          <span className="work-list-card-task-id">23353534</span>

          <span className="work-list-card-task-name">
            A long Long task name
          </span>

          <span className="work-list-card-task-description">
            Task Description Task Description Task Description Task Description
          </span>

          <span className="work-list-card-task-milestone">True</span>

          <span className="work-list-card-task-type">Enum</span>

          <span className="work-list-card-task-status">Not Started</span>

          <span className="work-list-card-task-actions">
            <MoreHorizIcon
              className="work-list-menu-icon"
              onClick={handleClick}
            />
            <Menu
              anchorEl={anchorEl}
              id="basic-menu"
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              onClose={handleClose}
              open={open}
            >
              <MenuItem onClick={handleView}>View</MenuItem>
              <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
          </span>
        </div>
      ) : (
        <WorkListDetailsCard undo={handelUndoView} />
      )}
    </div>
  );
};

export default WorkListCards;
