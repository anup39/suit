import './MilestoneApprovalModal.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

// useDispatch;
// import { updateMilestone } from '../../../../redux/milestone-management/milestone-management.action';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';

const MilestoneApprovalModal = ({ handelClose, milestoneNr }) => {
  const milestoneId = milestoneNr;
  const [description, setDescription] = React.useState('');
  const authToken = useSelector(getUserAuthToken);
  // const dispatch = useDispatch();

  const handleApprove = () => {
    console.log(milestoneId);
    console.log(authToken);
    // const data = {
    //   authToken,

    // }
    // dispatch(updateMilestone(data))
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
