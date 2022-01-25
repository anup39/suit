import './FieldUpdates.scss';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { GrMap } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';

import { getProjectData } from '../../../redux/project-management-redux/project.selector';
import { getUserAuthToken } from '../../../redux/user-redux/user.selectors';
import { taskByProject } from '../../../redux/worklist-management-redux/worklist.actions';
import { getTasksByProject } from '../../../redux/worklist-management-redux/worklist.selector';
import Pagination from '../Pagination/Pagination';
import MapView from './components/MapView/MapView';

const FieldUpdates = () => {
  const [isMapView, setIsMapView] = React.useState(false);
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const project = useSelector(getProjectData);
  const worklistTasks = useSelector(getTasksByProject);
  const authToken = useSelector(getUserAuthToken);

  const showMapView = () => {
    setIsMapView(true);
  };

  const showListView = () => {
    setIsMapView(false);
  };

  React.useEffect(() => {
    const data = { authToken, projectId: project.id };

    dispatch(taskByProject(data));
  }, []);

  return (
    <div className="field-update-base-div">
      <div className="field-update-search-div">
        {!isMapView && (
          <>
            <span>
              <SearchIcon className="field-search-icon" />
              <input className="field-input" placeholder={t('searchTask')} />
            </span>
            <span>
              <SearchIcon className="field-search-icon" />
              <input className="field-input" placeholder={t('searchCompany')} />
            </span>
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
          <div className="field-update-header">
            <span className="field-updates-header-checkInput">
              <input type="checkbox" />
            </span>
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
            <span className="field-updates-header-status">{t('status')}</span>
            <span className="field-updates-header-controlActivity">
              {t('controlActivity')}
            </span>
            <span className="field-updates-header-actions">{t('actions')}</span>
          </div>
          <div>
            {worklistTasks && worklistTasks.length === 0 ? (
              <div className="no-data-found">
                <p>No Data Found!</p>
              </div>
            ) : (
              <Pagination
                componentNo={10}
                itemData={worklistTasks}
                itemsPerPage={10}
              />
            )}
          </div>
        </>
      ) : (
        <MapView />
      )}
    </div>
  );
};

export default FieldUpdates;
