/* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';

import FieldUpdateCard from '../../../../components/shared/FieldUpdates/components/FieldUpdateCards/FieldUpdateCard';

const FieldUpdates = ({ currentItems }) => {
  return (
    <div className="field-updates-table-body">
      {currentItems &&
        currentItems.map((data) => (
          <FieldUpdateCard key={data.taskId} activityData={data} />
        ))}
    </div>
  );
};

FieldUpdates.propTypes = {
  currentItems: PropTypes.isRequired,
};

export default FieldUpdates;
