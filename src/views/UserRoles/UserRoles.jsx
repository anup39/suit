/*eslint-disable*/
import './styles/UserRoles.scss';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React, { useEffect } from 'react';

import UserRoleCard from '../../components/shared/UserRolesCards/UserRoleCard';
import { connect, useDispatch } from 'react-redux';
import { roleStart } from '../../redux/User-Role/role.actions';
import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';

const UserRoles = ({ currentUserData, userRoleData }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(roleStart(currentUserData.accessToken));
  }, []);

  return (
    <BaseTemplate title="User Roles">
      {console.log(currentUserData)}
      <div className="user-role-div">
        <div className="search-div">
          <input className="search-input" placeholder="User Search" />
          <SearchOutlinedIcon className="search-icon" />
          <p className="delete-botton">Delete</p>
        </div>

        <div>
          <div className="user-header">
            <div>
              <div className="user-role-base table">
                <span className="check-input">
                  <input type="checkbox" />
                </span>
                <span className="username text-color">
                  <p>Username</p>
                </span>
                <span className="text-color">
                  <p>Date</p>
                </span>
                <span className="role text-color">
                  <p>Roles</p>
                </span>
                <span className="status text-color">
                  <p> Status</p>
                </span>
                <span className="action text-color">Actions</span>
              </div>
              {userRoleData && userRoleData.map((user) => <UserRoleCard />)}
            </div>
          </div>
        </div>
        <div className="pagination-div">Pagination</div>
      </div>
    </BaseTemplate>
  );
};

const mapSatateToProps = (state) => ({
  currentUserData: state.user.userData,
  userRoleData: state.role.data,
});
export default connect(mapSatateToProps)(UserRoles);
