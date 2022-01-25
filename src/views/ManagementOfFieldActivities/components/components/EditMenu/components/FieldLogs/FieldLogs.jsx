import './FieldLogs.scss';

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
// import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

import EditModalHeaders from '../EditModalHeaders/EditModalHeaders';
import FileData from './FileData/FileData';
import FilePannel from './FilePannel/FilePannel';

const FieldLogs = () => {
  const { t } = useTranslation();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="field-log-base">
      <EditModalHeaders headerName={t('fieldLogs')} />
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
                <p>{t('download')}</p>
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
        <div className="field-log-close-button" onClick={onclick}>
          {t('close')}
        </div>
      </div>
    </div>
  );
};

export default FieldLogs;
