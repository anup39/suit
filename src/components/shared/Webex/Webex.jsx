import '@webex/components/dist/css/webex-components.css';

import { WebexDataProvider, WebexJSONAdapter } from '@webex/components';
import React from 'react';

const Webex = () => {
  const JSONData = {
    credentials:
      'NzI2MTM5ZDEtN2E3ZC00NWQzLTgwYmUtZjIzN2Y5MjE4ZWVmNzkxYTYyODctZWU0_P0A1_23ca1dfa-ad8d-4383-9b62-45cb7418ddf7',
  };

  const adapter = new WebexJSONAdapter(JSONData);

  return <WebexDataProvider adapter={adapter}>Hello</WebexDataProvider>;
};

export default Webex;
