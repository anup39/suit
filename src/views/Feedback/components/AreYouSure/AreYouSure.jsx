import './AreYouSure.scss';

import React from 'react';

const AreYouSure = () => {
  return (
    <div className="are-you-sure-base">
      <div className="are-you-sure-modal-head">Are You Sure?</div>

      <div className="are-you-sure-modal-body">
        <h5>Are you sure to Delete the Feedback? </h5>
        <span>No</span>
        <span>Yes</span>
      </div>
    </div>
  );
};

export default AreYouSure;
