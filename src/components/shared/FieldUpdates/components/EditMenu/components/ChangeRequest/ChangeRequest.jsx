import './ChangeRequest.scss';

import React from 'react';
import { useTranslation } from 'react-i18next';

import EditModalHeaders from '../EditModalHeaders/EditModalHeaders';

const ChangeRequest = () => {
  const { t } = useTranslation();

  return (
    <div className="change-request-base">
      <EditModalHeaders headerName={t('changerequest')} />

      <div className="change-request-body-div">
        <div className="change-request-body-header">
          <p>Task 1 Change</p>
        </div>
        <div className="change-request-body">
          <div className="change-body-request-details">
            <span>
              <p>{t('companyName')}</p>
              <div className="change-request-details">Microhard </div>
            </span>

            <span>
              <p>{t('projectName')}</p>
              <div className="change-request-details">
                React Native Mobile App{' '}
              </div>
            </span>

            <span>
              <p>{t('requetsDate')}</p>
              <div className="change-request-details">10/12/21</div>
            </span>

            <span>
              <p>{t('requestnr')}</p>
              <div className="change-request-details">123445645 </div>
            </span>
          </div>

          <div>
            <p>{t('changerequest')}</p>
            <div className="change-request-description-details">
              Change Request Details
            </div>
          </div>

          <div className="filename-base-div">
            <p>{t('listofFileNames')}</p>
            <div className="change-request-details-files"> File Div </div>
          </div>

          <div className="change-request-buttons-div">
            <span className="change-request-button-reject">{t('reject')}</span>
            <span className="change-request-button-accept">{t('accept')}</span>
          </div>

          <span>
            <p>{t('reasonofRejection')}</p>
            <textarea className="reason-of-rejection-details-text-area" />
          </span>
        </div>
      </div>
      <span className="close-button">{t('close')}</span>
    </div>
  );
};

export default ChangeRequest;
