import './ActivityReport.scss';

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import React from 'react';
import { useTranslation } from 'react-i18next';

import EditModalHeaders from '../EditModalHeaders/EditModalHeaders';

const ActivityReport = () => {
  const { t } = useTranslation();

  return (
    <div className="activity-report-base">
      <EditModalHeaders headerName={t('activityreport')} />
      <div>
        <div className="activity-report-content">
          <div className="activity-report-content-header">
            <span>Activity Report 1</span>
            <span className="activity-download-button">
              <FileDownloadOutlinedIcon className="activity-download-icon" />{' '}
              {t('download')}
            </span>
          </div>
          <div className="activity-report-content-body">
            <div className="activity-report-inputs-div">
              <span>
                <p>{t('company')}</p>
                <input />
              </span>

              <span>
                <p>{t('projectName')}</p>
                <input />
              </span>

              <span>
                <p>{t('date')}</p>
                <input />
              </span>

              <span>
                <p>{t('reportnr')}</p>
                <input />
              </span>
            </div>

            <span>
              <p>{t('activity')}</p>
              <textarea rows="5" />
            </span>
          </div>
        </div>
        <span className="activity-close-button"> {t('close')}</span>
      </div>
    </div>
  );
};

export default ActivityReport;
