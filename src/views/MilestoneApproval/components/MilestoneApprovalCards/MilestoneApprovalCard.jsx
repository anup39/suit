import './MilestoneApprovalCard.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MilestoneDetails from '../../../../components/shared/FieldUpdates/components/EditMenu/components/Milestone/Milestone';
import {
  deleteMilestoneById,
  getAllMilestones,
} from '../../../../redux/milestone-management/milestone-management.action';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';
import MilestoneApprovalModal from '../MilestoneApprovalModal/MilestoneApprovalModal';

const MilestoneApprovalCard = ({
  company,
  projectName,
  date,
  milestone,
  desc,
  status,
  milestoneId,
  projectDocumentsId,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [milestoneView, setMilestoneView] = React.useState(false);
  const authToken = useSelector(getUserAuthToken);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => {
    setModalOpen(false);
    setMilestoneView(false);
  };

  const handelApprove = () => {
    handleClose();
    handleModalOpen();
  };

  const handelView = () => {
    setMilestoneView(true);
    handleModalOpen();
    handleClose();
  };

  const handelDelete = () => {
    const data = { id: projectDocumentsId, authToken };
    dispatch(deleteMilestoneById(data));
    handleClose();

    setTimeout(() => {
      dispatch(getAllMilestones(authToken));
    }, 2000);
  };

  return (
    <>
      <Modal onClose={handleModalClose} open={modalOpen}>
        {milestoneView ? (
          <MilestoneDetails
            handleClose={handleModalClose}
            milestoneId={projectDocumentsId}
          />
        ) : (
          <MilestoneApprovalModal
            handelClose={handleModalClose}
            milestoneNr={milestoneId}
          />
        )}
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

MilestoneApprovalCard.propTypes = {
  company: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  milestone: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  milestoneId: PropTypes.string.isRequired,
  projectDocumentsId: PropTypes.isRequired,
};

export default MilestoneApprovalCard;
