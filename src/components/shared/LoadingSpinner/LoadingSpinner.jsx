import './LoadingSpinner.scss';

import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-base">
      <CircularProgress />
    </div>
  );
};

export default LoadingSpinner;
