import { WebexMeetingsWidget } from '@webex/widgets';
import React from 'react';

import classes from './styles/webex.styles.module.scss';

const WebexView = () => {
  return (
    <div className={classes.webex_container}>
      <div className={classes.webex_header_container}>
        <h2 className={classes.webex_header}>Webex</h2>
      </div>
      <div className={classes.webex_body}>
        <WebexMeetingsWidget
          accessToken="MmRhZDM2NzctZGQ1ZC00MGE0LWIzMzEtNzA2MzlhYTg3YmZiYmI3ZmRjMmEtYjFm_PE93_30b6cf13-6b32-4bf9-9c8f-33eb6c9c44d8" // Substitute with any arbitrary size or use `className`
          meetingDestination="abdivakilov1981@gmail.com"
          style={{ width: '100%', height: '500px' }}
        />
      </div>
      <footer className={classes.webex_footer}>
        <span className={classes.webex_footer_name}>Powered by Negentis</span>
      </footer>
    </div>
  );
};

export default WebexView;
