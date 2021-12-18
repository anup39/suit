import './ProjectCard.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react';

const ProjectCard = () => {
  return (
    <div className="project-card-base-div table">
      <span>
        <input type="checkbox" />
      </span>

      <span>
        <p>Project Name</p>
      </span>

      <span>
        <p>Client</p>
      </span>

      <span>
        <p>Description</p>
      </span>

      <span>
        <p>Start Date</p>
      </span>

      <span>
        <p>Completion Date</p>
      </span>

      <span>
        <p>Last Update</p>
      </span>

      <span>
        <p>User Last Update</p>
      </span>

      <div>
        <MoreHorizIcon />
      </div>
    </div>
  );
};

export default ProjectCard;
