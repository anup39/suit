import './WorkListCards.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getUserAuthToken } from '../../../../../../redux/user-redux/user.selectors';
import { deleteTaskByID } from '../../../../../../redux/worklist-management-redux/worklist.actions';
import WorkListDetailsCard from '../WorkListDetailsCard/WorkListDetailsCard';

const WorkListCards = ({ taskInfo }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [view, setView] = React.useState(false);
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const authToken = useSelector(getUserAuthToken);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleView = () => {
    setView(true);
    handleClose();
  };

  const handelUndoView = () => {
    setView(false);
  };

  const handleDelete = () => {
    handleClose();

    const data = {
      authToken,
      taskId: taskInfo.taskId,
    };

    dispatch(deleteTaskByID(data));
  };
  return (
    <div>
      {!view ? (
        <div className="work-list-table-body">
          <span className="work-list-card-check-input">
            {/* <input type="checkbox" /> */}
          </span>

          <span className="work-list-card-task-id">{taskInfo.taskId}</span>

          <span className="work-list-card-task-name">{taskInfo.taskName}</span>

          <span className="work-list-card-task-description">
            {taskInfo.taskDescription}
          </span>

          <span className="work-list-card-task-milestone">
            {taskInfo.isMilestone === 0 ? 'Yes' : 'No'}
          </span>

          <span className="work-list-card-task-type">{taskInfo.type}</span>

          <span className="work-list-card-task-status">{taskInfo.status}</span>

          <span className="work-list-card-task-actions">
            <MoreHorizIcon
              className="work-list-menu-icon"
              onClick={handleClick}
            />
            <Menu
              anchorEl={anchorEl}
              id="basic-menu"
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              onClose={handleClose}
              open={open}
            >
              <MenuItem onClick={handleView}>{t('view')}</MenuItem>
              <MenuItem onClick={handleDelete}>{t('delete')}</MenuItem>
            </Menu>
          </span>
        </div>
      ) : (
        <WorkListDetailsCard taskInfo={taskInfo} undo={handelUndoView} />
      )}
    </div>
  );
};

WorkListCards.propTypes = {
  taskInfo: PropTypes.isRequired,
};

export default WorkListCards;
