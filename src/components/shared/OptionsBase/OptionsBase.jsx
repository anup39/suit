import './OptionsBase.scss';

import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line
const OptionsBase = ({ children }) => {
  return <div className="user-role-menu-base">{children}</div>;
};

OptionsBase.propType = {
  children: PropTypes.node.isRequired,
};

export default OptionsBase;
