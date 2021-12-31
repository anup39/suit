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
            <option>company 1</option>
            <option>company 2</option>
            <option>company 3</option>
            <option>company 4</option>
            <option>company 5</option>
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
