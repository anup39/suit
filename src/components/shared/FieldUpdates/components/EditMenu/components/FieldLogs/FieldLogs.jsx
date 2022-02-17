import './FieldLogs.scss';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
// import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

import EditModalHeaders from '../EditModalHeaders/EditModalHeaders';
// import FileData from './FileData/FileData';
import FilePannel from './FilePannel/FilePannel';
import ImageDocuments from './FilePannel/ImageDocuments/ImageDocuments';
// import OtherDocuments from './FilePannel/OtherDocuments/OtherDocuments';

const FieldLogs = () => {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="field-log-base">
      <EditModalHeaders headerName={t('fieldLogs')} />
      <div className="field-log-content-div">
        <div>
          <Tabs onChange={handleChange} value={value}>
            <Tab label="Image" />
            {/* <Tab label="Documents" /> */}
          </Tabs>
          <FilePannel index={0} value={value}>
            <ImageDocuments />
          </FilePannel>
          {/* <FilePannel index={1} value={value}>
            <OtherDocuments />
          </FilePannel> */}
        </div>
        {/* <button
          className="field-log-close-button"
          onClick={onclick}
          type="button"
        >
          {t('close')}
        </button> */}
      </div>
    </div>
  );
};

export default FieldLogs;
