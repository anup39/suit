/*eslint-disable */
import React from 'react';
import './form-modal.styles.scss';

const FormModal = (props) => {
  return (
    <div className="base_div">
      <div className="right-div">{props.children}</div>
    </div>
  );
};
export default FormModal;
