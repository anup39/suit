import './WorkListDetailsCard.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

const WorkListDetailsCard = ({ undo, taskInfo }) => {
  const { t } = useTranslation();

  return (
    <div className="work-list-details-card-base">
      <div className="work-list-task-id">
        <p className="task-info-title">{t('taskId')}</p>

        <p>{taskInfo.taskId}</p>
      </div>
      <div className="work-list-task-name">
        <p className="task-info-title">{t('taskName')}</p>
        <p>{taskInfo.taskName}</p>
      </div>
      <div className="work-list-task-description">
        <p className="task-info-title">{t('taskDescription')}</p>
        <p>{taskInfo.taskDescription}</p>
      </div>
      <div className="work-list-task-isMilestone">
        <p className="task-info-title">{t('isMilestone')}</p>
        <p>{taskInfo.isMilestone === 0 ? 'Yes' : 'No'}</p>
      </div>
      <div className="work-list-task-type">
        <p className="task-info-title">{t('type')}</p>
        <p>{taskInfo.type}</p>
      </div>
      {/* <div className="work-list-task-isMilestone-2">
        <p className="task-info-title">{t('isMilestone')}</p>
        <p>{taskInfo.isMilestone === 0 ? 'Yes' : 'No'}</p>
      </div>
      <div className="work-list-task-type-2">
        <p className="task-info-title">Type</p>
        <p>{taskInfo.type}</p>
      </div> */}
      <div className="work-list-task-priority">
        <p className="task-info-title">{t('priority')}</p>
        <p>{taskInfo.proprity}</p>
      </div>
      <div className="work-list-task-startDate">
        <p className="task-info-title">{t('startDate')}</p>
        <p>{taskInfo.start}</p>
      </div>
      <div className="work-list-task-endDate">
        <p className="task-info-title">{t('endDate')}</p>
        <p>{taskInfo.end}</p>
      </div>
      <div className="work-list-task-street">
        <p className="task-info-title">{t('street')}</p>
        <p>{taskInfo.street}</p>
      </div>
      <div className="work-list-task-zipCode">
        <p className="task-info-title">{t('zipCode')}</p>
        <p>{taskInfo.zipCode}</p>
      </div>
      <div className="work-list-task-city">
        <p className="task-info-title">{t('city')}</p>
        <p> {taskInfo.city} </p>
      </div>
      <div className="work-list-task-country">
        <p className="task-info-title">{t('country')}</p>
        <p> {taskInfo.country} </p>
      </div>
      <div className="work-list-task-latitude">
        <p className="task-info-title">{t('latitude')}</p>
        <p>{taskInfo.latitude} </p>
      </div>
      <div className="work-list-task-longitude">
        <p className="task-info-title">{t('longitude')}</p>
        <p> {taskInfo.longitude} </p>
      </div>
      <div className="work-list-task-geofence">
        <p className="task-info-title">{t('geofence')}</p>
        <p> {taskInfo.geoFence} </p>
      </div>
      <div className="work-list-task-note">
        <p className="task-info-title">{t('note')}</p>
        <p>{taskInfo.note}</p>
      </div>
      <div className="work-list-task-documents">
        <p className="task-info-title">{t('documents')}</p>
        <p>{taskInfo.documents}</p>
      </div>
      <div className="work-list-task-status">
        <p className="task-info-title">{t('status')}</p>
        <p>{taskInfo.taskStatus}</p>
      </div>
      <span className="work-list-task-button">
        <span className="work-list-task-cancel-button" onClick={() => undo()}>
          {t('cancel')}
        </span>
      </span>
    </div>
  );
};

WorkListDetailsCard.propTypes = {
  undo: PropTypes.func.isRequired,
  taskInfo: PropTypes.isRequired,
};

export default WorkListDetailsCard;
