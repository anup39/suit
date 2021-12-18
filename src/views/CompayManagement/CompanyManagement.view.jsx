import AddIcon from '@mui/icons-material/Add';
import React from 'react';

import CreateCompany from './components/create-company/companyCreate';
import CompanyManagementDataGrid from './components/managmenet.datagrid';
import classes from './styles/styles.managment.module.scss';

const CompanyManagementView = () => {
  const [create, setCreate] = React.useState(false);
  const openCreate = () => {
    setCreate(true);
  };
  return (
    <div className={classes.company_container}>
      <div className={classes.company_header}>
        <CreateCompany isClose={setCreate} isOpen={create} />
        <h3 className={classes.company_headerName}>Company Management</h3>
        <div className={classes.header_button_container}>
          <button
            ButtonUnstyled
            className={classes.header_button}
            onClick={openCreate}
            type="button"
          >
            <AddIcon /> create company
          </button>
        </div>
      </div>
      <CompanyManagementDataGrid />
    </div>
  );
};

export default CompanyManagementView;
