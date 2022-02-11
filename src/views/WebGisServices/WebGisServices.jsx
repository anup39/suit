import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import MapView from '../../components/shared/FieldUpdates/components/MapView/MapView';
import RestrictedPages from '../../components/shared/RestrictedPages/RestrictedPages';
import {
  getProjectList,
} from '../../redux/project-management-redux/project-management.actions';
import {
  getIfAuthenticated,
  getUserAuthToken,
} from '../../redux/user-redux/user.selectors';

const PAGE_ACCESSABLE_BY = [
  'planA_Engg',
  'planA_admin',
  'ext_engg',
  'ext_worker',
];



const WebGisServices = () => {
  const dispatch = useDispatch();
  const authToken = useSelector(getUserAuthToken);

  const isAuthenticated = useSelector(getIfAuthenticated);
  const navigate = useNavigate();

  React. useEffect(() => {
    if (isAuthenticated) {
      dispatch(getProjectList(authToken));
    } else {
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
