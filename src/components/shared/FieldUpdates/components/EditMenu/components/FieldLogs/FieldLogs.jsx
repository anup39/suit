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
  // const [value, setValue] = React.useState(0);
  const { t } = useTranslation();

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <div className="field-log-base">
      <EditModalHeaders headerName={t('fieldLogs')} />
      {/* <div className="field-log-content-div">
        <div>
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
        </div>
        <button
          className="field-log-close-button"
          onClick={onclick}
          type="button"
        >
          {t('close')}
        </button>
      </div> */}

      <div className="field-log-data">
        <span className="field-log-data-projectId">
          <p>Project Id</p>
          <div>11864</div>
        </span>
        <span className="field-log-data-taskName">
          <p>Task Name</p>
          <div>Android App</div>
        </span>
        <span className="field-log-data-time">
          <p>Time</p>
          <div>12:34 P.M.</div>
        </span>

        <span className="field-log-data-date">
          <p>Date</p>
          <div>12/01/2022</div>
        </span>
        <span className="field-log-data-note">
          <p>Note</p>
          <div>A long lengthy description...</div>
        </span>
        <span className="field-log-data-logs">
          <p>Field Log</p>
          <div>12:34 P.M.</div>
        </span>
        <span className="field-log-data-status">
          <p>Status</p>
          <div>Pending</div>
        </span>
        <span className="field-log-data-barcode">
          <p>Barcode Detection</p>
          <div>-</div>
        </span>
        <span className="field-log-data-user">
          {' '}
          <p>User</p>
          <div>Test User 1</div>
        </span>
      </div>
    </div>
  );
};

export default FieldLogs;
