import './components/FieldUpdates.scss';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { GrMap } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import LoadingSpinner from '../../components/shared/LoadingSpinner/LoadingSpinner';
import Pagination from '../../components/shared/Pagination/Pagination';
import RestrictedPages from '../../components/shared/RestrictedPages/RestrictedPages';
import GlobalSpinner from '../../components/shared/Spinners/GlobalSpinner';
import { getAllActivities } from '../../redux/Management-of-field-activities/management-field-activities.action';
import { getIsActivitiesLoading } from '../../redux/Management-of-field-activities/management-field-activities.selectors';
import { getAllProjects } from '../../redux/project-management-redux/project.selector';
import { getProjectList } from '../../redux/project-management-redux/project-management.actions';
import {
  getIfAuthenticated,
  getUserAuthToken,
} from '../../redux/user-redux/user.selectors';
import { taskByProject } from '../../redux/worklist-management-redux/worklist.actions';
import {
  getIsChngeStatusLoading,
  getTasksByProject,
} from '../../redux/worklist-management-redux/worklist.selector';
import AuthenticatedRoute from '../../routes/AuthenticatedRoute';
import MapView from './components/components/MapView/MapView';
import MobileDataRow from './mobile.data.row';

const PAGE_ACCESSABLE_BY = ['planA_admin', 'planA_Engg'];

const ManagementOfFieldActivities = () => {
  const [searchText, setSearchText] = React.useState('');
  const [filteredData, setfilteredData] = React.useState('');

  const isAuthenticated = useSelector(getIfAuthenticated);
  const worklistTasks = useSelector(getTasksByProject);

  const authToken = useSelector(getUserAuthToken);
  const isAllActivitiesLoading = useSelector(getIsActivitiesLoading);
  const isChangeStatusLoading = useSelector(getIsChngeStatusLoading);

  const [isMapView, setIsMapView] = React.useState(false);

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [projectName, setProjectName] = React.useState(null);
  const projectList = useSelector(getAllProjects);

  useEffect(() => {
    dispatch(getProjectList(authToken));
  }, []);

  React.useEffect(() => {
    const data = { authToken, projectId: projectName };

    if (projectName) {
      dispatch(taskByProject(data));
    }
  }, [projectName]);

  const handleProjectChange = (event) => {
    const {
      target: { value },
    } = event;
    setProjectName(typeof value === 'string' ? value.split(',') : value);
  };

  const ITEM_HEIGHT = 30;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const showMapView = () => {
    setIsMapView(true);
  };

  const showListView = () => {
    setIsMapView(false);
  };

  const handleSearchTask = (e) => {
    setSearchText(e.target.value);

    const filteredList = worklistTasks.filter((item) =>
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
    <RestrictedPages accessibleBy={PAGE_ACCESSABLE_BY}>
      {console.log(filteredData)}
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
                  <div>
                    <FormControl sx={{ m: 1, width: 200 }}>
                      <InputLabel id="demo-multiple-name-label">
                        {t('projectName')}
                      </InputLabel>
                      <Select
                        id="demo-multiple-name"
                        input={<OutlinedInput label="Project Name" />}
                        labelId="demo-multiple-name-label"
                        MenuProps={MenuProps}
                        onChange={handleProjectChange}
                        value={projectName}
                      >
                        {projectList &&
                          projectList.map((val) => (
                            <MenuItem key={val.id} value={val.id}>
                              {val.name}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
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
                  <FormatListBulletedIcon className="map-icon" />{' '}
                  {t('listView')}
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
                  ) : worklistTasks && worklistTasks.length === 0 ? (
                    <div className="no-data-found">
                      <p>{t('noDataFound')}</p>
                    </div>
                  ) : (
                    <Pagination
                      componentNo={9}
                      // itemData={searchText ? filteredData : worklistTasks}
                      itemData={worklistTasks}
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
    </RestrictedPages>
  );
};

export default ManagementOfFieldActivities;
