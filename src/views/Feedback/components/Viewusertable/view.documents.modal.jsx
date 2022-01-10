import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React from 'react';

import TabPanel from '../../TabPanel';

const ViewDocumentsModal = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="custom-modal view-document-modal">
      <div className="modal-head">Upload Documents</div>
      <div className="modal-container">
        <div className="modal-box">
          <button className="img-btn" type="button">
            {' '}
            <FileDownloadIcon />
            Download All
          </button>
          <Box sx={{ width: '100%' }}>
            <Tabs onChange={handleChange} value={value}>
              <Tab label="Document 1" />
              <Tab label="Video 1" />
            </Tabs>
            <TabPanel index={0} value={value}>
              <div className="doc-view-wrap">
                <div className="option">
                  <FileDownloadIcon />{' '}
                </div>
              </div>
            </TabPanel>
            <TabPanel index={1} value={value}>
              s
            </TabPanel>
          </Box>
        </div>
        <div className="text-right">
          <button className="brd-btn" type="button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDocumentsModal;
