import React from 'react';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import DatagridBase from '../../components/shared/DatagridBase/DatagridBase';
import CreateCompany from './components/create-company/companyCreate';
import CompanyManagementDataGrid from './components/managmenet.datagrid';
import classes from './styles/styles.managment.module.scss';

const CompanyManagementView = () => {
  const [openCreateCompanyDrawer, setOpenCreateCompanyDrawer] =
    React.useState(false);

  const handleCreateCompanyDrawer = () => {
    setOpenCreateCompanyDrawer(true);
  };

  return (
    <>
      <CreateCompany
        isClose={setOpenCreateCompanyDrawer}
        isOpen={openCreateCompanyDrawer}
      />
      <BaseTemplate title="Company Management">
        <div>
          <span
            className={classes.create_new_company_button}
            onClick={handleCreateCompanyDrawer}
          >
            + Create Company
          </span>
        </div>
        <DatagridBase>
          <CompanyManagementDataGrid />
        </DatagridBase>
      </BaseTemplate>
    </>
  );
};

export default CompanyManagementView;
