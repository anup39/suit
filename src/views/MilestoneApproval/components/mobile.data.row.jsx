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
        <h3>Worklist File </h3>
        <p>Worklist 1 </p>
      </div>
      <div className="grid_3_1">
        <h3>QGIS</h3>
        <p>
          File 1, file2 ,<span>+3 more</span>
        </p>{' '}
      </div>

      <div className="grid_3_1">
        <h3>Documents</h3>
        <p className="blue_tex">
          Document 1, Document 2, <span>+3 more</span>
        </p>
      </div>
      <div className="grid_3_1">
        <h3>Uploaded on </h3>
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
          <MenuItem>View</MenuItem>
          <MenuItem>Delete</MenuItem>
        </Menu>{' '}
      </div>
    </div>
  );
};

export default MobileDataRow;
