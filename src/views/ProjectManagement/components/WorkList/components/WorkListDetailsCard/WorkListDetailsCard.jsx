import './WorkListDetailsCard.scss';

import PropTypes from 'prop-types';
import React from 'react';

const WorkListDetailsCard = ({ undo }) => {
  return (
    <div className="work-list-details-card-base">
      <div className="work-list-task-id">Task ID</div>
      <div className="work-list-task-name">Task Name</div>
      <div className="work-list-task-description">Task Description</div>
      <div className="work-list-task-isMilestone">Ismilestone</div>
      <div className="work-list-task-type">Type</div>
      <div className="work-list-task-isMilestone-2">IsMilestone</div>
      <div className="work-list-task-type-2">Type</div>
      <div className="work-list-task-priority">Priority</div>
      <div className="work-list-task-startDate">Start Date</div>
      <div className="work-list-task-endDate">End Date</div>
      <div className="work-list-task-street">Street</div>
      <div className="work-list-task-zipCode">Zip Code</div>
      <div className="work-list-task-city">City </div>
      <div className="work-list-task-country">Country</div>
      <div className="work-list-task-latitude">Latitude</div>
      <div className="work-list-task-longitude">Longitude</div>
      <div className="work-list-task-geofence">Geofence</div>
      <div className="work-list-task-note">Note</div>
      <div className="work-list-task-documents">Documents</div>
      <div className="work-list-task-status">Status</div>
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
};

export default WorkListDetailsCard;
