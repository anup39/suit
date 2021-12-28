import './MilestoneApprovalCard.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import React from 'react';

import MilestoneApprovalModal from '../MilestoneApprovalModal/MilestoneApprovalModal';

const MilestoneApprovalCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handelApprove = () => {
    handleClose();
    handleModalOpen();
  };

  return (
    <>
      <Modal onClose={handleModalClose} open={modalOpen}>
        <MilestoneApprovalModal handelClose={handleModalClose} />
      </Modal>
      <div className="milestone-approval-card">
        <span className="milestone-approval-card-checkInput">
          <input type="checkbox" />
        </span>

        <span className="milestone-approval-card-company">
          <p> Company </p>
        </span>

        <span className="milestone-approval-card-projectName">
          <p> Project Name </p>
        </span>

        <span className="milestone-approval-card-date">
          <p> Date</p>
        </span>

        <span className="milestone-approval-card-milestoneNr">
          <p> Milestone Nr</p>
        </span>

        <span className="milestone-approval-card-description">
          <p> Description </p>
        </span>

        <span className="milestone-approval-card-status">
          <p> Status </p>
        </span>

        <span className="milestone-approval-card-action">
          <MoreHorizIcon
            className="milestone-menu-icon"
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
            <MenuItem onClick={handelApprove}>Approve</MenuItem>
            <MenuItem onClick={handleClose}>View</MenuItem>
            <MenuItem onClick={handleClose}>Delete</MenuItem>
          </Menu>
        </span>
      </div>
    </>
  );
};

export default MilestoneApprovalCard;
