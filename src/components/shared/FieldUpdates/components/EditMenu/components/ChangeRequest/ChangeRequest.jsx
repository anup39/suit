import './ChangeRequest.scss';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getfieldlogs } from '../../../../../../../redux/Management-of-field-activities/management-field-activities.selectors';
import EditModalHeaders from '../EditModalHeaders/EditModalHeaders';

const ChangeRequest = () => {
  const { t } = useTranslation();

  const fieldLogData = useSelector(getfieldlogs);

  const chnageRequestData = fieldLogData.changeTask[0];
  return (
    <div className="change-request-base">
      <EditModalHeaders headerName={t('changerequest')} />
      <div className="change-request-body-div">
        <div>
          <div className="change-request-body-header">
            <p>Task 1 Change</p>
          </div>
          <div className="change-request-body">
            <div className="change-body-request-details">
              <span>
                <p>{t('companyName')}</p>
                <div className="change-request-details">
                  {!chnageRequestData?.companyName
                    ? '-'
                    : chnageRequestData?.companyName}
                </div>
              </span>

              <span>
                <p>{t('projectName')}</p>
                <div className="change-request-details">
                  {!chnageRequestData?.projectName
                    ? '-'
                    : chnageRequestData?.projectName}
                </div>
              </span>

              <span>
                <p>{t('requetsDate')}</p>
                <div className="change-request-details">
                  {!chnageRequestData?.fieldDate
                    ? '-'
                    : chnageRequestData?.fieldDate}
                </div>
              </span>

              <span>
                <p>{t('requestnr')}</p>
                <div className="change-request-details">
                  {' '}
                  {!chnageRequestData?.documentId
                    ? '-'
                    : chnageRequestData?.documentId}{' '}
                </div>
              </span>
            </div>

            <div>
              <p>{t('changerequest')}</p>
              <div className="change-request-description-details">
                {!chnageRequestData?.taskNotification
                  ? '-'
                  : chnageRequestData?.taskNotification}
              </div>
            </div>

            {/* <div className="filename-base-div">
      <p>{t('listofFileNames')}</p>
      <div className="change-request-details-files"> File Div </div>
    </div> */}

            <div className="change-request-buttons-div">
              <span className="change-request-button-reject">
                {t('reject')}
              </span>
              <span className="change-request-button-accept">
                {t('accept')}
              </span>
            </div>

            <span>
              <p>{t('reasonofRejection')}</p>
              <textarea className="reason-of-rejection-details-text-area" />
            </span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <button className="close-button" type="button">
          {t('close')}
        </button>
      </div>
    </div>
  );
};

export default ChangeRequest;
