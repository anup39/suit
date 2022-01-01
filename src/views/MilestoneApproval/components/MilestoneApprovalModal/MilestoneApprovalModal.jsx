import './MilestoneApprovalModal.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const MilestoneApprovalModal = ({ handelClose, authToken, milestoneNr }) => {
  const milestoneId = milestoneNr;

  const [description, setDescription] = React.useState('');

  React.useEffect(() => {}, []);

  return (
    <div className="milestone-approval-modal-base">
      <div className="milestone-approval-modal-header">
        <span className="milestone-approval-left" />
        {console.log(authToken)}
        <h3 className="edit-modal-header-text">Reason Of Approval</h3>
      </div>
      <div className="milestone-approval-modal-body">
        <div className="milestone-approval-form-div">
          <label>Milestone Nr</label>
          <input disabled style={{ paddingLeft: '10px' }} value={milestoneId} />

          <label>Description</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
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
        <span className="milestone-approval-button-approve">Approve</span>
      </div>
    </div>
  );
};

MilestoneApprovalModal.propTypes = {
  handelClose: PropTypes.func.isRequired,
  authToken: PropTypes.isRequired,
  milestoneNr: PropTypes.isRequired,
};

const mapStateToProps = (state) => ({
  authToken: state.user.userData.accessToken,
});
export default connect(mapStateToProps)(MilestoneApprovalModal);
