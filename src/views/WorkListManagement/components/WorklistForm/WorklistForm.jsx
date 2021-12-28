import './WorklistForm.scss';

import PropTypes from 'prop-types';
import React from 'react';

const WorklistForm = ({ isEdit = false, handelClose }) => {
  return (
    <div className="worklist-form-base-div">
      {!isEdit ? <h2>Add Worklist</h2> : <h2>Edit Worklist</h2>}
      <div className="worklist-form-container">
        <form>
          <span>
            <label>Project Name</label>
            {isEdit ? <input disabled /> : <input />}
          </span>

          <span>
            <label>Task ID</label>
            <input />
          </span>

          <span>
            <label>Task Name</label>
            <input />
          </span>

          <span>
            <label>Task Description</label>
            <textarea />
          </span>

          <span>
            <label>Ismilestone</label>
            <input />
          </span>

          <span>
            <label>Type</label>
            <input />
          </span>

          <span>
            <label>Priority</label>
            <input />
          </span>

          <div className="worklist-management-gird">
            <span>
              <label>Start Date</label>
              <input />
            </span>

            <span>
              <label>End Date</label>
              <input />
            </span>
          </div>

          <span>
            <label>Street</label>
            <input />
          </span>

          <span>
            <label>Zip Code</label>
            <input />
          </span>

          <span>
            <label>City</label>
            <input />
          </span>

          <span>
            <label>Country</label>
            <input />
          </span>
          <div className="worklist-management-gird">
            <span>
              <label>Latitude</label>
              <input />
            </span>

            <span>
              <label>Longitude</label>
              <input />
            </span>
          </div>
          <span>
            <label>Country</label>
            <input />
          </span>

          <span>
            <label>Note</label>
            <textarea />
          </span>

          <span>
            <label>Documents</label>
            <input />
          </span>
        </form>
      </div>
      <div className="worklist-submit-div">
        <span className="worklist-cancel-button" onClick={handelClose}>
          Cancel
        </span>
        <span className="worklist-submit-button">Submit</span>
      </div>
    </div>
  );
};

WorklistForm.propTypes = {
  isEdit: PropTypes.isRequired,
  handelClose: PropTypes.func.isRequired,
};

export default WorklistForm;
