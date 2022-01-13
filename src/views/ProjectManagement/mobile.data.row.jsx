import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

const MobileDataRow = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div className="grid_3_1">
        <h3>Project Name </h3>
        <p>Project 1 </p>
      </div>
      <div className="grid_3_1">
        <h3>Client </h3>
        <p>Worklist 1 </p>
      </div>
      <div className="grid_3_1">
        <h3>Description</h3>
        <p>Worklist 1 </p>
      </div>

      <div className="grid_3_1">
        <h3>Start Date</h3>
        <p>10 Nov 2000</p>{' '}
      </div>
      <div className="grid_3_1">
        <h3>Completion Date</h3>
        <p>10 Nov 2000</p>
      </div>
      <div className="grid_3_1">
        <h3>Last Update</h3>
        <p>Worklist 1 </p>
      </div>
      <div className="grid_3_1">
        <h3>User Last Update</h3>
        <p>Worklist 1 </p>
      </div>

      <div className="grid_3_1">
        <h3>Actions</h3>
        <MoreHorizIcon
          aria-controls="basic-menu"
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          id="basic-button"
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
          <MenuItem>Edit</MenuItem>
          <MenuItem>Delete</MenuItem>
        </Menu>{' '}
      </div>
    </div>
  );
};

export default MobileDataRow;
