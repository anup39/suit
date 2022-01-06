import PropTypes from 'prop-types';
import React from 'react';

import ProjectCard from '../../../../views/ProjectManagement/components/ProjectCard/ProjectCard';

const ProjectManagement = ({ currentItems, handelShowProjectPannel }) => {
  return (
    <div>
      {currentItems &&
        currentItems.map((data) => (
          <ProjectCard
            key={data.id}
            client={data.clientName}
            compDate={data.completionDate}
            desc={data.description}
            handelView={handelShowProjectPannel}
            lastUpdate={`${data.lastUpdate[2]}/${data.lastUpdate[1]}/${data.lastUpdate[0]}`}
            projectId={data.id}
            projetName={data.name}
            startDate={data.startDate}
            userLastUpdate={data.userLastUpdate}
          />
        ))}
    </div>
  );
};

ProjectManagement.propTypes = {
  currentItems: PropTypes.isRequired,
  handelShowProjectPannel: PropTypes.func.isRequired,
};

export default ProjectManagement;
