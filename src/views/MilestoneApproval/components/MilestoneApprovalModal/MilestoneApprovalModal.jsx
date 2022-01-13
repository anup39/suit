import './MilestoneApprovalModal.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateMilestone } from '../../../../redux/milestone-management/milestone-management.action';
import {
  getUserAuthToken,
  getUserData,
} from '../../../../redux/user-redux/user.selectors';

const MilestoneApprovalModal = ({ handelClose, milestoneNr }) => {
  const milestoneId = milestoneNr;
  const [description, setDescription] = React.useState('');
  const authToken = useSelector(getUserAuthToken);
  const currentUser = useSelector(getUserData);

  const dispatch = useDispatch();

  const handleApprove = () => {
    // const currentDate = new Date();
    // `${currentDate.getDate()}/${
    // currentDate.getMonth() + 1
    // }/${currentDate.getFullYear()}`
    const data = {
      authToken,
      id: milestoneId,
      date: '10 Nov 2001',
      desc: description,
      userName: currentUser.userData.id,
    };
    dispatch(updateMilestone(data));
  };

  return (
    <div className="milestone-approval-modal-base">
      <div className="milestone-approval-modal-header">
        <span className="milestone-approval-left" />
        <h3 className="edit-modal-header-text">Reason Of Approval</h3>
      </div>
      <div className="milestone-approval-modal-body">
        <div>
          <label>Milestone Nr</label>
          <input disabled value={milestoneId} />
        </div>
        <div>
          <label>Description</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
            value={description}
          />
        </div>
      </div>
      <div className="milestone-approval-submit-div">
        <span
          className="milestone-approval-button-cancel"
          onClick={handelClose}
        >
          Cancel
        </span>
        <span
          className="milestone-approval-button-approve"
          onClick={handleApprove}
        >
          Approve
        </span>
      </div>
    </div>
  );
};

MilestoneApprovalModal.propTypes = {
  handelClose: PropTypes.func.isRequired,
  milestoneNr: PropTypes.isRequired,
};

export default MilestoneApprovalModal;
