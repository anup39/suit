import './User.Roles.cards.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import UserRolesForms from '../UserRolesForms/UserRolesForms';
import Status from './styles/User.Roles.Card';

const UserRoleCard = ({
  username,
  date,
  role,
  status,
  userId,
  companyName,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [drawerOpen, seteDrawerOpen] = useState(false);
  const [editUser, seteEditUser] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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

  return (
    <>
      {console.log(userId)}
      <Drawer anchor="right" onClose={handleDrawerClose} open={drawerOpen}>
        {editUser ? (
          <UserRolesForms editUser handelCancel={handleDrawerClose} />
        ) : (
          <UserRolesForms handelCancel={handleDrawerClose} />
        )}
      </Drawer>
      <div className="user-role-base table">
        <span className="user-roles-card-check-input">
          <input type="checkbox" />
        </span>
        <span className="user-roles-card-username">{username}</span>
        <span className="user-roles-card-username">
          {!companyName ? <p>-</p> : companyName}
        </span>
        <span className="user-roles-card-date">{date}</span>
        <span className="user-roles-card-role">{role}</span>
        <span className="user-roles-card-status">
          <Status status={status}> {status}</Status>
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
            <MenuItem onClick={handleClose}>Delete</MenuItem>
          </Menu>
        </span>
      </div>
    </>
  );
};

UserRoleCard.propTypes = {
  username: PropTypes.isRequired,
  date: PropTypes.isRequired,
  role: PropTypes.isRequired,
  status: PropTypes.isRequired,
  userId: PropTypes.isRequired,
  companyName: PropTypes.isRequired,
};

export default UserRoleCard;
