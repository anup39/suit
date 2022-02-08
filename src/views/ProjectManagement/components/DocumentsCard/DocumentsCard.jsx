import './DocumentsCard.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';

const DocumentsCard = ({ documentsDetails }) => {
  const ECM_URL =
    'http://asuite.arkivista.it/VistaEcmWeb.aspx?AppName=ASuite&FolderCode=ASUITE&DocTypeCode=PROJECT_DOCS&LogonType=3&OperationType=10&DispayMode=0&UserName=Administrator&PwdHash=FE5925DF339948B95B605D595DF8861729F3EB3A&IdxId=21&DocId';

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleViewDocuments = () => {
    handleMenuClose();

    const docUrl = `${ECM_URL}=${documentsDetails.id}`;
    window.open(docUrl, '_blank');
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
          <MenuItem onClick={handleViewDocuments}>View</MenuItem>
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
