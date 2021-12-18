import '../../theme/ButtonColors.scss';
import './ProjectManagement.scss';

// import Stack from '@mui/material/Stack';
import { Drawer } from '@mui/material';
import React, { useState } from 'react';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import DataGridBase from '../../components/shared/DatagridBase/DatagridBase';
import SearchComponent from '../../components/shared/SearchComponent/SearchComponent';
import CreateProjectForm from './components/CreateProjectForm/CreateProjectForm';
import ProjectCard from './components/ProjectCard/ProjectCard';
import ProjectPannel from './components/ProjectPannel/ProjectPannel';

const ProjectManagement = () => {
  const [projectPannel, setProjectPannel] = useState(true);
  return (
    <BaseTemplate title="Project Management">
      {projectPannel ? (
        <ProjectPannel />
      ) : (
        <>
          <Drawer anchor="right" open={false}>
            <CreateProjectForm />
          </Drawer>
          <span className="create_button_color  new_project_button">
            {' '}
            + Create Project
          </span>
          <DataGridBase>
            <SearchComponent title="Search Project" />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard onClick={setProjectPannel(false)} />
          </DataGridBase>
        </>
      )}
    </BaseTemplate>
  );
};

export default ProjectManagement;
