import './styles/UserRoles.scss';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import DatagridBase from '../../components/shared/DatagridBase/DatagridBase';
import Pagination from '../../components/shared/Pagination/Pagination';
import { roleStart } from '../../redux/User-Role/role.actions';

const UserRoles = ({ currentUserData, userRoleData }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(roleStart(currentUserData.accessToken));
  }, []);

  return (
    <BaseTemplate title="User Roles">
      <DatagridBase>
        <div className="search-div">
          <span className="input-container">
            <input
              className="search-input"
              // onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="User Search"
            />
            <SearchOutlinedIcon className="search-icon" />
          </span>

          <p className="delete-botton">Delete</p>
        </div>

        <div>
          <div className="user-header">
            <div className="user-roles-table-base">
              <div className="user-role-table-header">
                <span className="user-roles-check-input">
                  <input type="checkbox" />
                </span>
                <span className="user-roles-username ">Username</span>
                <span className="user-roles-company ">Company</span>
                <span className="user-roles-role ">Roles</span>
                <span className="user-roles-date">Registration Date</span>

                <span className="user-roles-status ">Status</span>
                <span className="user-roles-action">Actions</span>
              </div>

              <Pagination
                componentNo={4}
                itemData={userRoleData}
                itemsPerPage={10}
              />
            </div>
          </div>
        </div>
      </DatagridBase>
    </BaseTemplate>
  );
};

UserRoles.propTypes = {
  userRoleData: PropTypes.isRequired,
  currentUserData: PropTypes.isRequired,
};

const mapStateToProps = (state) => ({
  currentUserData: state.user.userData,
  userRoleData: state.role.data,
});

export default connect(mapStateToProps)(UserRoles);

// TODO: Delete
// TODO: Delete user
