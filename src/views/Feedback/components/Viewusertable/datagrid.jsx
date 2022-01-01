import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

const Datagrid = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="table-head-grid">
      <div className="table-check">
        <input type="checkbox" />
      </div>
      <div className="table-user">User@mail.com</div>
      <div className="table-date">9 Nov 2021</div>
      <div className="table-address">
        Dummy text refers to the bits of content that are used to{' '}
      </div>
      <div className="table-city">Chennai</div>
      <div className="table-satis">9</div>
      <div className="table-doc">Document 1, Document 2</div>
      <div className="table-actions">
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
        </Menu>
      </div>
    </div>
  );
};

export default Datagrid;
