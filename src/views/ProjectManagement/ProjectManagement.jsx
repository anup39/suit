import '../../theme/ButtonColors.scss';
import './ProjectManagement.scss';

import { Drawer } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import DataGridBase from '../../components/shared/DatagridBase/DatagridBase';
import SearchComponent from '../../components/shared/SearchComponent/SearchComponent';
import { getProjectList } from '../../redux/project-management-redux/project-management.actions';
import CreateProjectForm from './components/CreateProjectForm/CreateProjectForm';
import ProjectCard from './components/ProjectCard/ProjectCard';
import ProjectPannel from './components/ProjectPannel/ProjectPannel';

const ProjectManagement = ({ userToken }) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const [showProjectPannel, setShowProjectPannel] = React.useState(false);
  const [addNewProject, setAddNewProject] = React.useState(false);

  const handelShowProjectPannel = () => {
    setShowProjectPannel(true);
  };

  const handelDrawerClose = () => {
    setAddNewProject(false);
  };
  useEffect(() => {
    console.log(userToken);
    dispatch(getProjectList(userToken));
  }, []);

  return (
    <BaseTemplate title="Project Management">
      {!showProjectPannel ? (
        <>
          <Drawer
            anchor="right"
            onClose={handelDrawerClose}
            open={addNewProject}
          >
            <CreateProjectForm handelClose={handelDrawerClose} />
          </Drawer>
          <span
            className="new_project_button"
            onClick={() => setAddNewProject(true)}
          >
            + Create Project
          </span>
          <DataGridBase>
            <SearchComponent title="Search Project" />
            <ProjectCard handelView={handelShowProjectPannel} />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </DataGridBase>
        </>
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
