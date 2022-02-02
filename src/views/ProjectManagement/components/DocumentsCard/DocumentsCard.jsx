import './DocumentsCard.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';

const DocumentsCard = ({ documentsDetails }) => {
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
      <span className="document-name"> {documentsDetails.fileName} </span>

      <span className="document-importd-from"> - </span>

      <span className="document-type">
        {!documentsDetails.fileType ? '-' : documentsDetails.fileType}
      </span>

      <span className="document-uploaded-on">-</span>

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
          <MenuItem onClick={handleMenuClose}>View</MenuItem>
        </Menu>
      </span>
    </div>
  );
};

/* eslint-disable */
DocumentsCard.propTypes = {
  documentsDetails: PropTypes.object,
};

export default DocumentsCard;
