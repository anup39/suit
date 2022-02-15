import './EditMenu.scss';

import AddIcon from '@mui/icons-material/Add';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import { Drawer, Modal } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import WebExIcon from '../../../../../assets/webex-icon.png';
import ControlActivityDrawer from '../../../../../components/shared/ControlActivityDrawer/ControlActivityDrawer';
import WebexFiles from '../../../../../components/shared/Webex-components/webex-files/WebexFiles';
import WebexMessages from '../../../../../components/shared/Webex-components/webex-message/WebexMessages';
import ProjectStatus from '../../../../../constants/ProjectStatus';
import {
  getAllActivities,
  getAllfieldlogs,
} from '../../../../../redux/Management-of-field-activities/management-field-activities.action';
import { getUserAuthToken } from '../../../../../redux/user-redux/user.selectors';
import { changeTaskStatus } from '../../../../../redux/worklist-management-redux/worklist.actions';
import ActivityReport from './components/ActivityReport/ActivityReport';
import ChangeRequest from './components/ChangeRequest/ChangeRequest';
import FieldLogs from './components/FieldLogs/FieldLogs';
import Milestone from './components/Milestone/Milestone';

const EditMenu = ({ taskId, handleCancel, roomId, currentTaskStatus }) => {
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);
  const [option, setOption] = React.useState(0);
  const [taskStatus, setTaskStatus] = React.useState(currentTaskStatus);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isWebexMessageModalOpen, setIsWebexMessageModalOpen] =
    React.useState(false);
  const [isWebexFileModalOpen, setIsWebexFileModalOpen] = React.useState(false);

  const authToken = useSelector(getUserAuthToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpen = (e) => {
    setOption(e.target.id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setOption(0);
  };

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

  const handleTaskChange = (e) => {
    setTaskStatus(e.target.value);

    const dataToSend = {
      authToken,
      data: {
        taskIdValue: taskId,
        taskStatus,
      },
    };

    dispatch(changeTaskStatus(dataToSend));
  };

  const handleRefreshData = () => {
    const data = { authToken };
    dispatch(getAllActivities(data));
  };

  const handleWebEx = () => {
    navigate('/asuiteweb/pannel/webex');
  };

  const renderComponent = (value) => {
    const components = [
      <FieldLogs key="Field Logs" />,
      <ActivityReport key="Activity Report" handleCloseModal={handleClose} />,
      <ChangeRequest key="Change Request" handleCloseModal={handleClose} />,
      <Milestone key="Milestone" />,
    ];

    return components[value];
  };

  React.useEffect(() => {
    const data = { authToken, taskId };
    dispatch(getAllfieldlogs(data));
  }, []);

  return (
    <>
      <Drawer anchor="right" onClose={handleDrawerClose} open={isDrawerOpen}>
        <ControlActivityDrawer
          handleClose={handleDrawerClose}
          taskId={taskId}
        />
      </Drawer>

      <Modal onClose={handleClose} open={open}>
        {renderComponent(option)}
      </Modal>

      <Modal
        onClose={handleWebexMessageModalClose}
        open={isWebexMessageModalOpen}
      >
        <WebexMessages
          handleClose={handleWebexMessageModalClose}
          roomId={roomId}
        />
      </Modal>

      <Modal onClose={handleWebexFileModalClose} open={isWebexFileModalOpen}>
        <WebexFiles handleClose={handleWebexFileModalClose} roomId={roomId} />
      </Modal>

      <div className="edit-menu-base">
        <span>
          <p>{t('taskItem')}</p>
          <div className="edit-div">Task 1</div>
        </span>
        <span>
          <p>{t('fieldLogs')}</p>
          <div className="edit-div " id={0} onClick={handleOpen}>
            Notes/Image
          </div>
        </span>
        <span>
          <p>{t('activityreport')}</p>
          <div className="edit-div" id={1} onClick={handleOpen}>
            Activity Report
          </div>
        </span>
        <span>
          <p>{t('changerequest')}</p>
          <div className="edit-div" id={2} onClick={handleOpen}>
            Task Change
          </div>
        </span>

        {/* <span index={4} onClick={handleOpen}>
          <p>{t('milestone')}</p>
          <div className="edit-div" id={3} onClick={handleOpen}>
            Milestone 1
          </div>
        </span> */}
        <span>
          <p>{t('status')}</p>

          <select
            className="change-status-div"
            onChange={(e) => handleTaskChange(e)}
            value={taskStatus}
          >
            <option> {taskStatus} </option>
            {ProjectStatus[taskStatus].map((val) => (
              <option key={val}>{val}</option>
            ))}
          </select>
        </span>
        <span>
          <p>{t('controlActivity')}</p>
          <div>
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
          </div>
        </span>
        <span className="decision-div">
          <span className="cancel-button" onClick={() => handleCancel()}>
            {t('cancel')}
          </span>
          <span className="update-button" onClick={() => handleCancel()}>
            {t('update')}
          </span>
        </span>
      </div>
    </>
  );
};

EditMenu.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  taskId: PropTypes.isRequired,
  roomId: PropTypes.isRequired,
  currentTaskStatus: PropTypes.isRequired,
};

export default EditMenu;
