import './ProjectPannel.scss';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React from 'react';

import FieldUpdates from '../../../../components/shared/FieldUpdates/FieldUpdates';
import Dashboard from '../Dashboard/Dashboard';
import Documents from '../Documents/Documents';
import Projects from '../Projects/Projects';
import WorkList from '../WorkList/WorkList';
import TabPanel from './TabPanel';

const ProjectPannel = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="project-bread-crumbs">
        <span>Project Management/Project1</span>
      </div>
      <div className="project-main-div">
        <Box sx={{ width: '100%' }}>
          <Box>
            <Tabs onChange={handleChange} value={value}>
              <Tab label="Projects" />
              <Tab label="Dashboard" />
              <Tab label="Documents" />
              <Tab label="Field Updates" />
              <Tab label="Work List" />
            </Tabs>
          </Box>
          <TabPanel index={0} value={value}>
            <Projects />
          </TabPanel>
          <TabPanel index={1} value={value}>
            <Dashboard />
          </TabPanel>
          <TabPanel index={2} value={value}>
            <Documents />
          </TabPanel>

          <TabPanel index={3} value={value}>
            <FieldUpdates />
          </TabPanel>

          <TabPanel index={4} value={value}>
            <WorkList />
          </TabPanel>
        </Box>
      </div>
    </>
  );
};

export default ProjectPannel;
