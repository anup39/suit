/*eslint-disable*/
import React from 'react';
import { Outlet } from 'react-router-dom';

import AdminHeaderComponent from '../../components/shared/Headers/AdminHeader/admin-header';
// import UserRolesForms from '../../components/shared/UserRolesForms/UserRolesForms';
import CreateCompanyForm from '../../components/shared/CompanyManagementForms/CreateCompany/Create-Company.Forms';
import MenuOptions from './menu-ooptions';
import { LinkWrapper } from './styles/user-roles.styles';
import classes from './styles/user-roles.styles.module.scss';
import { connect } from 'react-redux';

const Pannel = ({ companyFormOpen }) => {
  return (
    <>
      {/* <UserRolesForms /> */}
      {companyFormOpen && <CreateCompanyForm />}
      <div className={classes.roles_container}>
        <div className={classes.roles_menu}>
          <h2 className={classes.menu_header}>ASuit</h2>
          <ul className={classes.menu_options_container}>
            {MenuOptions.map((item) => (
              <li key={item.name} className={classes.menu_option}>
                <LinkWrapper to={item.path}>{item.name}</LinkWrapper>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.roles_components}>
          <AdminHeaderComponent />
          <Outlet />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  companyFormOpen: state.companyManagement.openForm,
});
export default connect(mapStateToProps)(Pannel);
