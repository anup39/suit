import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// import FooterNegentis from '../../components/shared/Footer-negentis/footer.component';
import AdminHeaderComponent from '../../components/shared/Headers/AdminHeader/admin-header';
import { getCurrentUserRole } from '../../redux/user-redux/user.selectors';
import MenuOptions from './menu-ooptions';
import { LinkWrapper } from './styles/user-roles.styles';
import classes from './styles/user-roles.styles.module.scss';

const Pannel = () => {
  const { t } = useTranslation();
  // const navigate = useNavigate();
  const currentUserRole = useSelector(getCurrentUserRole);

  // React.useEffect(() => {
  //   navigate('/asuiteweb/pannel/user-roles');
  // }, []);

  return (
    <div className={classes.roles_container}>
      <div className={classes.roles_menu}>
        <h2 className={classes.menu_header}>ASuite</h2>
        <ul className={classes.menu_options_container}>
          {MenuOptions[currentUserRole].map((item) => (
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
