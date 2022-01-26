import PropTypes from 'prop-types';
import React from 'react';

import FieldUpdateCard from '../../../../views/ManagementOfFieldActivities/components/components/FieldUpdateCards/FieldUpdateCard';

const ManagementOfFieldActivity = ({ currentItems }) => {
  return (
    <div className="mgmt-table-body">
      {currentItems &&
        currentItems.map((data) => (
          <FieldUpdateCard key={data.taskId} activityData={data} />
        ))}
    </div>
  );
};

ManagementOfFieldActivity.propTypes = {
  currentItems: PropTypes.isRequired,
};

export default ManagementOfFieldActivity;
