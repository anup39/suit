import './DocumentsCard.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

const DocumentsCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="project-document-card-base-div">
      <span className="document-name">Document Name</span>

      <span className="document-importd-from">Imported From</span>

      <span className="document-type">Document Type</span>

      <span className="document-uploaded-on">Uploaded On</span>

      <span className="document-actions">
        <MoreHorizIcon
          className="document-menu-icon"
          onClick={handleMenuClick}
        />

        <Menu
          anchorEl={anchorEl}
          id="basic-menu"
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          onClose={handleMenuClose}
          open={open}
        >
          <MenuItem onClick={handleMenuClose}>Download</MenuItem>
          <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
        </Menu>
      </span>
    </div>
  );
};

export default DocumentsCard;
