import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

import CompanyUserAdd from './add-company-user/company-user';
import classes from './row.styles.module.scss';

const DatagridRow = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isMenu, setMenu] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = () => {
    handleClose();
    setMenu(true);
  };

  return (
    <tr className={classes.row_container}>
      <CompanyUserAdd handleClose={setMenu} isOpen={isMenu} />
      <td className={classes.row_description}>
        <input className={classes.row_input} type="checkbox" />
      </td>
      <td className={classes.row_description}>Apple</td>
      <td className={classes.row_description}>#42, Via Sacra.</td>
      <td className={classes.row_description}>Milan</td>
      <td className={classes.row_description}>+39 25361 12365</td>
      <td className={classes.row_description}>06 Dec 2021</td>
      <td className={classes.row_description}>08 Dec 2021</td>
      <td className={classes.row_description}>
        <MoreHorizIcon
          aria-controls="basic-menu"
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          id="basic-button"
          onClick={handleClick}
        />
        <Menu
          anchorEl={anchorEl}
          id="basic-menu"
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          onClose={handleClose}
          open={open}
        >
          <MenuItem onClick={handleMenu}>Add User</MenuItem>
          <MenuItem onClick={handleClose}>Edit User</MenuItem>
          <MenuItem onClick={handleClose}>Edit</MenuItem>
          <MenuItem onClick={handleClose}>Delete</MenuItem>
        </Menu>
      </td>
    </tr>
  );
};

export default DatagridRow;
