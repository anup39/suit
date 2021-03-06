import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteFeedback } from '../../../redux/feedback-redux/feedback.actions';
import { getUserAuthToken } from '../../../redux/user-redux/user.selectors';

const Datarow = ({ data }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const dispatch = useDispatch();
  const authToken = useSelector(getUserAuthToken);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    handleClose();
    const dataToSend = { authToken, feedbackId: data.id };
    dispatch(deleteFeedback(dataToSend));
  };

  return (
    <tr style={{ borderBottom: '1px solid black' }}>
      <td>{data.userName}</td>
      <td> {data.createdDate} </td>
      <td style={{ width: '25%' }}>{data.address}</td>
      <td>{data.city} </td>
      <td>{data.satisfactionLevel} </td>
      <td className="blue-text" style={{ width: '15%' }}>
        -
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
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
      </td>
    </tr>
  );
};

Datarow.propTypes = {
  data: PropTypes.isRequired,
};
export default Datarow;
