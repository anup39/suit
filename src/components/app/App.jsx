import 'react-notifications-component/dist/theme.css';
import 'animate.css';

import React, { Suspense } from 'react';
import ReactNotifications from 'react-notifications-component';
import { useRoutes } from 'react-router-dom';

import appRoutes from '../../routes/AppRoutes';

const App = () => {
  const content = useRoutes(appRoutes);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReactNotifications />
      {content}
    </Suspense>
  );
};

export default App;
