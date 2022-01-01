import './ProjectCard.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';

const ProjectCard = ({ handelView }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handelProjectDataView = () => {
    handleClose();
    handelView();
  };

  return (
    <div className="project-card-base-div table">
      <span className="project-card-check-input">
        <input type="checkbox" />
      </span>

      <span className="project-card-project-name">
        <p>Project Name</p>
      </span>

      <span className="project-card-client">
        <p>Client</p>
      </span>

      <span className="project-card-description">
        <p>Description</p>
      </span>

      <span className="project-card-start-date">
        <p>Start Date</p>
      </span>

      <span className="project-card-end-date">
        <p>Completion Date</p>
      </span>

      <span className="project-card-last-update">
        <p>Last Update</p>
      </span>

      <span className="project-card-user-last-update">
        <p>User Last Update</p>
      </span>

      <span className="project-card-user-actions">
        <MoreHorizIcon className="project-menu-icon" onClick={handleClick} />
        <Menu
          anchorEl={anchorEl}
          id="basic-menu"
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          onClose={handleClose}
          open={open}
        >
          <MenuItem onClick={handelProjectDataView}>View </MenuItem>
          <MenuItem onClick={handleClose}>Edit </MenuItem>
          <MenuItem onClick={handleClose}>Delete</MenuItem>
        </Menu>
      </span>
    </div>
  );
};
ProjectCard.propTypes = {
  handelView: PropTypes.func.isRequired,
};
export default ProjectCard;
