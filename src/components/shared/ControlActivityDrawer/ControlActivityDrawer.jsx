import './ControlActivityDrawer.scss';

import React from 'react';

const ControlActivityDrawer = () => {
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

        <label>Control Activity Parameter</label>
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 5</option>
        </select>

        <label>Control Activity Value</label>
        <input />
      </form>

      <div className="submit-div">
        <span className="control-activity-cancel-button">Cancel</span>
        <span className="control-activity-submit-button">Submit</span>
      </div>
    </div>
  );
};

export default ControlActivityDrawer;
