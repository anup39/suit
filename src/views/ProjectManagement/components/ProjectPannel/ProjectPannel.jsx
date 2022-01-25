import './ProjectPannel.scss';

import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import FieldUpdates from '../../../../components/shared/FieldUpdates/FieldUpdates';
import GlobalSpinner from '../../../../components/shared/Spinners/GlobalSpinner';
import { getImportProjectDataLoading } from '../../../../redux/project-management-redux/project.selector';
import Documents from '../Documents/Documents';
import ImportDrawer from '../ImportProject/components/import-drawer/import-drawer';
import ImportProject from '../ImportProject/import-project.view';
import Projects from '../Projects/Projects';
import WorkList from '../WorkList/WorkList';
import TabPanel from './TabPanel';

const ProjectPannel = () => {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();

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
        {value === 4 && (
          <div>
            <span
              className="import-project-data-add-button"
              onClick={handleOpen}
            >
              <AddIcon />
              {t('importData')}{' '}
            </span>
          </div>
        )}
        <div className="project-bread-crumbs">
          <span>Project Management/Project1</span>
        </div>

        <div className="project-main-div">
          <Box sx={{ width: '100%' }}>
            <Box>
              <Tabs onChange={handleChange} value={value}>
                <Tab label={t('projects')} />
                <Tab label={t('documents')} />
                <Tab label={t('fieldUpdates')} />
                <Tab label={t('workList')} />
                <Tab label={t('importProjectData')} />
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

            <TabPanel index={4} value={value}>
              <ImportProject />
            </TabPanel>
          </Box>
        </div>
      </div>
    </>
  );
};

export default ProjectPannel;
