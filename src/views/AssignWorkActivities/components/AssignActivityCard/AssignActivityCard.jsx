import './AssignActivityCard.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

const AssignActivityCard = () => {
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

  const open = Boolean(menuAnchorEl);

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <div className="assign-work-activity-table-data">
      <span className="assign-work-activities-card-check-input">
        <input type="checkbox" />
      </span>
      <span className="assign-work-activities-card-project-name">
        Make an Iphone 34
      </span>
      <span className="assign-work-activities-card-comapny">Apple</span>
      <span className="assign-work-activities-card-taskId">23354</span>
      <span className="assign-work-activities-card-task-name">
        Camera Module
      </span>
      <span className="assign-work-activities-card-task-description">
        Camera is bad fix it ASAP and nedd it to fix it ASAP Camera is bad fix
      </span>
      <span className="assign-work-activities-card-isMilestone">No</span>
      <span className="assign-work-activities-card-type">Type </span>
      <span className="assign-work-activities-card-status">Pending</span>
      <span className="assign-work-activities-card-actions">
        <MoreHorizIcon
          className="assign-work-activities-card-menu-icon"
          onClick={handleMenuClick}
        />
        <Menu
          anchorEl={menuAnchorEl}
          id="basic-menu"
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          onClose={handleMenuClose}
          open={open}
        >
          <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
          <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
        </Menu>
      </span>
    </div>
  );
};

export default AssignActivityCard;
