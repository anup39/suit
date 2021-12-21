import './FieldUpdateCard.scss';

import React from 'react';

import EditMenu from '../EditMenu/EditMenu';

const FieldUpdateCard = () => {
  return (
    <>
      <div className="field-update-card-base">
        <span>
          <input type="checkbox" />
        </span>
        <span>Task Item</span>
        <span>Field Logs</span>
        <span>Activity report</span>
        <span>Change request</span>
        <span>Milestone approval</span>
        <span>Status</span>
        <span>Control Activity</span>
        <span>Actions</span>
      </div>
      <EditMenu />
    </>
  );
};

export default FieldUpdateCard;
