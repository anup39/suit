import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteFeedback } from '../../../../redux/feedback-redux/feedback.actions';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';
import DataDetails from './datadetails';

const Datagrid = ({ feedBackDetails }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [viewFeedback, setViewFeedback] = React.useState(false);

  const dispatch = useDispatch();
  const authToken = useSelector(getUserAuthToken);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleViewFeedback = () => {
    handleClose();
    setViewFeedback(true);
  };
  const handleDeleteFeedback = () => {
    handleClose();
    const data = {
      authToken,
      feedbackId: feedBackDetails.id,
    };

    dispatch(deleteFeedback(data));
  };
  return (
    <div className="table-head-grid">
      {!viewFeedback ? (
        <>
          {/* <div className="table-check"> 
    <input type="checkbox" />
  </div> */}
          <div className="table-user">{feedBackDetails.idUser}</div>
          <div className="table-date">9 Nov 2021</div>
          <div className="table-address">{feedBackDetails.address}</div>
          <div className="table-city">{feedBackDetails.city}</div>
          <div className="table-satis">
            {feedBackDetails.satisfactionLevel === 0
              ? '-'
              : feedBackDetails.satisfactionLevel}
          </div>
          <div className="table-doc">-</div>
          <div className="table-actions">
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
              <MenuItem onClick={handleViewFeedback}>View</MenuItem>
              <MenuItem onClick={handleDeleteFeedback}>Delete</MenuItem>
            </Menu>
          </div>
        </>
      ) : (
        <DataDetails
          deleteFeedback={handleDeleteFeedback}
          feedBackDetails={feedBackDetails}
        />
      )}
    </div>
  );
};

Datagrid.propTypes = {
  feedBackDetails: PropTypes.isRequired,
};
export default Datagrid;
