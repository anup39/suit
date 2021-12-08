import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import * as React from 'react';

const GlobalSpinner = ({ isOpen }) => (
  <Backdrop
    open={isOpen}
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
);

GlobalSpinner.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default GlobalSpinner;
