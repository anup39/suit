import './MilestoneApprovalModal.scss';

import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateMilestone } from '../../../../redux/milestone-management/milestone-management.action';
import {
  getUserAuthToken,
  getUserData,
} from '../../../../redux/user-redux/user.selectors';

const MilestoneApprovalModal = ({ handelClose, milestoneNr, milestoneId }) => {
  const [description, setDescription] = React.useState('');
  const authToken = useSelector(getUserAuthToken);
  const currentUser = useSelector(getUserData);
  const dispatch = useDispatch();

  const handleApprovalOfMilestone = (e) => {
    e.preventDefault();
    const currentData = {
      authToken,
      desc: description,
      userId: currentUser.id,
      date: moment(new Date()).format('DD MMM YYYY'),
      milestoneId,
    };
    dispatch(updateMilestone(currentData));
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
          <input disabled value={milestoneNr} />
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
        <button
          className="handle-approve-button"
          onClick={handleApprovalOfMilestone}
          type="button"
        >
          Approve Milestone
        </button>
      </div>
    </div>
  );
};

/* eslint-disable */
MilestoneApprovalModal.propTypes = {
  handelClose: PropTypes.func,
  milestoneNr: PropTypes.number,
  milestoneId: PropTypes.any,
};

export default MilestoneApprovalModal;
