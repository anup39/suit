import React from 'react';

import MapView from '../../components/shared/FieldUpdates/components/MapView/MapView';
import RestrictedPages from '../../components/shared/RestrictedPages/RestrictedPages';

const PAGE_ACCESSABLE_BY = [
  'planA_Engg',
  'planA_admin',
  'ext_engg',
  'ext_worker',
];

const WebGisServices = () => {
  return (
    <RestrictedPages accessibleBy={PAGE_ACCESSABLE_BY}>
      <MapView page="webgisservices" />
    </RestrictedPages>
  );
};

WebGisServices.propTypes = {};

export default WebGisServices;
