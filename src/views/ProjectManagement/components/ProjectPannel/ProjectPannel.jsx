import './ProjectPannel.scss';

import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import FieldUpdates from '../../../../components/shared/FieldUpdates/FieldUpdates';
import GlobalSpinner from '../../../../components/shared/Spinners/GlobalSpinner';
import {
  getImportProjectDataLoading,
  getProjectData,
} from '../../../../redux/project-management-redux/project.selector';
import { getCurrentUserRole } from '../../../../redux/user-redux/user.selectors';
import Documents from '../Documents/Documents';
import ImportDrawer from '../ImportProject/components/import-drawer/import-drawer';
// import ImportProject from '../ImportProject/import-project.view';
import Projects from '../Projects/Projects';
import WorkList from '../WorkList/WorkList';
import TabPanel from './TabPanel';

const ProjectPannel = ({ handleBack }) => {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();
  const projectData = useSelector(getProjectData);
  const currentUserRole = useSelector(getCurrentUserRole);

  const [isAddProjectDataOpen, setIsAddProjectDatatisOpen] =
    React.useState(false);

  const isImportProejctDataLoading = useSelector(getImportProjectDataLoading);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setIsAddProjectDatatisOpen(false);
  };

  const handleOpen = () => {
    setIsAddProjectDatatisOpen(true);
  };
  return (
    <>
      <ImportDrawer handleClose={handleClose} isOpen={isAddProjectDataOpen} />
      <GlobalSpinner isOpen={isImportProejctDataLoading} />
      <div className="project-pannel-base-div">
        <div>
          {currentUserRole === 'planA_Admin' && (
            <button
              className="import-project-data-add-button"
              onClick={handleOpen}
              type="button"
            >
              <AddIcon />
              {t('importData')}{' '}
            </button>
          )}
        </div>

        <div className="project-bread-crumbs">
          <span>
            <span className="breadcrumbs-back" onClick={handleBack}>
              Project Management/
            </span>{' '}
            {projectData.name}
          </span>
        </div>
        {/* eslint-disable */}
        {(currentUserRole === 'planA_admin' || currentUserRole === 'planA_Engg')  ? (
          <div className="project-main-div">
            <Box sx={{ width: '100%' }}>
              <Box>
                <Tabs onChange={handleChange} value={value}>
                  <Tab label={t('projects')} />
                  <Tab label={t('documents')} />
                  <Tab label={t('fieldUpdates')} />
                  <Tab label={t('workList')} />
                  {/* <Tab label={t('importProjectData')} /> */}
                </Tabs>
              </Box>
              <TabPanel index={0} value={value}>
                <Projects />
              </TabPanel>
              <TabPanel index={1} value={value}>
                <Documents />
              </TabPanel>

              <TabPanel index={2} value={value}>
                <FieldUpdates />
              </TabPanel>

              <TabPanel index={3} value={value}>
                <WorkList />
              </TabPanel>
            </Box>
          </div>
        ) : (
          <div className="project-main-div">
            <Box sx={{ width: '100%' }}>
              <Box>
                <Tabs onChange={handleChange} value={value}>
                 <Tab label={t('projects')} />
                  <Tab label={t('documents')} />
                  <Tab label={t('fieldUpdates')} />
                </Tabs>
              </Box>

              <TabPanel index={0} value={value}>
                <Projects />
              </TabPanel>
              <TabPanel index={1} value={value}>
                <Documents />
              </TabPanel>

              <TabPanel index={2} value={value}>
                <FieldUpdates />
              </TabPanel>
            </Box>
          </div>
        )}
      </div>
    </>
  );
};

ProjectPannel.propTypes = {
  handleBack: PropTypes.isRequired,
};

export default ProjectPannel;
