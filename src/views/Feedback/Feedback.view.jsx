import './styles/styles.feedback.scss';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React from 'react';

import AddFeedback from './components/addfeedback/addfeedback';
import PublicUserFeedback from './components/Public.user.feedback';
import ViewUserFeedback from './components/View.user.feedback';
import TabPanel from './TabPanel';

const FeedbackView = () => {
  const [value, setValue] = React.useState(0);
  const [create, setCreate] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const openCreate = () => {
    setCreate(true);
  };

  return (
    <div className="dfc">
      <div className="fb_container flex1">
        <AddFeedback isClose={setCreate} isOpen={create} />

        <div className="fb_head">
          <h3>Feedback</h3>
          <span
            className="add_new_feedback_button"
            onClick={openCreate}
            type="button"
          >
            + Add Feedback
          </span>
        </div>
        {/* <div className="breadcrumbs">
          <div>Feedback</div>
          <div>Public User Feedback</div>
        </div> */}
        <Box sx={{ width: '100%' }}>
          <Box>
            <Tabs onChange={handleChange} value={value}>
              <Tab label="Public User Feedback" />
              <Tab label="View User Feedback" />
            </Tabs>
          </Box>
          <TabPanel index={0} value={value}>
            <PublicUserFeedback />
          </TabPanel>
          <TabPanel index={1} value={value}>
            <ViewUserFeedback />
          </TabPanel>
        </Box>
      </div>
      <div className="copy-right-txt">Powered by Negentis</div>
    </div>
  );
};

export default FeedbackView;
