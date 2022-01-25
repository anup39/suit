import { WebexMeetingsWidget } from '@webex/widgets';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getIfAuthenticated } from '../../redux/user-redux/user.selectors';
import AuthenticatedRoute from '../../routes/AuthenticatedRoute';
import classes from './styles/webex.styles.module.scss';

const WebexView = () => {
  const isAuthenticated = useSelector(getIfAuthenticated);
  const { t } = useTranslation();

  return (
    <AuthenticatedRoute isAuthenticated={isAuthenticated}>
      <div className={classes.webex_container}>
        <div className={classes.webex_header_container}>
          <h2 className={classes.webex_header}>{t('webEx')}</h2>
        </div>
        <div className={classes.webex_body}>
          <WebexMeetingsWidget
            accessToken="YmJhYzVhMzItYzIyMC00YWY0LWFjYWQtZTA3MGVlZTg3ODhlZjVhYzg4N2EtNzg4_PE93_30b6cf13-6b32-4bf9-9c8f-33eb6c9c44d8" // Substitute with any arbitrary size or use `className`
            meetingDestination="abdivakilov1981@gmail.com"
            style={{ width: '100%', height: '700px' }}
          />
        </div>
      </div>
    </AuthenticatedRoute>
  );
};

export default WebexView;
