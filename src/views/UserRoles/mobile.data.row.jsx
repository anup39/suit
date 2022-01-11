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
        <h3>Username </h3>
        <p>aru78n@gmail.com </p>
      </div>
      <div className="grid_3_1">
        <h3>Company </h3>
        <p>Worklist 1 </p>
      </div>
      <div className="grid_3_1">
        <h3>Roles </h3>
        <p>Worklist 1 </p>
      </div>

      <div className="grid_3_1">
        <h3>Registration Date </h3>
        <p>7/1/2022</p>{' '}
      </div>
      <div className="grid_3_1">
        <h3>Status </h3>
        <p>Inactive </p>
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
