import './AssignTaskModal.scss';

import PropTypes from 'prop-types';
import React from 'react';

import EditModalHeaders from '../../../../components/shared/FieldUpdates/components/EditMenu/components/EditModalHeaders/EditModalHeaders';

const AssignTaskModal = ({ handleCancel }) => {
  return (
    <div className="assign-task-modal-base-div">
      <EditModalHeaders headerName="Assign Task" />
      <div className="assign-form-base-div">
        <div>
          <label>Company</label>
          <select>
            <option>Mahesh</option>
            <option>Mahesh</option>
            <option>Mahesh</option>
          </select>
        </div>
      </div>
      <div className="assign-task-modal-control-div">
        <span
          className="assign-task-modal-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </span>
        <span className="assign-task-modal-submit-button">Submit</span>
      </div>
    </div>
  );
};

AssignTaskModal.propTypes = {
  handleCancel: PropTypes.func.isRequired,
};

export default AssignTaskModal;
