import './ManagementOfFieldActivities.scss';

import React from 'react';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import FieldUpdates from '../../components/shared/FieldUpdates/FieldUpdates';

const ManagementOfFieldActivities = () => {
  return (
    <BaseTemplate title="Management Of Field Activities">
      <div className="assignment-of-field-activities">
        <FieldUpdates />
      </div>
    </BaseTemplate>
  );
};

export default ManagementOfFieldActivities;
