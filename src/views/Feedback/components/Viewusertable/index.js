import './viewusertable.scss';

import React from 'react';

import DataDetails from './datadetails';
import Datagrid from './datagrid';

const ViewUserTable = () => {
  return (
    <>
      <div className="table-head-grid table-header-grid">
        <div className="table-check">
          <input type="checkbox" />
        </div>
        <div className="table-user">User Name</div>
        <div className="table-date">Date</div>
        <div className="table-address">Address</div>
        <div className="table-city">City</div>
        <div className="table-satis">Satisfaction</div>
        <div className="table-doc">Documents</div>
        <div className="table-actions">Actions</div>
      </div>
      <div className="tabletbody">
        <Datagrid />
        <DataDetails />
        <Datagrid />
        <Datagrid />
        <Datagrid />
        <Datagrid />
      </div>
    </>
  );
};

export default ViewUserTable;
