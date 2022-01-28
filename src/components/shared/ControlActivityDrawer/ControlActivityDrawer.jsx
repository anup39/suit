import './ControlActivityDrawer.scss';

import PropTypes from 'prop-types';
import React from 'react';

import ControlActivityFields from './components/ControlActivityFields/ControlActivityFields';

const ControlActivityDrawer = ({ handleClose }) => {
  return (
    <div className="control-activity-base-div">
      <h2>Control Activity</h2>

      <form className="form-base-div">
        <label>Control Activity Type</label>
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 5</option>
        </select>

        <ControlActivityFields />
      </form>

      <div className="submit-div">
        <span className="control-activity-cancel-button" onClick={handleClose}>
          Cancel
        </span>
        <span className="control-activity-submit-button">Submit</span>
      </div>
    </div>
  );
};

ControlActivityDrawer.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default ControlActivityDrawer;
