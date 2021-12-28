import './Webex.scss';
import '@webex/components/dist/css/webex-components.css';

import {
  WebexAvatar,
  WebexDataProvider,
  WebexJSONAdapter,
} from '@webex/components';
import React from 'react';

const Webex = () => {
  const JSONData = {};

  const adapter = WebexJSONAdapter(JSONData);

  return (
    <div className="webex-base-div">
      <WebexDataProvider adapter={adapter}>
        <WebexAvatar personID="XYZ" />
      </WebexDataProvider>
    </div>
  );
};

export default Webex;
