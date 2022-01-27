import './Projects.scss';

import EditIcon from '@mui/icons-material/Edit';
import { Drawer } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getProjectData } from '../../../../redux/project-management-redux/project.selector';
import CreateProjectForm from '../CreateProjectForm/CreateProjectForm';

const Projects = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useTranslation();

  const projectData = useSelector(getProjectData);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsOpen(open);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="projects-base-div">
      <Drawer anchor="right" onClose={toggleDrawer(false)} open={isOpen}>
        <CreateProjectForm editForm handelClose={handleClose} />
      </Drawer>

      <div className="project-title-div">
        <span className="current-project-title"> {projectData.name}</span>
        <sapn className="project-edit-icon">
          <EditIcon onClick={toggleDrawer(true)} />
        </sapn>
      </div>
      <div className="project-details-div">
        <span className="project-name">
          <p className="project-data-label">{t('projectName')}</p>
          <p className="project-data">{projectData.name}</p>
        </span>
        <span className="project-client">
          <p className="project-data-label">{t('client')}</p>
          <p className="project-data">{projectData.clientName}</p>
        </span>
        <span className="project-description">
          <p className="project-data-label">{t('description')}</p>
          <p className="project-data">{projectData.description}</p>
        </span>
        <span className="project-start-date">
          <p className="project-data-label">{t('startDate')}</p>
          <p className="project-data">{projectData.startDate}</p>
        </span>
        <span className="project-completion-date">
          <p className="project-data-label">{t('completionDate')}</p>
          <p className="project-data">{projectData.completionDate}</p>
        </span>
        <span className="project-last-update">
          <p className="project-data-label">{t('lastUpdate')}</p>
          <p className="project-data">-</p>
        </span>
        <span className="project-updated-by">
          <p className="project-data-label">{t('byUser')}</p>
          <p className="project-data">{projectData.userLastUpdate}</p>
        </span>
      </div>
    </div>
  );
};

export default Projects;

// TODO: Last Update
