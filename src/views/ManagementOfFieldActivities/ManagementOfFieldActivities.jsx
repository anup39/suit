import './components/FieldUpdates.scss';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { GrMap } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import LoadingSpinner from '../../components/shared/LoadingSpinner/LoadingSpinner';
import Pagination from '../../components/shared/Pagination/Pagination';
import { getAllActivities } from '../../redux/Management-of-field-activities/management-field-activities.action';
import {
  getActivitiesDetails,
  getIsActivitiesLoading,
} from '../../redux/Management-of-field-activities/management-field-activities.selectors';
import {
  getIfAuthenticated,
  getUserAuthToken,
} from '../../redux/user-redux/user.selectors';
import AuthenticatedRoute from '../../routes/AuthenticatedRoute';
import MapView from './components/components/MapView/MapView';

const ManagementOfFieldActivities = () => {
  const isAuthenticated = useSelector(getIfAuthenticated);
  const authToken = useSelector(getUserAuthToken);
  const allActivities = useSelector(getActivitiesDetails);
  const isAllActivitiesLoading = useSelector(getIsActivitiesLoading);

  const [isMapView, setIsMapView] = React.useState(false);

  const dispatch = useDispatch();

  const showMapView = () => {
    setIsMapView(true);
  };

  const showListView = () => {
    setIsMapView(false);
  };

  React.useEffect(() => {
    const data = {
      authToken,
    };

    dispatch(getAllActivities(data));
  }, []);

  return (
    <AuthenticatedRoute isAuthenticated={isAuthenticated}>
      <BaseTemplate title="Management Of Field Activities">
        <div className="field-update-base-div">
          <div className="field-update-search-div">
            {!isMapView && (
              <>
                <span>
                  <SearchIcon className="field-search-icon" />
                  <input className="field-input" placeholder="Search Task" />
                </span>
                <span>
                  <SearchIcon className="field-search-icon" />
                  <input className="field-input" placeholder="Search Company" />
                </span>
              </>
            )}
            {!isMapView ? (
              <span className="map-view-button" onClick={showMapView}>
                <GrMap className="map-icon" /> Map View
              </span>
            ) : (
              <span className="map-view-button" onClick={showListView}>
                <FormatListBulletedIcon className="map-icon" /> List View
              </span>
            )}
          </div>
          {!isMapView ? (
            <>
              <div className="field-update-header">
                {/* <span className="field-updates-header-checkInput">
                  <input type="checkbox" />
                </span> */}
                <span className="field-updates-header-taskItem">Task Item</span>
                <span className="field-updates-header-fieldLogs">
                  Field Logs
                </span>
                <span className="field-updates-header-activityReport">
                  Activity report
                </span>
                <span className="field-updates-header-changeRequest">
                  Change request
                </span>
                <span className="field-updates-header-milestoneApproval">
                  Milestone approval
                </span>
                <span className="field-updates-header-status">Status</span>
                <span className="field-updates-header-controlActivity">
                  Control Activity
                </span>
                <span className="field-updates-header-actions">Actions</span>
              </div>
              {/* eslint-disable */}
              <div>
                {isAllActivitiesLoading ? (
                  <LoadingSpinner />
                ) : allActivities && allActivities.length === 0 ? (
                  <div className="no-data-found">
                    <p>No Data Found!</p>
                  </div>
                ) : (
                  <Pagination
                    componentNo={9}
                    itemData={allActivities}
                    itemsPerPage={10}
                  />
                )}
              </div>
              {/* eslint-enable */}
            </>
          ) : (
            <MapView />
          )}
        </div>
      </BaseTemplate>
    </AuthenticatedRoute>
  );
};

export default ManagementOfFieldActivities;
