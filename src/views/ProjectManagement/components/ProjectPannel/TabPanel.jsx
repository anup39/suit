import './ProjectPannel.scss';

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import React from 'react';

const TabPanel = (props) => {
  const { children, value, index } = props;

  return (
    <div className="tab-pannel-base" hidden={value !== index} role="tabpanel">
      {value === index && (
        <Box sx={{ pt: 2, height: '100%' }}>
          <p>{children}</p>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
