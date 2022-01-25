import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './table-row.styles.module.scss';

const DatagridRow = () => {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = () => {
    handleClose();
  };

  return (
    <tr className={classes.row_container}>
      <td className={classes.row_description}>
        <input className={classes.row_input} type="checkbox" />
      </td>
      <td className={classes.row_description}>Project 1</td>
      <td className={classes.row_description}>Worklist 1</td>
      <td className={classes.row_description}>File 1, file2</td>
      <td className={classes.row_description}>Document1, Document 2</td>
      <td className={classes.row_description}>06 Dec 2021</td>
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
          <MenuItem onClick={handleMenu}>{t('view')}</MenuItem>
          <MenuItem onClick={handleClose}>{t('edit')}</MenuItem>
          <MenuItem onClick={handleClose}>{t('delete')}</MenuItem>
        </Menu>
      </td>
    </tr>
  );
};

export default DatagridRow;
