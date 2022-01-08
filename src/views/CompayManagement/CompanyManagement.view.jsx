import AddIcon from '@mui/icons-material/Add';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllCompany } from '../../redux/company-redux/company.actions';
import { getUserAuthToken } from '../../redux/user-redux/user.selectors';
import CreateCompany from './components/create-company/companyCreate';
import CompanyManagementDataGrid from './components/managmenet.datagrid';
import classes from './styles/styles.managment.module.scss';

const CompanyManagementView = () => {
  const [openCreateCompanyDrawer, setOpenCreateCompanyDrawer] =
    React.useState(false);

  const handleCreateCompanyDrawer = () => {
    setOpenCreateCompanyDrawer(true);
  };
  const handleCloseCompanyDrawer = () => {
    setOpenCreateCompanyDrawer(false);
  };

  const userAccessToken = useSelector(getUserAuthToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userAccessToken) {
      dispatch(getAllCompany(userAccessToken));
    }
  }, []);

  return (
    <div className={classes.dfc}>
      <div className={classes.company_container}>
        <div className={classes.company_header}>
          <CreateCompany
            isClose={handleCloseCompanyDrawer}
            isOpen={openCreateCompanyDrawer}
          />
          <h3 className={classes.company_headerName}>Company Management</h3>
          <button
            ButtonUnstyled
            className={classes.header_button}
            onClick={handleCreateCompanyDrawer}
            type="button"
          >
            <AddIcon /> Create Company
          </button>
        </div>
        <CompanyManagementDataGrid />
      </div>
    </div>
  );
};

export default CompanyManagementView;
