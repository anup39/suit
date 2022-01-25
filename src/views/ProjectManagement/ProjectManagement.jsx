import '../../theme/ButtonColors.scss';
import './ProjectManagement.scss';

import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Drawer } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import DataGridBase from '../../components/shared/DatagridBase/DatagridBase';
import Pagination from '../../components/shared/Pagination/Pagination';
import { getAllProjects } from '../../redux/project-management-redux/project.selector';
import {
  getProjectDetails,
  getProjectList,
} from '../../redux/project-management-redux/project-management.actions';
import {
  getIfAuthenticated,
  getUserAuthToken,
} from '../../redux/user-redux/user.selectors';
import CreateProjectForm from './components/CreateProjectForm/CreateProjectForm';
import Dashboard from './components/Dashboard/Dashboard';
import ProjectManagementTabPannel from './components/ProjectManagementTabPannel/ProjectManagementTabPannel';
import ProjectPannel from './components/ProjectPannel/ProjectPannel';
import MobileDataRow from './mobile.data.row';

const ProjectManagement = ({ userToken }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [value, setValue] = React.useState(0);
  const [serchText, setSerchText] = React.useState('');
  const [filteredData, setFilteredData] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [showProjectPannel, setShowProjectPannel] = React.useState(false);
  const [addNewProject, setAddNewProject] = React.useState(false);

  const projectList = useSelector(getAllProjects);
  const authToken = useSelector(getUserAuthToken);
  const isAuthenticated = useSelector(getIfAuthenticated);

  const navigate = useNavigate();

  const handelShowProjectPannel = (projectId) => {
    setShowProjectPannel(true);
    const data = {
      projectId,
      authToken,
    };
    dispatch(getProjectDetails(data));
  };

  const handelDrawerClose = () => {
    setAddNewProject(false);
  };

  const handelSearchTextChange = (e) => {
    setSerchText(e.target.value);

    const filteredList = projectList.filter((item) =>
      item?.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filteredList);
  };

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getProjectList(userToken));
    } else {
      navigate('/signin');
    }
  }, [isAuthenticated]);

  return (
    <BaseTemplate>
      <div className="header-wrapper">
        <h2 className="header">{t('projectManagement')}</h2>
        {value === 1 && (
          <button onClick={() => setAddNewProject(true)} type="button">
            <AddIcon />
            {t('createProject')}
          </button>
        )}
      </div>

      {!showProjectPannel ? (
        <div>
          <Box sx={{ width: '100%' }}>
            <Box>
              <Tabs onChange={handleChange} value={value}>
                <Tab label={t('dashbord')} />
                <Tab label={t('projects')} />
              </Tabs>
            </Box>
            <ProjectManagementTabPannel index={0} value={value}>
              <Dashboard />
            </ProjectManagementTabPannel>
            <ProjectManagementTabPannel index={1} value={value}>
              <>
                <Drawer
                  anchor="right"
                  onClose={handelDrawerClose}
                  open={addNewProject}
                >
                  <CreateProjectForm handelClose={handelDrawerClose} />
                </Drawer>

                <DataGridBase>
                  <div className="project-management--parent-search-div">
                    <div className="project-management-search-div">
                      <SearchIcon className="project-management-search-icon" />
                      <input
                        className="project-management-search-input"
                        onChange={(e) => handelSearchTextChange(e)}
                        placeholder={t('searchProject')}
                        value={serchText}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="project-management-table-header">
                      {/* <span className="project-card-check-input">
                        <input type="checkbox" />
                      </span> */}

                      <span className="project-card-project-name">
                        <p>{t('projectName')}</p>
                      </span>

                      <span className="project-card-client">
                        <p>{t('client')}</p>
                      </span>

                      <span className="project-card-description">
                        <p>{t('description')}</p>
                      </span>

                      <span className="project-card-start-date">
                        <p>{t('startDate')}</p>
                      </span>

                      <span className="project-card-end-date">
                        <p>{t('completionDate')}</p>
                      </span>

                      <span className="project-card-last-update">
                        <p>{t('lastUpdate')}</p>
                      </span>

                      <span className="project-card-user-last-update">
                        <p>{t('userlastUpdate')}</p>
                      </span>

                      <span className="project-card-user-actions">
                        {t('actions')}
                      </span>
                    </div>
                  </div>

                  <Pagination
                    componentNo={0}
                    handleClose={handelShowProjectPannel}
                    itemData={serchText ? filteredData : projectList}
                    itemsPerPage={10}
                  />
                  <div className="mobile_table_pm-project">
                    <MobileDataRow />
                    <MobileDataRow />
                    <MobileDataRow />
                    <MobileDataRow />
                    <MobileDataRow />
                    <MobileDataRow />
                  </div>
                </DataGridBase>
              </>
            </ProjectManagementTabPannel>
          </Box>
        </div>
      ) : (
        <ProjectPannel />
      )}
    </BaseTemplate>
  );
};

ProjectManagement.propTypes = {
  userToken: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userToken: state.user.userData.accessToken,
});

export default connect(mapStateToProps)(ProjectManagement);
