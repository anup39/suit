import './styles/UserRoles.scss';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import DatagridBase from '../../components/shared/DatagridBase/DatagridBase';
import Pagination from '../../components/shared/Pagination/Pagination';
import { getUserAuthToken } from '../../redux/user-redux/user.selectors';
import { roleStart } from '../../redux/User-Role/role.actions';
import { getUserRoleList } from '../../redux/User-Role/User-Role.selectors';
import MobileDataRow from './mobile.data.row';

const UserRoles = () => {
  const dispatch = useDispatch();
  const userRoleData = useSelector(getUserRoleList);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredData, setfilteredData] = React.useState([]);

  const userAuthToken = useSelector(getUserAuthToken);

  const filterLists = (e) => {
    setSearchTerm(e.target.value);
    const filteredList = userRoleData.filter((item) =>
      item?.username.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setfilteredData(filteredList);
  };

  useEffect(() => {
    if (userRoleData.length === 0) {
      dispatch(roleStart(userAuthToken));
    }
  }, []);

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
                itemData={searchTerm ? filteredData : userRoleData}
                itemsPerPage={10}
              />
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
