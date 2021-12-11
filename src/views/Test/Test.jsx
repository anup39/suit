/*eslint-disable */
import './test.scss';

import React from 'react';

import UserRolesCard from '../../components/shared/UserRolesCards/UserRoleCard';
import UserRoleForm from '../../components/shared/UserRolesForms/UserRolesForms';
const Test = () => {
  return (
    <div className="test-base">
      <div className="left">
        <p>Hello</p>
      </div>
      <div className="right">
        <UserRolesCard header={true} />
        <UserRolesCard status="Active" />
        <UserRolesCard status="Inactive" />
        <UserRolesCard status="Active" />
        <UserRolesCard status="Active" />
        <UserRolesCard status="Active" />
      </div>
    </div>
  );
};

export default Test;
