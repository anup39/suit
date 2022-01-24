import './EditModalHeaders.scss';

import PropTypes from 'prop-types';
import React from 'react';

const EditModalHeaders = ({ headerName }) => {
  return (
    <div className="edit-modal-base-div">
      <span className="left-span" />
      <h3 className="edit-modal-header-text">{headerName}</h3>
    </div>
  );
};

EditModalHeaders.propTypes = {
  headerName: PropTypes.string.isRequired,
};
export default EditModalHeaders;
