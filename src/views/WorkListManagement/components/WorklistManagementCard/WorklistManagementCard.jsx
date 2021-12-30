import './WorklistManagementCard.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';
import { connect, useDispatch } from 'react-redux';

import { deleteTaskByID } from '../../../../redux/worklist-management-redux/worklist.actions';
import WorklistForm from '../WorklistForm/WorklistForm';

const WorkListManagementCard = ({
  projectName,
  taskName,
  taskDescription,
  isMilestone,
  workId,
  type,
  authToken,
}) => {
  const dispatch = useDispatch();

  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);
  const [isEditDrawerOpen, setIsEditDrawerOpen] = React.useState(false);

  const menuOpen = Boolean(menuAnchorEl);
  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handelMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handelCloseEditDrawer = () => {
    setIsEditDrawerOpen(false);
  };

  const handelOpenEditDrawer = () => {
    handelMenuClose();
    setIsEditDrawerOpen(true);
  };

  const hadelDeleteTask = () => {
    const data = {
      authToken,
      taskId: workId,
    };
    handelMenuClose();
    dispatch(deleteTaskByID(data));
  };

  const isMilestoneName = isMilestone === 0 ? 'No' : 'Yes';

  return (
    <>
      <Drawer
        anchor="right"
        onClose={() => handelCloseEditDrawer()}
        open={isEditDrawerOpen}
      >
        <WorklistForm
          handelClose={handelCloseEditDrawer}
          isEdit
          workId={workId}
        />
      </Drawer>
      <div className="worklist-card-table-body">
        <span className="worklist-card-management-check-input">
          <input type="checkbox" />
        </span>
        <span className="worklist-card-management-project-name">
          {projectName}
        </span>
        <span className="worklist-card-management-task-name">{taskName}</span>
        <span className="worklist-card-management-task-description">
          {taskDescription}
        </span>
        <span className="worklist-card-management-isMilestone">
          {isMilestoneName}
        </span>
        <span className="worklist-card-management-type">{type}</span>
        <span className="worklist-card-management-actions">
          <MoreHorizIcon
            className="worklist-management-card-more-icon"
            onClick={handleMenuClick}
          />
          <Menu
            anchorEl={menuAnchorEl}
            id="basic-menu"
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            onClose={handelMenuClose}
            open={menuOpen}
          >
            <MenuItem itmeId={workId} onClick={handelOpenEditDrawer}>
              Edit
            </MenuItem>
            <MenuItem itmeId={workId} onClick={hadelDeleteTask}>
              Delete
            </MenuItem>
          </Menu>
        </span>
      </div>
    </>
  );
};

WorkListManagementCard.propTypes = {
  projectName: PropTypes.isRequired,
  taskName: PropTypes.isRequired,
  taskDescription: PropTypes.isRequired,
  isMilestone: PropTypes.isRequired,
  workId: PropTypes.isRequired,
  type: PropTypes.isRequired,
  authToken: PropTypes.isRequired,
};

const mapStateToProps = (state) => ({
  authToken: state.user.userData.accessToken,
});

export default connect(mapStateToProps)(WorkListManagementCard);
