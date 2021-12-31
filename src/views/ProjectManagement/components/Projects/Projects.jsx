import './Projects.scss';

import EditIcon from '@mui/icons-material/Edit';
import { Drawer } from '@mui/material';
import React from 'react';

import CreateProjectForm from '../CreateProjectForm/CreateProjectForm';

const Projects = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsOpen(open);
  };

  return (
    <div className="projects-base-div">
      <Drawer anchor="right" onClose={toggleDrawer(false)} open={isOpen}>
        <CreateProjectForm />
      </Drawer>

      <div className="project-title-div">
        <span className="current-project-title">Project Name</span>
        <sapn className="project-edit-icon">
          <EditIcon onClick={toggleDrawer(true)} />
        </sapn>
      </div>
      <div className="project-details-div">
        <span className="project-name">
          <p className="project-data-label">Project Name</p>
          <p className="project-data">Project 1</p>
        </span>
        <span className="project-client">
          <p className="project-data-label">Client</p>
          <p className="project-data">Apple</p>
        </span>
        <span className="project-description">
          <p className="project-data-label">Description</p>
          <p className="project-data">
            Solve bug in the music player app. Solve bug in the music player
            app.Solve bug in the music player app.
          </p>
        </span>
        <span className="project-start-date">
          <p className="project-data-label">Start Date</p>
          <p className="project-data">12/12/2021</p>
        </span>
        <span className="project-completion-date">
          <p className="project-data-label">Completion Date</p>
          <p className="project-data">02/03/2022</p>
        </span>
        <span className="project-last-update">
          <p className="project-data-label">Last Update</p>
          <p className="project-data">17/12/2021</p>
        </span>
        <span className="project-updated-by">
          <p className="project-data-label">By User</p>
          <p className="project-data">Mahesh</p>
        </span>
      </div>
    </div>
  );
};

export default Projects;
