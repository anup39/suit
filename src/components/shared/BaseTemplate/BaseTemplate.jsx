import './BaseTemplate.scss';

import PropTypes from 'prop-types';
import React from 'react';

const BaseTemplate = ({ children, title }) => {
  return (
    <>
      <div className="base-div">
        {title ? <h2 className="header">{title}</h2> : ''}
        {children}
      </div>
      <p className="footer">Powered By Negentis</p>
    </>
  );
};

BaseTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
export default BaseTemplate;
