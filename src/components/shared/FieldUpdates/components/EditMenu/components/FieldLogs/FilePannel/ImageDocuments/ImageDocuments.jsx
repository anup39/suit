import './ImageDocuments.scss';

import React from 'react';
import { useTranslation } from 'react-i18next';

const ImageDocuments = () => {
  const { t } = useTranslation();

  return (
    <div>
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

        <span className="field-log-data-field-operator">
          {' '}
          <p>Field Operator Id</p>
          <div>56356</div>
        </span>

        <span className="field-log-data-task-notification">
          {' '}
          <p>Task Notification</p>
          <div>Task Notifications</div>
        </span>

        <span className="field-log-data-barcode-value">
          {' '}
          <p>Barcode Value</p>
          <div>9853044305fasf</div>
        </span>

        <span className="field-log-data-lat">
          {' '}
          <p>Latitude</p>
          <div>12.234</div>
        </span>

        <span className="field-log-data-long">
          {' '}
          <p>Longitude</p>
          <div>54.234234</div>
        </span>

        <span className="field-log-data-img-address">
          {' '}
          <p>Image Address</p>
          <div>google.com/images</div>
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
