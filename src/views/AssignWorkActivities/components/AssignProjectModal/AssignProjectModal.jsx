import './AssignProjectModal.scss';

import PropTypes from 'prop-types';
import React from 'react';

const AssignProjectModal = ({ handleClose }) => {
  return (
    <div className="assign-project-modal-base">
      <h2> Assign Project</h2>

      <form className="assign-project-form-base">
        <label>Project Name</label>
        <input />

        <label>Company</label>
        <input />
      </form>
      <div className="assign-work-submit-div">
        <span className="assign-work-cancel-button" onClick={handleClose}>
          Cancel
        </span>
        <span className="assign-work-submit-button">Assign</span>
      </div>
    </div>
  );
};

AssignProjectModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default AssignProjectModal;
