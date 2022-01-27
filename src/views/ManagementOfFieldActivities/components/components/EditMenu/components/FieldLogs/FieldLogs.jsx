import './FieldLogs.scss';

// import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
// import { Box } from '@mui/material';
// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs';
// import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

import EditModalHeaders from '../EditModalHeaders/EditModalHeaders';
// import FileData from './FileData/FileData';
// import FilePannel from './FilePannel/FilePannel';

const FieldLogs = () => {
  const { t } = useTranslation();

  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <div className="field-log-base">
      <EditModalHeaders headerName={t('fieldLogs')} />
      <div className="field-log-content-div">
        {/* <div>
          <Box sx={{ width: '100%' }}>
            <Tabs onChange={handleChange} value={value}>
              <Tab label="File 1" />
              <Tab label="File 2" />
              <Tab label="File 3" />
              <Tab label="File 4" />
              <span className="file-logs-download-app-button">
                <FileDownloadOutlinedIcon className="download-all-files-icon" />
                {t('download')}
              </span>
            </Tabs>
          </Box>
          <FilePannel index={0} value={value}>
            <FileData />
          </FilePannel>
          <FilePannel index={1} value={value}>
            <FileData />
          </FilePannel>
          <FilePannel index={2} value={value}>
            <FileData />
          </FilePannel>
          <FilePannel index={3} value={value}>
            <FileData />
          </FilePannel>
        </div> */}
        {/* <button
          className="field-log-close-button"
          onClick={onclick}
          type="button"
        >
          {t('close')}
        </button> */}

        {/* projects_id bigint(255) 
task_name
date 
time 
note 
field_log
status 
barcode_detection 
user */}

        <div>
          <span>
            <p>Project Id</p>
            <div>11864</div>
          </span>
          <span>
            <p>Task Name</p>
            <div>Android App</div>
          </span>
          <span>
            <p>Time</p>
            <div>12:34 P.M.</div>
          </span>
          <span>
            <p>Note</p>
            <div>A long lengthy description...</div>
          </span>
          <span>
            <p>Field Log</p>
            <div>12:34 P.M.</div>
          </span>
          <span>
            <p>Status</p>
            <div>Pending</div>
          </span>
          <span>
            <p>Barcode Detection</p>
            <div>-</div>
          </span>
          <span>
            {' '}
            <p>User</p>
            <div>Test User 1</div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FieldLogs;
