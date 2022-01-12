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
import { connect, useDispatch, useSelector } from 'react-redux';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import DataGridBase from '../../components/shared/DatagridBase/DatagridBase';
import Pagination from '../../components/shared/Pagination/Pagination';
import { getAllProjects } from '../../redux/project-management-redux/project.selector';
import {
  getProjectDetails,
  getProjectList,
} from '../../redux/project-management-redux/project-management.actions';
import { getUserAuthToken } from '../../redux/user-redux/user.selectors';
import CreateProjectForm from './components/CreateProjectForm/CreateProjectForm';
import Dashboard from './components/Dashboard/Dashboard';
import ProjectManagementTabPannel from './components/ProjectManagementTabPannel/ProjectManagementTabPannel';
import ProjectPannel from './components/ProjectPannel/ProjectPannel';

const ProjectManagement = ({ userToken }) => {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [showProjectPannel, setShowProjectPannel] = React.useState(false);
  const [addNewProject, setAddNewProject] = React.useState(false);

  const projectList = useSelector(getAllProjects);
  const authToken = useSelector(getUserAuthToken);

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
  useEffect(() => {
    dispatch(getProjectList(userToken));
  }, []);

  return (
    <BaseTemplate>
      <div className="header-wrapper">
        <h2 className="header">Project Management</h2>
        {value === 1 && (
          <button onClick={() => setAddNewProject(true)} type="button">
            <AddIcon />
            Create Project
          </button>
        )}
      </div>

      {!showProjectPannel ? (
        <div>
          <Box sx={{ width: '100%' }}>
            <Box>
              <Tabs onChange={handleChange} value={value}>
                <Tab label="Dashbord" />
                <Tab label="Projects" />
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
                        placeholder="Search Project"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="project-management-table-header">
                      <span className="project-card-check-input">
                        <input type="checkbox" />
                      </span>

                      <span className="project-card-project-name">
                        <p>Project Name</p>
                      </span>

                      <span className="project-card-client">
                        <p>Client</p>
                      </span>

                      <span className="project-card-description">
                        <p>Description</p>
                      </span>

                      <span className="project-card-start-date">
                        <p>Start Date</p>
                      </span>

                      <span className="project-card-end-date">
                        <p>Completion Date</p>
                      </span>

                      <span className="project-card-last-update">
                        <p>Last Update</p>
                      </span>

                      <span className="project-card-user-last-update">
                        <p>User Last Update</p>
                      </span>

                      <span className="project-card-user-actions">Actions</span>
                    </div>
                  </div>

                  <Pagination
                    componentNo={0}
                    handleClose={handelShowProjectPannel}
                    itemData={projectList}
                    itemsPerPage={10}
                  />
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
