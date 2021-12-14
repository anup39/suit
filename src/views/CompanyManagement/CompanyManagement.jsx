/*eslint-disable*/
import './CompanyManagement.scss';

import React from 'react';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CompanyManagementCard from '../../components/shared/CompanyManagementCards/CompanyManagementCard';
import { addNewCompany } from '../../redux/Company-Management/company.actions';
import { useDispatch } from 'react-redux';

const CompanyManagement = () => {
  const dispatch = useDispatch();

  const handelOpenForm = () => {
    dispatch(addNewCompany());
  };

  return (
    <BaseTemplate title="Company Management">
      <span className="button" onClick={handelOpenForm}>
        + Create Company
      </span>

      <div className="user-role-div">
        <div className="search-div">
          <input className="search-input" placeholder="User Search" />
          <SearchOutlinedIcon className="search-icon" />
          <p className="delete-botton">Delete</p>
        </div>
        <div className="header-table">
          <span className="check-input">
            <input type="checkbox" />
          </span>

          <span className="company-name">
            <p>Company Name</p>
          </span>

          <span className="address">
            <p>Address</p>
          </span>

          <span className="city">
            <p>City</p>
          </span>

          <span className="contact">
            <p> Reference contact </p>
          </span>

          <span className="update">
            <p>Last update</p>
          </span>

          <span className="update">
            <p>User last update</p>
          </span>

          <span className="actions">
            <p>Actions</p>
          </span>
        </div>

        <div>
          <CompanyManagementCard />
          <CompanyManagementCard />
          <CompanyManagementCard />
          <CompanyManagementCard />
        </div>
      </div>
    </BaseTemplate>
  );
};

export default CompanyManagement;
