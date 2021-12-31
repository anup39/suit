/*eslint-disable*/
import './CompanyManagementCard.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import OptionsBase from '../OptionsBase/OptionsBase';

import React, { useState } from 'react';

const CompanyManagementCard = ({
  name,
  address,
  city,
  refContact,
  lastUpdate,
  userLastUpdate,
  companyId,
}) => {
  const [openOptions, setOpenOptions] = useState(false);

  return (
    <div className="table">
      <span className="check-input">
        <input type="checkbox" />
      </span>

      <span className="company-name">
        <p>{name}</p>
      </span>

      <span className="address">
        <p>{address}</p>
      </span>

      <span className="city">
        <p>{city}</p>
      </span>

      <span className="contact">
        <p> {refContact} </p>
      </span>

      <span className="update">
        <p>{lastUpdate}</p>
      </span>

      <span className="update">
        <p>{userLastUpdate}</p>
      </span>

      <span className="actions">
        <MoreHorizIcon
          className="menu-icon"
          onClick={() => setOpenOptions(!openOptions)}
        />
        {openOptions && (
          <OptionsBase>
            <p>Add User</p>
            <p>Edit User</p>
            <p>Edit</p>
            <p>Delete</p>
          </OptionsBase>
        )}
      </span>
    </div>
  );
};

export default CompanyManagementCard;
