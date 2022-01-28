import './components/FieldUpdates.scss';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { GrMap } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import LoadingSpinner from '../../components/shared/LoadingSpinner/LoadingSpinner';
import Pagination from '../../components/shared/Pagination/Pagination';
import GlobalSpinner from '../../components/shared/Spinners/GlobalSpinner';
import { getAllActivities } from '../../redux/Management-of-field-activities/management-field-activities.action';
import {
  getActivitiesDetails,
  getIsActivitiesLoading,
} from '../../redux/Management-of-field-activities/management-field-activities.selectors';
import {
  getIfAuthenticated,
  getUserAuthToken,
} from '../../redux/user-redux/user.selectors';
import { getIsChngeStatusLoading } from '../../redux/worklist-management-redux/worklist.selector';
import AuthenticatedRoute from '../../routes/AuthenticatedRoute';
import MapView from './components/components/MapView/MapView';
import MobileDataRow from './mobile.data.row';

const ManagementOfFieldActivities = () => {
  const [searchText, setSearchText] = React.useState('');
  const [filteredData, setfilteredData] = React.useState('');

  const isAuthenticated = useSelector(getIfAuthenticated);
  const authToken = useSelector(getUserAuthToken);
  const allActivities = useSelector(getActivitiesDetails);
  const isAllActivitiesLoading = useSelector(getIsActivitiesLoading);
  const isChangeStatusLoading = useSelector(getIsChngeStatusLoading);

  const [isMapView, setIsMapView] = React.useState(false);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const showMapView = () => {
    setIsMapView(true);
  };

  const showListView = () => {
    setIsMapView(false);
  };

  const handleSearchTask = (e) => {
    setSearchText(e.target.value);

    const filteredList = allActivities.filter((item) =>
      item?.taskName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setfilteredData(filteredList);
  };

  React.useEffect(() => {
    const data = {
      authToken,
    };

    dispatch(getAllActivities(data));
  }, []);

  return (
    <AuthenticatedRoute isAuthenticated={isAuthenticated}>
      <GlobalSpinner isOpen={isChangeStatusLoading} />
      <BaseTemplate title={t('managementOfFieldActivities')}>
        <div className="mgmt-field-update">
          <div className="mgmt-field-update-search-div">
            {!isMapView && (
              <>
                <div className="mgmt-field-container">
                  <SearchIcon className="field-search-icon" />
                  <input
                    className="field-input-mgmt"
                    onChange={(e) => handleSearchTask(e)}
                    placeholder={t('searchTask')}
                    value={searchText}
                  />
                </div>
                {/* <div className="mgmt-field-container">
                  <SearchIcon className="field-search-icon" />
                  <input
                    className="field-input-mgmt"
                    placeholder={t('searchCompany')}
                  />
                </div> */}
              </>
            )}
            {!isMapView ? (
              <span className="map-view-button" onClick={showMapView}>
                <GrMap className="map-icon" /> {t('mapView')}
              </span>
            ) : (
              <span className="map-view-button" onClick={showListView}>
                <FormatListBulletedIcon className="map-icon" /> {t('listView')}
              </span>
            )}
          </div>
          {!isMapView ? (
            <>
              <div className="mgmt-field-update-header">
                {/* <span className="field-updates-header-checkInput">
                  <input type="checkbox" />
                </span> */}
                <span className="field-updates-header-taskItem">
                  {t('taskItem')}
                </span>
                <span className="field-updates-header-fieldLogs">
                  {t('fieldLogs')}
                </span>
                <span className="field-updates-header-activityReport">
                  {t('activityreport')}
                </span>
                <span className="field-updates-header-changeRequest">
                  {t('changerequest')}
                </span>
                <span className="field-updates-header-milestoneApproval">
                  {t('milestoneapproval')}
                </span>
                <span className="field-updates-header-status">
                  {t('status')}
                </span>
                <span className="field-updates-header-controlActivity">
                  {t('controlActivity')}
                </span>
                <span className="field-updates-header-actions">
                  {t('actions')}
                </span>
              </div>
              {/* eslint-disable */}
              <>
                {isAllActivitiesLoading ? (
                  <LoadingSpinner />
                ) : allActivities && allActivities.length === 0 ? (
                  <div className="no-data-found">
                    <p>{t('noDataFound')}</p>
                  </div>
                ) : (
                  <Pagination
                    componentNo={9}
                    itemData={searchText ? filteredData : allActivities}
                    itemsPerPage={10}
                  />
                )}
              </>
              <div className="mgmt-field-update-mobile">
                <MobileDataRow />
                <MobileDataRow />
                <MobileDataRow />
                <MobileDataRow />
                <MobileDataRow />
                <MobileDataRow />
                <MobileDataRow />
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
