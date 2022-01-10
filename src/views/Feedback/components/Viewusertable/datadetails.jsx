import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Modal } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

import ViewDocumentsModal from './view.documents.modal';

const DataDetails = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handelApprove = () => {
    handleModalOpen();
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Modal onClose={handleModalClose} open={modalOpen}>
        <ViewDocumentsModal />
      </Modal>

      <div className="table-head-grid table-details">
        <div className="table-check">
          <input type="checkbox" />
        </div>
        <div className="table-user">
          <h3>User Name</h3>
          <p>User@mail.com</p>
        </div>
        <div className="table-date">
          <h3>Date</h3>
          <p>9 Nov 2021</p>
        </div>
        <div className="table-address">
          <h3>Address</h3>
          <p>Dummy text refers to the bits of content that are used to</p>
        </div>
        <div className="table-city">
          <h3>City</h3>
          <p>Chennai</p>
        </div>
        <div className="table-zip">
          <h3>Zip Code</h3>
          <p>52352 235235</p>
        </div>
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
        <div className="table-check" />
        <div className="table-user">
          <h3>Coment</h3>
          <p>Dummy text refers to the bits of content that are used to </p>
        </div>
        <div className="table-date">
          <h3>Satisfaction</h3>
          <p>9</p>
        </div>
        <div className="table-address">
          <h3>Documents</h3>
          <div className="doc-details">
            <div onClick={handelApprove}>Document1</div>
            <div>Document2</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataDetails;
