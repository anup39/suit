import './AssignActivityCard.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getIsSelectAll,
  getSelectedTaskList,
} from '../../../../redux/assign-worklist/assign-work-list.selector';
import {
  deselectOneTask,
  selectOneTask,
} from '../../../../redux/assign-worklist/assign-worklist.action';

const AssignActivityCard = ({
  projectName,
  companyName,
  taskId,
  taskName,
  taskDescription,
  isMilestone,
  type,
  status,
}) => {
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);
  const [checkBox, setCheckBox] = React.useState(false);
  const isAllSelected = useSelector(getIsSelectAll);
  const selectedTaskList = useSelector(getSelectedTaskList);
  const dispatch = useDispatch();

  const open = Boolean(menuAnchorEl);

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handelCheckbox = (e) => {
    setCheckBox(e.target.checked);

    if (e.target.checked) {
      dispatch(selectOneTask(taskId));
    } else {
      dispatch(deselectOneTask(taskId));
    }
  };

  React.useEffect(() => {
    let alreadyInList = false;
    // eslint-disable-next-line
    selectedTaskList.map((task) => {
      if (task === taskId) {
        setCheckBox(true);
        alreadyInList = true;
      }
    });
    if (isAllSelected) {
      if (!alreadyInList) {
        setCheckBox(true);
        dispatch(selectOneTask(taskId));
      }
    } else if (checkBox) {
      setCheckBox(false);
      // dispatch(deselectOneTask(taskId));
    }
  }, [isAllSelected]);

  return (
    <div className="assign-work-activity-table-data">
      <span className="assign-work-activities-card-check-input">
        <input checked={checkBox} onChange={handelCheckbox} type="checkbox" />
      </span>
      <span className="assign-work-activities-card-project-name">
        {projectName}
      </span>

      <span className="assign-work-activities-card-company">{companyName}</span>
      <span className="assign-work-activities-card-taskId">{taskId}</span>
      <span className="assign-work-activities-card-task-name">{taskName}</span>
      <span className="assign-work-activities-card-task-description">
        {taskDescription}
      </span>
      <span className="assign-work-activities-card-isMilestone">
        {isMilestone !== 0 ? 'Yes' : 'No'}
      </span>
      <span className="assign-work-activities-card-type">{type} </span>
      <span className="assign-work-activities-card-status">{status}</span>
      <span className="assign-work-activities-card-actions">
        <MoreHorizIcon
          className="assign-work-activities-card-menu-icon"
          onClick={handleMenuClick}
        />
        <Menu
          anchorEl={menuAnchorEl}
          id="basic-menu"
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          onClose={handleMenuClose}
          open={open}
        >
          <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
          <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
        </Menu>
      </span>
    </div>
  );
};

AssignActivityCard.propTypes = {
  projectName: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  taskId: PropTypes.number.isRequired,
  taskName: PropTypes.string.isRequired,
  taskDescription: PropTypes.string.isRequired,
  isMilestone: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
export default AssignActivityCard;

// TODO: Confirm Is Milestone.
