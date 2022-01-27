import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import appRoutes from '../../routes/AppRoutes';
import GlobalSpinner from '../shared/Spinners/GlobalSpinner';

const App = () => {
  const content = useRoutes(appRoutes);
  return (
    <Suspense fallback={<GlobalSpinner isOpen />}>
      <ToastContainer />
      {content}
    </Suspense>
  );
};

export default App;