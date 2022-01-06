import 'react-notifications-component/dist/theme.css';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import '@webex/widgets/dist/css/webex-widgets.css';

import React, { Suspense } from 'react';
import ReactNotifications from 'react-notifications-component';
import { useRoutes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import appRoutes from '../../routes/AppRoutes';
import GlobalSpinner from '../shared/Spinners/GlobalSpinner';

const App = () => {
  const content = useRoutes(appRoutes);
  return (
    <Suspense fallback={<GlobalSpinner isOpen />}>
      <ReactNotifications />
      <ToastContainer />
      {content}
    </Suspense>
  );
};

export default App;
