import './ActivityReport.scss';

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
          <div>
            <div className="activity-report-content-header">
              <span>Activity Report 1</span>
            </div>
            <div className="activity-report-content-body">
              <div className="activity-report-inputs-div">
                <span>
                  <p>{t('company')}</p>
                  <div className="activity-report-data"> Test Company </div>
                </span>

                <span>
                  <p>{t('projectName')}</p>
                  <div className="activity-report-data"> Test Project </div>
                </span>

                <span>
                  <p>{t('reportDate')}</p>
                  <div className="activity-report-data"> 10 Nov 2020 </div>
                </span>

                <span>
                  <p>{t('reportnr')}</p>
                  <div className="activity-report-data"> 5643543 </div>
                </span>
              </div>

              <span>
                <p>{t('sendToCompany')}</p>
                <select className="activity-report-select">
                  <option value="">Select An Option</option>
                  <option value={1}>Yes</option>
                  <option value={0}>No</option>
                </select>
              </span>

              <span>
                <p>{t('activity')}</p>
                <textarea rows="5" />
              </span>

              <div className="change-request-buttons-div">
                <span className="change-request-button-reject">
                  {t('reject')}
                </span>
                <span className="change-request-button-accept">
                  {t('accept')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right">
        <button className="activity-close-button" type="button">
          {' '}
          {t('close')}
        </button>
      </div>
    </div>
  );
};

export default ActivityReport;
