/*eslint-disable*/
import './CompanyManagement.scss';

import React, { useEffect } from 'react';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CompanyManagementCard from '../../components/shared/CompanyManagementCards/CompanyManagementCard';
import { addNewCompany } from '../../redux/Company-Management/company.actions';
import { connect, useDispatch } from 'react-redux';
import { getCompanies } from '../../redux/Company-Management/company.actions';
const CompanyManagement = ({ authToken, companyData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(authToken);
    dispatch(getCompanies(authToken));
  });

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
          <input className="search-input" placeholder="Company Search" />
          <SearchOutlinedIcon className="company-search-icon" />
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
        {console.log(companyData)}
        <div>
          <CompanyManagementCard />
          <CompanyManagementCard />
          <CompanyManagementCard />
        </div>
      </div>
    </BaseTemplate>
  );
};

const mapStateToProps = (state) => ({
  authToken: state.user.userData.accessToken,
  companyData: state.companyManagement.allCompanies,
});
export default connect(mapStateToProps)(CompanyManagement);

/*
 name,
  address,
  city,
  refContact,
  lastUpdate,
  userLastUpdate,
  companyId,
*/
