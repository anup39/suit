// import { Typography } from '@mui/material';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import AdminHeaderComponent from '../../components/shared/Headers/AdminHeader/admin-header';
import UserRolesDataGrid from '../../components/shared/UserRolesComponent/UserRoles';
import MenuOptions from './menu-ooptions';
import { LinkWrapper } from './styles/user-roles.styles';
import classes from './styles/user-roles.styles.module.scss';

const UserRoles = () => {
  const location = useLocation();
  console.log(location);
  return (
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
      <div className={classes.roles_menu_under}>.</div>
      <div className={classes.roles_components}>
        <AdminHeaderComponent />
        {location.pathname === '/user-roles' ? (
          <UserRolesDataGrid />
        ) : undefined}
        <Outlet />
      </div>
    </div>
  );
};

export default UserRoles;
