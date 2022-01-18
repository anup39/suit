import './User.Roles.cards.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import companyNameList from '../../../constants/CompanyNames';
import UserStatus from '../../../constants/UserStatus';
import { getUserAuthToken } from '../../../redux/user-redux/user.selectors';
import {
  deleteUser,
  deSelectUser,
  selectUser,
} from '../../../redux/User-Role/role.actions';
import {
  getIfAllSelected,
  getSelectedUsers,
  // getDeleteUserData,
  // getDeleteUserError,
} from '../../../redux/User-Role/User-Role.selectors';
import UserRolesForms from '../UserRolesForms/UserRolesForms';
import Status from './styles/User.Roles.Card';

const UserRoleCard = ({
  username = '',
  date = '',
  role = '',
  status = '',
  userId = '',
  companyName = '',
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [drawerOpen, seteDrawerOpen] = useState(false);
  const [editUser, seteEditUser] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentStatus, setCurrentStatus] = useState(status);
  // const [isUserDeleted, setIsUserDeleted] = useState(false);

  const authToken = useSelector(getUserAuthToken);
  const selectedUsers = useSelector(getSelectedUsers);
  const isAllSelected = useSelector(getIfAllSelected);
  // const deleteUserSuccess = useSelector(getDeleteUserData);
  // const isDeleteUserError = useSelector(getDeleteUserError);

  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handelCheckbox = (e) => {
    setCheckBox(e.target.checked);

    if (e.target.checked) {
      dispatch(selectUser(userId));
    } else {
      dispatch(deSelectUser(userId));
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditDrawerOpen = () => {
    handleClose();
    seteEditUser(true);
    seteDrawerOpen(true);
  };

  const handleAddRoleDrawerOpen = () => {
    handleClose();
    seteEditUser(false);
    seteDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    seteDrawerOpen(false);
    seteEditUser(false);
  };

  const handleDeleteUser = () => {
    handleClose();

    const data = {
      authToken,
      userId,
    };
    setCurrentStatus(0);
    dispatch(deleteUser(data));
  };

  React.useEffect(() => {
    let alreadyInList = false;

    // eslint-disable-next-line
    selectedUsers.map((user) => {
      if (user === userId) {
        setCheckBox(true);
        alreadyInList = true;
      }
    });

    if (isAllSelected) {
      if (!alreadyInList) {
        setCheckBox(true);
        dispatch(selectUser(userId));
      }
    } else if (checkBox) {
      setCheckBox(false);
      dispatch(deSelectUser(userId));
    }
  }, [isAllSelected]);

  return (
    <>
      <Drawer anchor="right" onClose={handleDrawerClose} open={drawerOpen}>
        {editUser ? (
          <UserRolesForms
            editUser
            handelCancel={handleDrawerClose}
            userName={username}
          />
        ) : (
          <UserRolesForms
            handelCancel={handleDrawerClose}
            userName={username}
          />
        )}
      </Drawer>
      <div className="user-role-base">
        <span className="user-roles-card-check-input">
          <input
            checked={checkBox}
            onChange={(e) => handelCheckbox(e)}
            type="checkbox"
          />
        </span>
        <span className="user-roles-card-username">{username}</span>
        <span className="user-roles-card-username">
          {!companyName ? <p>-</p> : companyNameList[companyName]}
        </span>
        <span className="user-roles-card-date">{role}</span>
        <span className="user-roles-card-role">{date}</span>
        <span className="user-roles-card-status">
          <Status status={currentStatus}> {UserStatus[currentStatus]}</Status>
        </span>
        <span
          className="user-roles-card-action"
          onClick={() => setShowMenu(!showMenu)}
        >
          <MoreHorizIcon className="menu-icon" onClick={handleClick} />
          <Menu
            anchorEl={anchorEl}
            id="basic-menu"
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            onClose={handleClose}
            open={open}
          >
            <MenuItem onClick={handleAddRoleDrawerOpen}>Assign Role</MenuItem>
            <MenuItem onClick={handleEditDrawerOpen}>Edit </MenuItem>
            <MenuItem onClick={handleDeleteUser}>Delete</MenuItem>
          </Menu>
        </span>
      </div>
    </>
  );
};

/* eslint-disable */
UserRoleCard.propTypes = {
  username: PropTypes.string,
  date: PropTypes.string,
  role: PropTypes.string,
  status: PropTypes.number,
  userId: PropTypes.number,
  companyName: PropTypes.string,
};

export default UserRoleCard;
