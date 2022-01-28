import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getfieldlogs } from '../../../../../../../../../redux/Management-of-field-activities/management-field-activities.selectors';

const OtherDocuments = () => {
  const { t } = useTranslation();
  const fieldLogs = useSelector(getfieldlogs);

  const documentsData = fieldLogs.notesTask[0];

  return (
    <div>
      <div className="field-log-data">
        <span className="field-log-data-projectId">
          <p>Project Id</p>
          <div>
            {' '}
            {!documentsData?.projectId ? '-' : documentsData?.projectId}{' '}
          </div>
        </span>
        <span className="field-log-data-taskName">
          <p>Task Name</p>
          <div>
            {' '}
            {!documentsData?.taskName ? '-' : documentsData?.taskName}{' '}
          </div>
        </span>
        <span className="field-log-data-time">
          <p>Time</p>
          <div>
            {!documentsData?.fieldTime ? '-' : documentsData?.fieldTime}
          </div>
        </span>

        <span className="field-log-data-date">
          <p>Date</p>
          <div>
            {!documentsData?.fieldDate ? '-' : documentsData?.fieldDate}
          </div>
        </span>
        <span className="field-log-data-note">
          <p>Note</p>
          <div>
            {!documentsData?.fieldNote ? '-' : documentsData?.fieldNote}
          </div>
        </span>
        <span className="field-log-data-logs">
          <p>Field Log</p>
          <div>
            {!documentsData?.fieldlogId ? '-' : documentsData?.fieldlogId}
          </div>
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
          <div>
            {!documentsData?.verifierUser ? '-' : documentsData?.verifierUser}
          </div>
        </span>

        <span className="field-log-data-field-operator">
          {' '}
          <p>Field Operator Id</p>
          <div>
            {!documentsData?.fieldOperatorId
              ? '-'
              : documentsData?.fieldOperatorId}
          </div>
        </span>

        <span className="field-log-data-task-notification">
          {' '}
          <p>Task Notification</p>
          <div>
            {!documentsData?.taskNotification
              ? '-'
              : documentsData?.taskNotification}
          </div>
        </span>
      </div>

      <div className="change-request-buttons-div">
        <span className="change-request-button-reject">{t('reject')}</span>
        <span className="change-request-button-accept">{t('accept')}</span>
      </div>
    </div>
  );
};

export default OtherDocuments;
