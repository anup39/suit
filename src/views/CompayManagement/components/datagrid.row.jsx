import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';
import { connect, useDispatch } from 'react-redux';

import {
  eraseCheckedCompany,
  getCheckedCompany,
} from '../../../redux/company-redux/company.actions';
import CompanyUserAdd from './add-company-user/company-user';
import classes from './row.styles.module.scss';

const DatagridRow = ({
  name,
  address,
  city,
  referenceContact,
  lastUpdate,
  userLastUpdate,
  id,
  isRender,
  update,
  setAllChecked,
  // eslint-disable-next-line react/prop-types
  checkedCompanyList,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isMenu, setMenu] = React.useState(null);
  const [list, setList] = React.useState({});
  const [render, setRender] = React.useState(false);

  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
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

  const onCheckBoxSelect = (e) => {
    setRender(e.target.checked);
    setAllChecked(false);
    update((prevState) => !prevState);
    if (e.target.checked) {
      dispatch(getCheckedCompany({ name, id, checked: true }));
    } else if (!e.target.checked) {
      dispatch(eraseCheckedCompany({ name, id }));
      setList(false);
      update(false);
    }
  };

  React.useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const singleCheckedStatus = checkedCompanyList.filter(
      (item) => item.id === id
    )[0];
    setList(singleCheckedStatus);
  }, [isRender, render]);

  return (
    <tr className={classes.row_container}>
      <CompanyUserAdd handleClose={setMenu} isOpen={isMenu} />
      <td className={classes.row_description}>
        <input
          checked={list?.checked}
          className={classes.row_input}
          onClick={onCheckBoxSelect}
          type="checkbox"
        />
      </td>
      <td className={classes.row_description}>{name}</td>
      <td className={classes.row_description}>{address}</td>
      <td className={classes.row_description}>{city}</td>
      <td className={classes.row_description}>{referenceContact}</td>
      <td className={classes.row_description}>{lastUpdate}</td>
      <td className={classes.row_description}>{userLastUpdate}</td>
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

DatagridRow.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  referenceContact: PropTypes.string.isRequired,
  lastUpdate: PropTypes.string.isRequired,
  userLastUpdate: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isRender: PropTypes.bool.isRequired,
  update: PropTypes.func.isRequired,
  setAllChecked: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  checkedCompanyList: state.company.checkedCompanyList,
});

export default connect(mapStateToProps)(DatagridRow);
