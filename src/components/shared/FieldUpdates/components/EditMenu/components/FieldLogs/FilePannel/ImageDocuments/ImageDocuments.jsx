import './ImageDocuments.scss';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getfieldlogs } from '../../../../../../../../../redux/Management-of-field-activities/management-field-activities.selectors';

const ImageDocuments = () => {
  const { t } = useTranslation();
  const fieldLogs = useSelector(getfieldlogs);

  const imageData = fieldLogs.imageTask[0];

  return (
    <div>
      <div className="field-log-data">
        <span className="field-log-data-projectId">
          <p>Project Id</p>
          <div> {!imageData?.projectId ? '-' : imageData?.projectId} </div>
        </span>
        <span className="field-log-data-taskName">
          <p>Task Name</p>
          <div>{!imageData?.projectName ? '-' : imageData?.projectName}</div>
        </span>
        <span className="field-log-data-time">
          <p>Time</p>
          <div>{!imageData?.fieldTime ? '-' : imageData?.fieldTime}</div>
        </span>

        <span className="field-log-data-date">
          <p>Date</p>
          <div>{!imageData?.fieldDate ? '-' : imageData?.fieldDate}</div>
        </span>
        <span className="field-log-data-note">
          <p>Note</p>
          <div>{!imageData?.verifierNote ? '-' : imageData?.verifierNote}</div>
        </span>
        <span className="field-log-data-logs">
          <p>Field Log</p>
          <div>{!imageData?.fieldlogId ? '-' : imageData?.fieldlogId}</div>
        </span>
        <span className="field-log-data-status">
          <p>Status</p>
          <div>---</div>
        </span>
        <span className="field-log-data-barcode">
          <p>Barcode Detection</p>
          <div>
            {!imageData?.barCodeDetection ? '-' : imageData?.barCodeDetection}
          </div>
        </span>
        <span className="field-log-data-user">
          {' '}
          <p>User</p>
          <div>Test User 1</div>
        </span>

        <span className="field-log-data-field-operator">
          {' '}
          <p>Field Operator Id</p>
          <div>
            {!imageData?.fieldOperatorId ? '-' : imageData?.fieldOperatorId}
          </div>
        </span>

        <span className="field-log-data-task-notification">
          {' '}
          <p>Task Notification</p>
          <div>
            {!imageData?.taskNotification ? '-' : imageData?.taskNotification}
          </div>
        </span>

        <span className="field-log-data-barcode-value">
          {' '}
          <p>Barcode Value</p>
          <div>
            {!imageData?.barCodeValues ? '-' : imageData?.barCodeValues}
          </div>
        </span>

        <span className="field-log-data-lat">
          {' '}
          <p>Latitude</p>
          <div>{!imageData?.lat ? '-' : imageData?.lat}</div>
        </span>

        <span className="field-log-data-long">
          {' '}
          <p>Longitude</p>
          <div>{!imageData?.lon ? '-' : imageData?.lon}</div>
        </span>

        <span className="field-log-data-img-address">
          {' '}
          <p>Image Address</p>
          <div>{!imageData?.imageAddress ? '-' : imageData?.imageAddress}</div>
        </span>
      </div>

      <div className="change-request-buttons-div">
        <span className="change-request-button-reject">{t('reject')}</span>
        <span className="change-request-button-accept">{t('accept')}</span>
      </div>
    </div>
  );
};

export default ImageDocuments;
