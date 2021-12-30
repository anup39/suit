/*eslint-disable*/

import './MilestoneApprovalCard.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import React from 'react';

import MilestoneApprovalModal from '../MilestoneApprovalModal/MilestoneApprovalModal';

const MilestoneApprovalCard = ({
  company,
  projectName,
  date,
  milestone,
  desc,
  status,
  milestoneId,
}) => {
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

  const handelView = () => {
    handleClose();
  };

  const handelDelete = () => {
    handleClose();
  };

  return (
    <>
      <Modal onClose={handleModalClose} open={modalOpen}>
        <MilestoneApprovalModal
          handelClose={handleModalClose}
          milestoneNr={milestoneId}
        />
      </Modal>
      <div className="milestone-approval-card">
        <span className="milestone-approval-card-checkInput">
          <input type="checkbox" />
        </span>

        <span className="milestone-approval-card-company">
          <p> {company} </p>
        </span>

        <span className="milestone-approval-card-projectName">
          <p> {projectName} </p>
        </span>

        <span className="milestone-approval-card-date">
          <p> {date}</p>
        </span>

        <span className="milestone-approval-card-milestoneNr">
          <p> {milestone}</p>
        </span>

        <span className="milestone-approval-card-description">
          <p> {desc} </p>
        </span>

        <span className="milestone-approval-card-status">
          <p> {status} </p>
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
            <MenuItem onClick={handelView}>View</MenuItem>
            <MenuItem onClick={handelDelete}>Delete</MenuItem>
          </Menu>
        </span>
      </div>
    </>
  );
};

export default MilestoneApprovalCard;
