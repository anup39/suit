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
      <div className="grid-3-1">
        <h3>User Name</h3>
        <p>User@mail.com </p>
      </div>
      <div className="grid-3-1">
        <h3>Date</h3>
        <p>9 Nov 2021 </p>
      </div>
      <div className="grid-3-1">
        <h3>Address</h3>
        <p>Dummy text refers to the bits of content that are used to </p>
      </div>
      <div className="grid-3-1">
        <h3>City</h3>
        <p>Chennai </p>
      </div>
      <div className="grid-3-1">
        <h3>Satisfaction</h3>
        <p className="blue-text ">
          Document 1, Document 2, <span>+3 more</span>
        </p>
      </div>
      <div className="grid-3-1">
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
          <MenuItem>View</MenuItem>
          <MenuItem>Delete</MenuItem>
        </Menu>{' '}
      </div>
    </div>
  );
};

export default MobileDataRow;
