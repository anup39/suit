import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import MailIcon from '@mui/icons-material/Mail';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TranslateIcon from '@mui/icons-material/Translate';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { userSingout } from '../../../../redux/user-redux/user.actions';
import { getUserData } from '../../../../redux/user-redux/user.selectors';
import classes from './styles/admin.header.module.scss';
import {
  AdminAccountIcon,
  AdminArrowDown,
  AdminInfoContainer,
  AdminInfoName,
  AdminInfoRole,
  AdminRoleContainer,
} from './styles/admin.styles';

export const AppBarComponent = styled(AppBar)(() => ({
  backgroundColor: '#fff',
  boxShadow: 'none',
  borderBottom: '1px solid #ddd',
}));
export const NotificationsIconOutlined = styled(NotificationsNoneOutlinedIcon)(
  () => ({
    color: '#0000009e',
  })
);

const AdminHeaderComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [translateAnchorEl, setTranslateAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isTranslateMenuOpen = Boolean(translateAnchorEl);

  const { i18n } = useTranslation();

  const handleTranslateMenuClick = (event) => {
    setTranslateAnchorEl(event.currentTarget);
  };
  const handleTranslateMenuClose = () => {
    setTranslateAnchorEl(null);
  };

  const handleChangeLanguage = (e) => {
    handleTranslateMenuClose();
    i18n.changeLanguage(e.target.id);
  };

  const dispatch = useDispatch();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleSignOut = () => {
    handleMenuClose();
    dispatch(userSingout());
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const userData = useSelector(getUserData);

  const menuId = 'primary-search-account-menu';
  const { t } = useTranslation();

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      onClose={handleMenuClose}
      open={isMenuOpen}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <MenuItem onClick={handleMenuClose}>{t('profile')}</MenuItem>
      <MenuItem onClick={handleMenuClose}>{t('myAccount')}</MenuItem>
      <MenuItem onClick={handleSignOut}>
        {' '}
        <LogoutIcon style={{ color: 'red', marginRight: '10px' }} />{' '}
        {t('logOut')}
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      onClose={handleMobileMenuClose}
      open={isMobileMenuOpen}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit" size="large">
          <MailIcon />
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="show 17 new notifications"
          color="inherit"
          size="large"
        >
          <NotificationsIconOutlined />
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          aria-label="account of current user"
          color="inherit"
          size="large"
        >
          <AdminAccountIcon>
            <PersonOutlineOutlinedIcon />
          </AdminAccountIcon>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarComponent position="static">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            color="inherit"
            edge="start"
            size="large"
            sx={{ mr: 2 }}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
          >
            <AdminInfoContainer onClick={handleProfileMenuOpen}>
              <IconButton
                aria-controls={menuId}
                aria-haspopup="true"
                aria-label="account of current user"
                color="inherit"
                edge="end"
                size="large"
              >
                <AdminAccountIcon>
                  <PersonOutlineOutlinedIcon />
                </AdminAccountIcon>
              </IconButton>
              <AdminRoleContainer>
                <AdminInfoRole>
                  {userData?.roles && userData?.roles[0]}
                </AdminInfoRole>
                <AdminInfoName>
                  {userData.username && userData?.username}
                </AdminInfoName>
              </AdminRoleContainer>
              <AdminArrowDown>
                <KeyboardArrowDownOutlinedIcon />
              </AdminArrowDown>
            </AdminInfoContainer>
            <IconButton
              aria-label="show 17 new notifications"
              color="inherit"
              size="large"
            >
              <span className={classes.notify_dot} />
              <NotificationsIconOutlined />
            </IconButton>
            <span>
              <TranslateIcon
                className={classes.translate_language_icon}
                onClick={handleTranslateMenuClick}
              />
              <Menu
                anchorEl={translateAnchorEl}
                id="basic-menu"
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                onClose={handleTranslateMenuClose}
                open={isTranslateMenuOpen}
              >
                <MenuItem id="en" onClick={handleChangeLanguage}>
                  English
                </MenuItem>
                <MenuItem id="gr" onClick={handleChangeLanguage}>
                  German
                </MenuItem>
              </Menu>
            </span>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              aria-label="show more"
              className="more-icon"
              color="inherit"
              onClick={handleMobileMenuOpen}
              size="large"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBarComponent>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default AdminHeaderComponent;
