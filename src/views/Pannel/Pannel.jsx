import React from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

// import FooterNegentis from '../../components/shared/Footer-negentis/footer.component';
import AdminHeaderComponent from '../../components/shared/Headers/AdminHeader/admin-header';
import MenuOptions from './menu-ooptions';
import { LinkWrapper } from './styles/user-roles.styles';
import classes from './styles/user-roles.styles.module.scss';

const Pannel = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.roles_container}>
      <div className={classes.roles_menu}>
        <h2 className={classes.menu_header}>ASuite</h2>
        <ul className={classes.menu_options_container}>
          {MenuOptions.map((item) => (
            <li key={item.name} className={classes.menu_option}>
              <LinkWrapper to={item.path}>{t(item.name)}</LinkWrapper>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.roles_components}>
        <AdminHeaderComponent />
        <Outlet />
        {/* <FooterNegentis /> */}
      </div>
    </div>
  );
};

export default Pannel;
