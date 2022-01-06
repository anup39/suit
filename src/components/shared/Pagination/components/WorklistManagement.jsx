import PropTypes from 'prop-types';
import React from 'react';

import WorklistManagementCard from '../../../../views/WorkListManagement/components/WorklistManagementCard/WorklistManagementCard';

const WorklistManagement = ({ currentItems }) => {
  return (
    <div>
      {currentItems &&
        currentItems.map((values) => (
          <WorklistManagementCard
            key={values.taskId}
            isMilestone={values.isMilestone}
            projectName={values.projectsId}
            taskDescription={values.taskDescription}
            taskName={values.taskName}
            type={values.type}
            workId={values.taskId}
          />
        ))}
    </div>
  );
};

WorklistManagement.propTypes = {
  currentItems: PropTypes.isRequired,
};

export default WorklistManagement;
