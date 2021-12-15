/*eslint-disable */
import './User.Roles.cards.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, { useState } from 'react';

import Status from './styles/User.Roles.Card';
import UserRoleMenu from './UserRoleMenu/UserRoleMenu';

const UserRoleCard = ({ username, date, role, status, userId }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="user-role-base table">
      <span className="check-input">
        <input type="checkbox" />
      </span>
      <span className="username">
        <p>{username}</p>
      </span>
      <span className="date">
        <p>{date}</p>
      </span>
      <span className="role">
        <p>{role}</p>
      </span>
      <span className="status non-selectable">
        <Status status={status}> {status}</Status>
      </span>

      <span className="action" onClick={() => setShowMenu(!showMenu)}>
        <MoreHorizIcon className="menu-icon" />
        {showMenu && <UserRoleMenu userId={userId} />}
      </span>
    </div>
  );
};

export default UserRoleCard;
