import './FieldLogs.scss';

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React from 'react';

import EditModalHeaders from '../EditModalHeaders/EditModalHeaders';
import FilePannel from './FilePannel/FilePannel';

const FieldLogs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="field-log-base">
      <EditModalHeaders headerName="Field Logs" />
      <div className="field-log-content-div">
        <div>
          <Box sx={{ width: '100%' }}>
            <Tabs onChange={handleChange} value={value}>
              <Tab label="File 1" />
              <Tab label="File 2" />
              <Tab label="File 3" />
              <Tab label="File 4" />
              <span className="file-logs-download-app-button">
                <FileDownloadOutlinedIcon className="download-all-files-icon" />
                <p>Download</p>
              </span>
            </Tabs>
          </Box>
          <FilePannel index={0} value={value}>
            File 1
          </FilePannel>
          <FilePannel index={1} value={value}>
            File 2
          </FilePannel>
          <FilePannel index={2} value={value}>
            File 3
          </FilePannel>
          <FilePannel index={3} value={value}>
            File 4
          </FilePannel>
        </div>
        <div className="field-log-close-button"> Cancel</div>
      </div>
    </div>
  );
};

export default FieldLogs;
