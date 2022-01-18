import './FilePannel.scss';

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import React from 'react';

const FilePannel = (props) => {
  const { children, value, index } = props;

  return (
    <div
      className="file-pannel-base-div"
      hidden={value !== index}
      role="tabpanel"
    >
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
};

export default FilePannel;

FilePannel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
