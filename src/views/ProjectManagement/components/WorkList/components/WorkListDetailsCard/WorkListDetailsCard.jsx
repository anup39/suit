import './WorkListDetailsCard.scss';

import PropTypes from 'prop-types';
import React from 'react';

const WorkListDetailsCard = ({ undo, taskInfo }) => {
  return (
    <div className="work-list-details-card-base">
      <div className="work-list-task-id">
        <p className="task-info-title">Task ID</p>
        <p>{taskInfo.taskId}</p>
      </div>
      <div className="work-list-task-name">
        <p className="task-info-title">Task Name</p>
        <p>{taskInfo.taskName}</p>
      </div>
      <div className="work-list-task-description">
        <p className="task-info-title">Task Description</p>
        <p>{taskInfo.taskDescription}</p>
      </div>
      <div className="work-list-task-isMilestone">
        <p className="task-info-title">Ismilestone</p>
        <p>{taskInfo.isMilestone === 0 ? 'Yes' : 'No'}</p>
      </div>
      <div className="work-list-task-type">
        <p className="task-info-title">Type</p>
        <p>{taskInfo.type}</p>
      </div>
      <div className="work-list-task-isMilestone-2">
        <p className="task-info-title">Ismilestone</p>
        <p>{taskInfo.isMilestone === 0 ? 'Yes' : 'No'}</p>
      </div>
      <div className="work-list-task-type-2">
        <p className="task-info-title">Type</p>
        <p>{taskInfo.type}</p>
      </div>
      <div className="work-list-task-priority">
        <p className="task-info-title">Priority</p>
        <p>{taskInfo.proprity}</p>
      </div>
      <div className="work-list-task-startDate">
        <p className="task-info-title">Start Date</p>
        <p>{taskInfo.start}</p>
      </div>
      <div className="work-list-task-endDate">
        <p className="task-info-title">End Date</p>
        <p>{taskInfo.end}</p>
      </div>
      <div className="work-list-task-street">
        <p className="task-info-title">Street</p>
        <p>{taskInfo.street}</p>
      </div>
      <div className="work-list-task-zipCode">
        <p className="task-info-title">Zip Code</p>
        <p>{taskInfo.zipCode}</p>
      </div>
      <div className="work-list-task-city">
        <p className="task-info-title">City</p>
        <p> {taskInfo.city} </p>
      </div>
      <div className="work-list-task-country">
        <p className="task-info-title">Country</p>
        <p> {taskInfo.country} </p>
      </div>
      <div className="work-list-task-latitude">
        <p className="task-info-title">Latitude</p>
        <p>{taskInfo.latitude} </p>
      </div>
      <div className="work-list-task-longitude">
        <p className="task-info-title">Longitude</p>
        <p> {taskInfo.longitude} </p>
      </div>
      <div className="work-list-task-geofence">
        <p className="task-info-title">Geofence</p>
        <p> {taskInfo.geoFence} </p>
      </div>
      <div className="work-list-task-note">
        <p className="task-info-title">Note</p>
        <p>{taskInfo.note}</p>
      </div>
      <div className="work-list-task-documents">
        <p className="task-info-title">Documents</p>
        <p>{taskInfo.documents}</p>
      </div>
      <div className="work-list-task-status">
        <p className="task-info-title">Status</p>
        <p>{taskInfo.taskStatus}</p>
      </div>
      <span className="work-list-task-button">
        <span className="work-list-task-cancel-button" onClick={() => undo()}>
          Cancel
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
