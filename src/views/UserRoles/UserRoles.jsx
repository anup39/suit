import './styles/UserRoles.scss';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import DatagridBase from '../../components/shared/DatagridBase/DatagridBase';
import LoadingSpinner from '../../components/shared/LoadingSpinner/LoadingSpinner';
import Pagination from '../../components/shared/Pagination/Pagination';
import {
  getIfAuthenticated,
  getUserAuthToken,
} from '../../redux/user-redux/user.selectors';
import {
  deleteUser,
  deleteUserError,
  deselectAllUser,
  roleStart,
  selectAllUser,
} from '../../redux/User-Role/role.actions';
import {
  getDeleteUserError,
  getIfAllSelected,
  getIsLoading,
  getSelectedUsers,
  getUserRoleList,
} from '../../redux/User-Role/User-Role.selectors';
import MobileDataRow from './mobile.data.row';

const UserRoles = () => {
  const dispatch = useDispatch();
  const userRoleData = useSelector(getUserRoleList);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredData, setfilteredData] = React.useState([]);
  const [checkbox, setCheckbox] = React.useState(false);

  const userAuthToken = useSelector(getUserAuthToken);
  const ifAllSelected = useSelector(getIfAllSelected);
  const selectedUsers = useSelector(getSelectedUsers);
  const deleteUserErrorMessage = useSelector(getDeleteUserError);
  const isLoading = useSelector(getIsLoading);
  const isAuthenticated = useSelector(getIfAuthenticated);
  const navigate = useNavigate();

  const handleDeleteMultipleUsers = () => {
    // eslint-disable-next-line
    selectedUsers.map((user) => {
      const data = {
        authToken: userAuthToken,
        userId: user,
      };

      dispatch(deleteUser(data));
    });
  };

  const handleCheckbox = (e) => {
    setCheckbox(e.target.checked);

    if (e.target.checked) {
      dispatch(selectAllUser());
    } else {
      dispatch(deselectAllUser());
    }
  };

  const filterLists = (e) => {
    setSearchTerm(e.target.value);
    const filteredList = userRoleData.filter((item) =>
      item?.username.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setfilteredData(filteredList);
  };

  useEffect(() => {
    if (isAuthenticated) {
      if (userRoleData.length === 0) {
        dispatch(roleStart(userAuthToken));
      }

      if (ifAllSelected) {
        setCheckbox(true);
      } else {
        setCheckbox(false);
      }

      if (deleteUserErrorMessage) {
        toast.error('Failed to delete the user!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch(deleteUserError(''));

        setTimeout(() => {
          dispatch(roleStart(userAuthToken));
        }, 2000);
      }
    } else {
      navigate('/signin');
    }
  }, [deleteUserErrorMessage, isAuthenticated]);

  return (
    <BaseTemplate title="User Roles">
      <DatagridBase>
        <div className="search-div">
          <div className="input-container">
            <input
              className="search-input"
              onChange={(e) => filterLists(e)}
              placeholder="User Search"
              value={searchTerm}
            />
            <SearchOutlinedIcon className="search-icon" />
          </div>

          {selectedUsers.length !== 0 && (
            <span className="delete-botton" onClick={handleDeleteMultipleUsers}>
              Delete
            </span>
          )}
        </div>
        <div>
          <div className="user-header">
            <div className="user-roles-table-base">
              <div className="user-role-table-header">
                <span className="user-roles-check-input">
                  <input
                    checked={checkbox}
                    onChange={(e) => handleCheckbox(e)}
                    type="checkbox"
                  />
                </span>
                <span className="user-roles-username ">Username</span>
                <span className="user-roles-company ">Company</span>
                <span className="user-roles-role ">Roles</span>
                <span className="user-roles-date">Registration Date</span>
                <span className="user-roles-status ">Status</span>
                <span className="user-roles-action">Actions</span>
              </div>
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <Pagination
                  componentNo={4}
                  itemData={searchTerm ? filteredData : userRoleData}
                  itemsPerPage={10}
                />
              )}
              <div className="mobile_table_userroles">
                <MobileDataRow />
                <MobileDataRow />
                <MobileDataRow />
                <MobileDataRow />
                <MobileDataRow />

                <MobileDataRow />
              </div>
            </div>
          </div>
        </div>
      </DatagridBase>
    </BaseTemplate>
  );
};

export default UserRoles;

// TODO: Delete
