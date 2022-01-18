import './ProjectPannel.scss';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React from 'react';

import FieldUpdates from '../../../../components/shared/FieldUpdates/FieldUpdates';
import Documents from '../Documents/Documents';
import ImportDrawer from '../ImportProject/components/import-drawer/import-drawer';
import ImportProject from '../ImportProject/import-project.view';
import Projects from '../Projects/Projects';
import WorkList from '../WorkList/WorkList';
import TabPanel from './TabPanel';

const ProjectPannel = () => {
  const [value, setValue] = React.useState(0);

  const [isAddProjectDataOpen, setIsAddProjectDatatisOpen] =
    React.useState(false);

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
      <div className="project-pannel-base-div">
        {value === 4 && (
          <div>
            <span
              className="import-project-data-add-button"
              onClick={handleOpen}
            >
              + Import Data
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
                <Tab label="Projects" />
                <Tab label="Documents" />
                <Tab label="Field Updates" />
                <Tab label="Work List" />
                <Tab label="Import Project Data" />
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
