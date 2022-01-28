import './ControlActivityFields.scss';

import React from 'react';

const ControlActivityFields = () => {
  return (
    <div className="control-activity-fields-base">
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
    </div>
  );
};

export default ControlActivityFields;
