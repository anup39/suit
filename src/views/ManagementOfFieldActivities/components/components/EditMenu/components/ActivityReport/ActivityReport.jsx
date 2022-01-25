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
                <input className="activity-report-inputs" />
              </span>

              <span>
                <p>{t('projectName')}</p>
                <input className="activity-report-inputs" />
              </span>

              <span>
                <p>{t('date')}</p>
                <input className="activity-report-inputs" />
              </span>

              <span>
                <p>{t('reportnr')}</p>
                <input className="activity-report-inputs" />
              </span>
            </div>

            <span>
              <p>{t('activity')}</p>
              <textarea className="activity-report-textarea" cols={6} />
            </span>
          </div>
        </div>
        <span className="activity-close-button"> {t('close')}</span>
      </div>
    </div>
  );
};

export default ActivityReport;
