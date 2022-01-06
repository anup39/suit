import PropTypes from 'prop-types';
import React from 'react';

import MilestoneApprovalCard from '../../../../views/MilestoneApproval/components/MilestoneApprovalCards/MilestoneApprovalCard';

const ProjectManagement = ({ currentItems }) => {
  return (
    <div>
      {currentItems &&
        currentItems.map((val) => (
          <MilestoneApprovalCard
            key={val.projectDocumentsId}
            company={val.companyName}
            date={val.milestoneDate}
            desc="-"
            milestone={val.milestoneNumber}
            milestoneId={val.milestoneNumber}
            projectDocumentsId={val.projectDocumentsId}
            projectName={val.projectName}
            status="-"
          />
        ))}
    </div>
  );
};

ProjectManagement.propTypes = {
  currentItems: PropTypes.isRequired,
};

export default ProjectManagement;
