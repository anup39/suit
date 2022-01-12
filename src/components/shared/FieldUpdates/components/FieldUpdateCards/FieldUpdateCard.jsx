import './FieldUpdateCard.scss';

import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

import WebExIcon from '../../../../../assets/webex-icon.png';
// import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import EditMenu from '../EditMenu/EditMenu';

const FieldUpdateCard = () => {
  const [editMenu, setEditMenu] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
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

  return (
    <div>
      {!editMenu ? (
        <div>
          <div className="field-update-card-base">
            <span className="field-updates-body-checkInput">
              <input type="checkbox" />
            </span>
            <span className="field-updates-body-taskItem">Task Item 1 </span>
            <span className="field-updates-body-fieldLogs">
              File 1, File 2, +6 more
            </span>
            <span className="field-updates-body-activityReport">
              Activity report 1
            </span>
            <span className="field-updates-body-changeRequest">
              Task 1 Change
            </span>
            <span className="field-updates-body-milestoneApproval">
              <CheckCircleOutlinedIcon className="milestone-accepted-icon" />
              {/* <CancelOutlinedIcon className="milestone-rejected-icon" /> */}
              Milestone approval 1
            </span>
            <span className="field-updates-body-status">
              <select className="field-update-status-select">
                <option>Completed</option>
                <option>Suspended</option>
                <option>Not Started</option>
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
                <MenuItem onClick={handelViewOrEdit}>View/Edit</MenuItem>
                <MenuItem onClick={handleClose}>Delete</MenuItem>
              </Menu>
            </span>
          </div>
        </div>
      ) : (
        <EditMenu handleCancel={handleCancel} />
      )}
    </div>
  );
};

export default FieldUpdateCard;
