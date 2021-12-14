/*eslint-disable*/
import './CompanyManagementCard.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import React from 'react';

const CompanyManagementCard = () => {
  return (
    <div className="table">
      <span className="check-input">
        <input type="checkbox" />
      </span>

      <span className="company-name">
        <p>Company Name</p>
      </span>

      <span className="address">
        <p>Address</p>
      </span>

      <span className="city">
        <p>City</p>
      </span>

      <span className="contact">
        <p> Reference contact </p>
      </span>

      <span className="update">
        <p>Last update</p>
      </span>

      <span className="update">
        <p>User last update</p>
      </span>

      <span className="actions">
        <MoreHorizIcon className="menu-icon" />
      </span>
    </div>
  );
};

export default CompanyManagementCard;
