import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import MapView from '../../components/shared/FieldUpdates/components/MapView/MapView';
import RestrictedPages from '../../components/shared/RestrictedPages/RestrictedPages';
import { getIfAuthenticated } from '../../redux/user-redux/user.selectors';

const PAGE_ACCESSABLE_BY = [
  'planA_Engg',
  'planA_admin',
  'ext_engg',
  'ext_worker',
];

const WebGisServices = () => {
  const isAuthenticated = useSelector(getIfAuthenticated);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/asuiteweb/signin');
    }
  }, [isAuthenticated]);

  return (
    <RestrictedPages accessibleBy={PAGE_ACCESSABLE_BY}>
      <MapView page="webgisservices" />
    </RestrictedPages>
  );
};

WebGisServices.propTypes = {};

export default WebGisServices;
