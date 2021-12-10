/*eslint-disable */
import './User.Roles.cards.scss';
import Status from './styles/User.Roles.Card';
import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import UserRoleMenu from './UserRoleMenu/UserRoleMenu';
const UserRoleCard = ({
  header = false,
  username = 'test User 1',
  date = '23 Dec 2021',
  roles = 'Engiener',
  status = 'Inactive',
}) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="user-role-base table">
      <span className="check-input">
        <input type="checkbox" />
      </span>
      <span className={header ? 'username header' : 'username'}>
        {header ? <p>Username</p> : <p>{username}</p>}
      </span>
      <span className={header ? 'date header' : 'date'}>
        {header ? <p>Registration Date</p> : <p>{date}</p>}
      </span>
      <span className={header ? 'role header' : 'role'}>
        {header ? <p>Role</p> : <p>{roles}</p>}
      </span>
      <span className={header ? 'status header' : 'status non-selectable'}>
        {header ? <p>Status</p> : <Status status={status}> {status}</Status>}
      </span>
      <span
        className={header ? 'action header' : 'action'}
        onClick={() => setShowMenu(!showMenu)}
      >
        {header ? 'Actions' : <MoreHorizIcon className="menu-icon" />}
        {!header && showMenu && <UserRoleMenu />}
      </span>
    </div>
  );
};

export default UserRoleCard;
