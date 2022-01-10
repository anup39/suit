import PropTypes from 'prop-types';
import React from 'react';

import AssignActivityCard from '../../../../views/AssignWorkActivities/components/AssignActivityCard/AssignActivityCard';

const AssignWorkActivity = ({ currentItems }) => {
  return (
    <div className="assign-work-activity-table-body">
      {currentItems &&
        currentItems.map((data) => (
          <AssignActivityCard
            key={data.taskId}
            companyName={data.companiesId}
            isMilestone={data.isMilestone}
            projectName={data.projectsId}
            status={data.taskStatus}
            taskDescription={data.taskDescription}
            taskId={data.taskId}
            taskName={data.taskName}
            type={data.type}
          />
        ))}
    </div>
  );
};

AssignWorkActivity.propTypes = {
  currentItems: PropTypes.isRequired,
};

export default AssignWorkActivity;
