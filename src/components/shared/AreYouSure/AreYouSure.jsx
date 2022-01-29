import './AreYouSure.scss';

import PropType from 'prop-types';
import React from 'react';

const AreYouSure = ({ handleClose, handleDelete, headline }) => {
  return (
    <div className="are-you-sure-base">
      <div className="are-you-sure-modal-head">Are You Sure?</div>

      <div className="are-you-sure-modal-body">
        <h5>{headline} </h5>
        <div className="are-you-sure-control">
          <span onClick={handleClose}>No</span>
          <span className="are-you-sure-control-yes" onClick={handleDelete}>
            Yes
          </span>
        </div>
      </div>
    </div>
  );
};

AreYouSure.propTypes = {
  handleClose: PropType.func.isRequired,
  handleDelete: PropType.func.isRequired,
  headline: PropType.string.isRequired,
};

export default AreYouSure;
