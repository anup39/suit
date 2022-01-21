import './WorklistManagementCard.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllProjects } from '../../../../redux/project-management-redux/project.selector';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';
import {
  deleteTaskByID,
  deselectOneWorkList,
  selectOneWorkList,
} from '../../../../redux/worklist-management-redux/worklist.actions';
import {
  getIfAllWorkListSelected,
  getSelectedWorkList,
} from '../../../../redux/worklist-management-redux/worklist.selector';
import ChangeTaskStatus from '../ChnageTaskStatus/ChangeTaskStatus';
import WorklistForm from '../WorklistForm/WorklistForm';

const WorkListManagementCard = ({
  projectName,
  taskName,
  taskDescription,
  isMilestone,
  workId,
  type,
  allData,
  taskStatus,
}) => {
  const dispatch = useDispatch();

  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);
  const [isEditDrawerOpen, setIsEditDrawerOpen] = React.useState(false);
  const [checkBox, setCheckBox] = React.useState(false);
  const [actualProjectName, setActualProjectName] = React.useState('');
  const [isEditStatusDrawerOpen, setIsEditStatusDrawerOpen] =
    React.useState(false);

  const authToken = useSelector(getUserAuthToken);
  const selectedWorkList = useSelector(getSelectedWorkList);
  const isAllSelected = useSelector(getIfAllWorkListSelected);
  const projectList = useSelector(getAllProjects);

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
    dispatch(deleteTaskByID(data));

    handelMenuClose();
  };

  const handelCheckbox = (e) => {
    setCheckBox(e.target.checked);

    if (e.target.checked) {
      dispatch(selectOneWorkList(allData));
    } else {
      dispatch(deselectOneWorkList(workId));
    }
  };

  const handleEditStatusDrawerClose = () => {
    setIsEditStatusDrawerOpen(false);
  };

  const handleEditStatusDrawerOpen = () => {
    handelMenuClose();
    setIsEditStatusDrawerOpen(true);
  };

  const isMilestoneName = isMilestone !== 0 ? 'No' : 'Yes';

  React.useEffect(() => {
    if (projectList.length !== 0) {
      // eslint-disable-next-line
      projectList.map((val) => {
        if (val.id === projectName) {
          setActualProjectName(val.name);
        }
      });
    }

    let alreadyInList = false;

    // eslint-disable-next-line
    selectedWorkList.map((work) => {
      if (work?.taskId === workId) {
        setCheckBox(true);
        alreadyInList = true;
      }
    });

    if (isAllSelected) {
      if (!alreadyInList) {
        setCheckBox(true);
        dispatch(selectOneWorkList(allData));
      }
    } else if (checkBox) {
      setCheckBox(false);
      dispatch(deselectOneWorkList(workId));
    }
  }, [isAllSelected, projectList]);

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

      <Drawer
        anchor="right"
        onClose={() => handleEditStatusDrawerClose()}
        open={isEditStatusDrawerOpen}
      >
        <ChangeTaskStatus
          handleClose={handleEditStatusDrawerClose}
          taskId={workId}
          taskName={taskName}
          taskStatus={taskStatus}
        />
      </Drawer>

      <div className="worklist-card-table-body">
        <span className="worklist-card-management-check-input">
          <input checked={checkBox} onChange={handelCheckbox} type="checkbox" />
        </span>
        <span className="worklist-card-management-project-name">
          {actualProjectName}
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
            <MenuItem itmeId={workId} onClick={handleEditStatusDrawerOpen}>
              Change Task Status
            </MenuItem>
            <MenuItem itmeId={workId} onClick={() => hadelDeleteTask()}>
              Delete
            </MenuItem>
          </Menu>
        </span>
      </div>
    </>
  );
};

/* eslint-disable */
WorkListManagementCard.propTypes = {
  projectName: PropTypes.number,
  taskName: PropTypes.string,
  taskDescription: PropTypes.string,
  isMilestone: PropTypes.number,
  workId: PropTypes.string,
  type: PropTypes.string,
  allData: PropTypes.object,
  taskStatus: PropTypes.string,
};

export default WorkListManagementCard;
