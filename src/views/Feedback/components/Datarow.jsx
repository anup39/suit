import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

const Datarow = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <tr>
      <td className="check-con">
        <input type="checkbox" />
      </td>
      <td>User@mail.com</td>
      <td>9 Nov 2021</td>
      <td style={{ width: '25%' }}>
        Dummy text refers to the bits of content that are used to{' '}
      </td>
      <td>Chennai</td>
      <td>9</td>
      <td className="blue-text" style={{ width: '15%' }}>
        Document 1, Document 2
      </td>
      <td>
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
          <MenuItem>View</MenuItem>
          <MenuItem>Delete</MenuItem>
        </Menu>
      </td>
    </tr>
  );
};

export default Datarow;
