import PropTypes from 'prop-types';
import React from 'react';

import WorkListCards from '../../../../views/ProjectManagement/components/WorkList/components/WorkListCards/WorkListCards';

const WorklistCards = ({ currentItems }) => {
  return (
    <div className="worklist-table-body">
      {currentItems &&
        currentItems.map((values) => (
          <WorkListCards key={values.taskId} taskInfo={values} />
        ))}
    </div>
  );
};

WorklistCards.propTypes = {
  currentItems: PropTypes.isRequired,
};

export default WorklistCards;
