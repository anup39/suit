import './FieldUpdateCard.scss';

import AddIcon from '@mui/icons-material/Add';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
// import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import { Drawer, Modal } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropType from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import WebExIcon from '../../../../../assets/webex-icon.png';
import ProjectStatus from '../../../../../constants/ProjectStatus';
import { getProjectData } from '../../../../../redux/project-management-redux/project.selector';
import {
  getCurrentUserRole,
  getUserAuthToken,
} from '../../../../../redux/user-redux/user.selectors';
import {
  changeTaskStatus,
  deleteTaskByID,
  taskByProject,
} from '../../../../../redux/worklist-management-redux/worklist.actions';
import AreYouSure from '../../../AreYouSure/AreYouSure';
import ControlActivityDrawer from '../../../ControlActivityDrawer/ControlActivityDrawer';
import WebexFiles from '../../../Webex-components/webex-files/WebexFiles';
import WebexMessages from '../../../Webex-components/webex-message/WebexMessages';
// import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import EditMenu from '../EditMenu/EditMenu';

const FieldUpdateCard = ({ activityData }) => {
  const [editMenu, setEditMenu] = React.useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [taskStatus, setTaskStatus] = React.useState(activityData.taskStatus);
  const currentUserRole = useSelector(getCurrentUserRole);

  const [isWebexMessageModalOpen, setIsWebexMessageModalOpen] =
    React.useState(false);
  const [isWebexFileModalOpen, setIsWebexFileModalOpen] = React.useState(false);
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const authToken = useSelector(getUserAuthToken);
  const projectDetails = useSelector(getProjectData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handelViewOrEdit = () => {
    handleClose();
    setEditMenu(true);
  };

  const handleCancel = () => {
    setEditMenu(false);
  };

  const handleTaskChange = (e) => {
    setTaskStatus(e.target.value);

    const dataToSend = {
      authToken,
      data: {
        taskIdValue: activityData?.taskId,
        taskStatus,
      },
    };

    dispatch(changeTaskStatus(dataToSend));
  };

  const handleDeleteModalOpen = () => {
    setDeleteModal(true);
    handleClose();
  };
  const handleDeleteModalClose = () => setDeleteModal(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleWebexMessageOpen = () => {
    setIsWebexMessageModalOpen(true);
  };

  const handleWebexMessageModalClose = () => {
    setIsWebexMessageModalOpen(false);
  };

  const handleWebexFileModalOpen = () => {
    setIsWebexFileModalOpen(true);
  };

  const handleWebexFileModalClose = () => {
    setIsWebexFileModalOpen(false);
  };

  const handleDeleteTask = () => {
    handleDeleteModalClose();
    const data = {
      authToken,
      taskId: activityData?.taskId,
    };

    dispatch(deleteTaskByID(data));
  };

  const handleRefreshData = () => {
    const data = { authToken, projectId: projectDetails.id };
    dispatch(taskByProject(data));
  };

  const handleWebEx = () => {
    navigate('/asuiteweb/pannel/webex');
  };

  return (
    <>
      <Drawer anchor="right" onClose={handleDrawerClose} open={isDrawerOpen}>
        <ControlActivityDrawer
          handleClose={handleDrawerClose}
          taskId={activityData?.taskId}
        />
      </Drawer>
      <Modal onClose={handleDeleteModalClose} open={deleteModal}>
        <AreYouSure
          handleClose={handleDeleteModalClose}
          handleDelete={handleDeleteTask}
          headline="Are you sure to Delete the Task?"
        />
      </Modal>

      <Modal
        onClose={handleWebexMessageModalClose}
        open={isWebexMessageModalOpen}
      >
        <WebexMessages
          handleClose={handleWebexMessageModalClose}
          roomId={activityData?.roomId}
        />
      </Modal>

      <Modal onClose={handleWebexFileModalClose} open={isWebexFileModalOpen}>
        <WebexFiles
          handleClose={handleWebexFileModalClose}
          roomId={activityData?.roomId}
        />
      </Modal>
      {!editMenu ? (
        <div className="field-update-card-base">
          <span className="field-updates-body-checkInput">
            <input type="checkbox" />
          </span>
          <span className="field-updates-body-taskItem">
            {' '}
            {activityData.taskName}{' '}
          </span>
          <span className="field-updates-body-milestoneApproval">
            {/* <CheckCircleOutlinedIcon className="milestone-accepted-icon" /> */}
            {/* <CancelOutlinedIcon className="milestone-rejected-icon" /> */}
            {activityData.isMilestone === 0 ? 'Milestone' : '-'}
          </span>
          <span className="field-updates-body-status">
            <select
              className="field-update-status-select"
              onChange={(e) => handleTaskChange(e)}
              value={taskStatus}
            >
              <option> {activityData.taskStatus} </option>
              {ProjectStatus[activityData.taskStatus].map((val) => (
                <option key={val}>{val}</option>
              ))}
            </select>
          </span>
          {currentUserRole === 'planA_admin' ||
          currentUserRole === 'planA_Engg' ? (
            <span className="field-updates-body-controlActivity">
              <AutorenewOutlinedIcon
                className="control-activity-icons"
                onClick={handleRefreshData}
              />
              <UploadFileOutlinedIcon
                className="control-activity-icons"
                onClick={handleWebexFileModalOpen}
              />
              <CommentIcon
                className="control-activity-icons"
                onClick={handleWebexMessageOpen}
              />
              <img
                alt="Webex Icon"
                className="webex-icon"
                onClick={handleWebEx}
                src={WebExIcon}
              />
              <AddIcon
                className="control-activity-icons"
                onClick={handleDrawerOpen}
              />
            </span>
          ) : null}
          <span className="field-updates-body-actions">
            <MoreHorizRoundedIcon
              className="filed-update-menu-icon"
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
              <MenuItem onClick={handelViewOrEdit}>{t('view')}</MenuItem>
              <MenuItem onClick={handleDeleteModalOpen}>{t('delete')}</MenuItem>
            </Menu>
          </span>
        </div>
      ) : (
        <EditMenu activityData={activityData} handleCancel={handleCancel} />
      )}
    </>
  );
};

FieldUpdateCard.propTypes = {
  activityData: PropType.isRequired,
};

export default FieldUpdateCard;
