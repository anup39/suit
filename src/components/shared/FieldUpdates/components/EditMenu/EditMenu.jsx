import './EditMenu.scss';

import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import { Modal } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import WebExIcon from '../../../../../assets/webex-icon.png';
import ActivityReport from './components/ActivityReport/ActivityReport';
import ChangeRequest from './components/ChangeRequest/ChangeRequest';
import FieldLogs from './components/FieldLogs/FieldLogs';
import Milestone from './components/Milestone/Milestone';

const EditMenu = ({ handleCancel }) => {
  const [open, setOpen] = React.useState(false);
  const [option, setOption] = React.useState(0);
  const handleOpen = (e) => {
    setOption(e.target.id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setOption(0);
  };

  const renderComponent = (value) => {
    const components = [
      <FieldLogs key="helo" />,
      <ActivityReport key="Activity Report" />,
      <ChangeRequest key="Change Request" />,
      <Milestone key="Milestone" />,
    ];

    return components[value];
  };

  return (
    <>
      <Modal onClose={handleClose} open={open}>
        {renderComponent(option)}
      </Modal>
      <div className="edit-menu-base">
        <span>
          <p>Task</p>
          <div className="edit-div">Task 1</div>
        </span>
        <span>
          <p>Field Logs</p>
          <div className="edit-div " id={0} onClick={handleOpen}>
            File 1, File 2, + 2 More File(s)
          </div>
        </span>
        <span>
          <p>Activity Report</p>
          <div className="edit-div" id={1} onClick={handleOpen}>
            Activity Report 1
          </div>
        </span>
        <span>
          <p>Change Request</p>
          <div className="edit-div" id={2} onClick={handleOpen}>
            Task 1 Change
          </div>
        </span>

        <span index={4} onClick={handleOpen}>
          <p>Milestone</p>
          <div className="edit-div" id={3} onClick={handleOpen}>
            Milestone 1
          </div>
        </span>
        <span>
          <p>Status</p>
          <select className="change-status-div">
            <option>Completed</option>
            <option>Suspended</option>
            <option>Not Started</option>
          </select>
        </span>
        <span>
          <p>Control Activity</p>
          <div>
            <span className="field-updates-body-controlActivity">
              <AutorenewOutlinedIcon className="control-activity-icons" />
              <UploadFileOutlinedIcon className="control-activity-icons" />
              <CommentIcon className="control-activity-icons" />
              <img alt="Webex Icon" className="webex-icon" src={WebExIcon} />
            </span>
          </div>
        </span>
        <span className="decision-div">
          <span className="cancel-button" onClick={() => handleCancel()}>
            Cancel
          </span>
          <span className="update-button">Update</span>
        </span>
      </div>
    </>
  );
};

EditMenu.propTypes = {
  handleCancel: PropTypes.func.isRequired,
};

export default EditMenu;
