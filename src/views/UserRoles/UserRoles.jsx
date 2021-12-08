import React from 'react';
import { Outlet } from 'react-router-dom';

import MenuOptions from './menu-ooptions';
import { LinkWrapper } from './styles/user-roles.styles';
import classes from './styles/user-roles.styles.scss';

const UserRoles = () => {
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
      <div className={classes.roles_components}>
        ssss
        <Outlet />
      </div>
    </div>
  );
};

export default UserRoles;
