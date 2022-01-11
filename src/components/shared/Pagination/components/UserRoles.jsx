import PropTypes from 'prop-types';
import React from 'react';

import UserRoleCard from '../../UserRolesCards/UserRoleCard';

const UserRoles = ({ currentItems }) => {
  return (
    <div className="user-role-table-body">
      {currentItems &&
        currentItems.map((user) => (
          <UserRoleCard
            key={user.idUser}
            companyName={user.companies ? user.companies.id : ''}
            date={`${user.updated_date[2]}/${user.updated_date[1]}/${user.updated_date[0]}`}
            role={user.role.name}
            status={user.status}
            userId={user.idUser}
            username={user.username}
          />
        ))}
    </div>
  );
};

UserRoles.propTypes = {
  currentItems: PropTypes.isRequired,
};

export default UserRoles;
