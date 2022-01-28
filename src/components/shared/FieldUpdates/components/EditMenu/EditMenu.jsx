import './EditMenu.scss';

import AddIcon from '@mui/icons-material/Add';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import { Drawer, Modal } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import WebExIcon from '../../../../../assets/webex-icon.png';
import { getAllfieldlogs } from '../../../../../redux/Management-of-field-activities/management-field-activities.action'
import { getfieldlogs } from '../../../../../redux/Management-of-field-activities/management-field-activities.selectors'
import ControlActivityDrawer from '../../../ControlActivityDrawer/ControlActivityDrawer';
import ActivityReport from './components/ActivityReport/ActivityReport';
import ChangeRequest from './components/ChangeRequest/ChangeRequest';
import FieldLogs from './components/FieldLogs/FieldLogs';
import Milestone from './components/Milestone/Milestone';

const EditMenu = ({ activityData, handleCancel }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [option, setOption] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const fieldlogs = useSelector(getfieldlogs);

  const handleOpen = (e) => {
    setOption(e.target.id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setOption(0);
  };

  useEffect(() => {
    dispatch(getAllfieldlogs(activityData.taskId));
    
  }, []);

  const renderComponent = (value) => {
    const components = [
      <FieldLogs key="Notes/Images"  />,
      <ActivityReport key="Activity Report" />,
      <ChangeRequest key="Change Request" />,
      <Milestone key="Milestone" />,
    ];

    return components[value];
  };

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <>
      <Drawer anchor="right" onClose={handleDrawerClose} open={isDrawerOpen}>
        <ControlActivityDrawer />
      </Drawer>

      <Modal onClose={handleClose} open={open}>
        {renderComponent(option)}
      </Modal>
      <div className="edit-menu-base">
        <span>
          <p>{t('taskItem')}</p>
          <div className="edit-div">{activityData.taskName}</div>
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
            Change Request
          </div>
        </span>

        {/* <span index={4} onClick={handleOpen}>
          <p>{t('milestoneapproval')}</p>
          <div className="edit-div" id={3} onClick={handleOpen}>
            Milestone 1
          </div>
        </span> */}
        <span>
          <p>{t('status')}</p>
          <select className="change-status-div">
            <option>{t('completed')}</option>
            <option>{t('suspended')}</option>
            <option>{t('notStarted')}</option>
          </select>
        </span>
        <span>
          <p>{t('controlActivity')}</p>
          <div>
            <span className="field-updates-body-controlActivity">
              <AutorenewOutlinedIcon className="control-activity-icons" />
              <UploadFileOutlinedIcon className="control-activity-icons" />
              <CommentIcon className="control-activity-icons" />
              <img alt="Webex Icon" className="webex-icon" src={WebExIcon} />
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
          <span className="update-button">{t('update')}</span>
        </span>
      </div>
    </>
  );
};

EditMenu.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  activityData: PropTypes.func.isRequired,
};

export default EditMenu;
