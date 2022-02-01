/* eslint-disable */
import './FieldUpdateCard.scss';

import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
// import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import WebExIcon from '../../../../../assets/webex-icon.png';
import AreYouSure from '../../../../../components/shared/AreYouSure/AreYouSure';
import { getAllActivities } from '../../../../../redux/Management-of-field-activities/management-field-activities.action';
import { getUserAuthToken } from '../../../../../redux/user-redux/user.selectors';
import {
  changeTaskStatus,
  deleteTaskByID,
  resetDeleteTask,
} from '../../../../../redux/worklist-management-redux/worklist.actions';
import {
  getDeleteWorkListSuccess,
  getIsDeleteWorkListLoading,
} from '../../../../../redux/worklist-management-redux/worklist.selector';
import EditMenu from '../EditMenu/EditMenu';

const FieldUpdateCard = ({ activityData }) => {
  const { t } = useTranslation();

  const [editMenu, setEditMenu] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [taskStatus, setTaskStatus] = React.useState(activityData.taskStatus);
  const authToken = useSelector(getUserAuthToken);
  const isDeleteTaskLoading = useSelector(getIsDeleteWorkListLoading);
  const deleteTaskSuccess = useSelector(getDeleteWorkListSuccess);
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);

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

  const handleDeleteTask = () => {
    handleDeleteModalClose();
    const data = {
      authToken,
      taskId: activityData?.taskId,
    };

    dispatch(deleteTaskByID(data));
  };

  React.useEffect(() => {
    if (deleteTaskSuccess) {
      const data = {
        authToken,
      };
      dispatch(getAllActivities(data));
      dispatch(resetDeleteTask());
    }
  }, [isDeleteTaskLoading]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <Modal onClose={handleDeleteModalClose} open={deleteModal}>
        <AreYouSure
          handleClose={handleDeleteModalClose}
          handleDelete={handleDeleteTask}
          headline="Are you sure to Delete the Task?"
        />
      </Modal>

      {!editMenu ? (
        <div className="mgmt-field-update-card-base">
          {/* <span className="field-updates-body-checkInput">
              <input type="checkbox" />
            </span> */}
          <span className="field-updates-body-taskItem">
            {activityData.taskName}
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
              <option value="Not assigned">{t('notassigned')}</option>
              <option value="Not started">{t('notStarted')}</option>
              <option value="In progress/started">
                {t('inprogressstarted')}
              </option>
              <option value="Waiting for feedback">
                {t('waitingforfeedback')}
              </option>
              <option value="Approved">{t('approved')}</option>
              <option value="Canceled">{t('canceled')}</option>
              <option value="Completed">{t('completed')}</option>
              <option value="Suspended">{t('suspended')}</option>
            </select>
          </span>
          <span className="field-updates-body-controlActivity">
            <AutorenewOutlinedIcon className="control-activity-icons" />
            <UploadFileOutlinedIcon className="control-activity-icons" />
            <CommentIcon className="control-activity-icons" />
            <img alt="Webex Icon" className="webex-icon" src={WebExIcon} />
          </span>
          <span className="field-updates-body-actiosn">
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
              <MenuItem onClick={handelViewOrEdit}>{t('viewEdit')}</MenuItem>
              <MenuItem onClick={handleDeleteModalOpen}>{t('delete')}</MenuItem>
            </Menu>
          </span>
        </div>
      ) : (
        <EditMenu
          handleCancel={handleCancel}
          roomId={activityData?.roomId}
          taskId={activityData?.taskId}
        />
      )}
    </>
  );
};

/* eslint-disable */
FieldUpdateCard.propTypes = {
  activityData: PropTypes.object.isRequired,
};

export default FieldUpdateCard;
