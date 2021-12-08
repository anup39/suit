/*eslint-disable */
import React from 'react';
import './User.Card.scss';
const UserCard = ({ tableHeader = false, user = 'User', role = 'Roles' }) => {
  if (user.length >= 23) {
    user = user.slice(0, 20) + '...';
  }
  return (
    <div className={tableHeader ? 'table-header' : 'user-table'}>
      <div className="table">
        <span className="user">
          <input type="checkbox" />
          <label>{user}</label>
        </span>
        <span className="role">{role}</span>
      </div>
    </div>
  );
};

export default UserCard;
