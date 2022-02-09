import './styles/UserRoles.scss';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import DatagridBase from '../../components/shared/DatagridBase/DatagridBase';
import LoadingSpinner from '../../components/shared/LoadingSpinner/LoadingSpinner';
import Pagination from '../../components/shared/Pagination/Pagination';
import RestrictedPages from '../../components/shared/RestrictedPages/RestrictedPages';
import GlobalSpinner from '../../components/shared/Spinners/GlobalSpinner';
import {
  getIfAuthenticated,
  getUserAuthToken,
} from '../../redux/user-redux/user.selectors';
import {
  deleteUserError,
  deleteUserInBulk,
  deselectAllUser,
  roleStart,
  selectAllUser,
} from '../../redux/User-Role/role.actions';
import {
  getDeleteUserError,
  getIfAllSelected,
  getIsDeleteUserInBulkLoading,
  getIsLoading,
  // getDeleteUserInBulkSuccess,
  // getDeleteUserInBulkError,
  getIsUpdateUserRoleLoading,
  getSelectedUsers,
  getUpdateUserRoleData,
  getUserRoleList,
} from '../../redux/User-Role/User-Role.selectors';
import MobileDataRow from './mobile.data.row';

const PAGE_ACCESSABLE_BY = ['planA_admin'];

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
  const isDeleteUserInBulkLoading = useSelector(getIsDeleteUserInBulkLoading);
  const isUpdateUserLoading = useSelector(getIsUpdateUserRoleLoading);
  const updateUserData = useSelector(getUpdateUserRoleData);

  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleDeleteMultipleUsers = () => {
    const data = {
      authToken: userAuthToken,
      userIdList: selectedUsers,
    };

    dispatch(deleteUserInBulk(data));
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

      if (updateUserData) {
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
      navigate('/asuiteweb/signin');
    }
  }, [deleteUserErrorMessage, isAuthenticated, isUpdateUserLoading]);

  return (
    <RestrictedPages accessibleBy={PAGE_ACCESSABLE_BY}>
      <BaseTemplate title="userRoles">
        <GlobalSpinner
          isOpen={isDeleteUserInBulkLoading || isUpdateUserLoading}
        />
        <DatagridBase>
          <div className="search-div">
            <div className="input-container">
              <input
                className="search-input"
                onChange={(e) => filterLists(e)}
                placeholder={t('userSearch')}
                value={searchTerm}
              />
              <SearchOutlinedIcon className="search-icon" />
            </div>

            {selectedUsers.length !== 0 && (
              <span
                className="delete-botton"
                onClick={handleDeleteMultipleUsers}
              >
                {t('Delete')}
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
                  <span className="user-roles-username ">{t('username')}</span>
                  <span className="user-roles-company ">{t('company')}</span>
                  <span className="user-roles-role ">{t('roles')}</span>
                  <span className="user-roles-date">
                    {t('registrationDate')}
                  </span>
                  <span className="user-roles-status ">{t('status')}</span>
                  <span className="user-roles-action">{t('actions')}</span>
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
    </RestrictedPages>
  );
};

export default UserRoles;

// TODO: Delete
