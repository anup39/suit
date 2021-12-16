import './CompanyManagement.scss';

import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import CompanyManagementCard from '../../components/shared/CompanyManagementCards/CompanyManagementCard';
import DatagridBase from '../../components/shared/DatagridBase/DatagridBase';
import SearchComponent from '../../components/shared/SearchComponent/SearchComponent';
import {
  addNewCompany,
  getCompanies,
} from '../../redux/Company-Management/company.actions';

// eslint-disable-next-line
const CompanyManagement = ({ authToken, companyData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!companyData) {
      dispatch(getCompanies(authToken));
    }
  });

  const handelOpenForm = () => {
    dispatch(addNewCompany());
  };

  return (
    <BaseTemplate title="Company Management">
      <span className="button" onClick={handelOpenForm}>
        + Create Company
      </span>

      <DatagridBase>
        <SearchComponent title="Company Search" />
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
          {companyData &&
            companyData.map((data) => (
              <CompanyManagementCard
                key={data.id}
                address={data.address}
                city={data.city}
                companyId={data.id}
                lastUpdate={` ${data.last_update[2]}/${data.last_update[1]}/${data.last_update[0]}`}
                name={data.name}
                refContact={data.reference_contact}
                userLastUpdate={data.user_last_update}
              />
            ))}
        </div>
      </DatagridBase>
    </BaseTemplate>
  );
};

CompanyManagement.propTypes = {
  companyData: PropTypes.isRequired,
};

const mapStateToProps = (state) => ({
  authToken: state.user.userData.accessToken,
  companyData: state.companyManagement.allCompanies,
});
export default connect(mapStateToProps)(CompanyManagement);
