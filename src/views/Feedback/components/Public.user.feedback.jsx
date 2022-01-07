import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Button from '@mui/material/Button';
import React from 'react';

import Datarow from './Datarow';
import MobileDataRow from './mobile.data.row';

const PublicUserFeedback = () => {
  return (
    <div className="table-container">
      <div className="table-container-head" />
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th className="check-con" scope="col">
                {' '}
                <input type="checkbox" />
              </th>
              <th scope="col">User Name</th>
              <th scope="col">Date</th>
              <th scope="col" style={{ width: '25%' }}>
                Address
              </th>
              <th scope="col">City</th>
              <th scope="col">Satisfaction</th>
              <th scope="col" style={{ width: '15%' }}>
                Documents
              </th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <Datarow />
            <Datarow />
            <Datarow />
            <Datarow />
            <Datarow />
            <Datarow />
            <Datarow />
            <Datarow />
            <Datarow />
            <Datarow />
          </tbody>
        </table>
      </div>
      <div className="mobile-table">
        <MobileDataRow />
        <MobileDataRow />
        <MobileDataRow />
        <MobileDataRow />
        <MobileDataRow />

        <MobileDataRow />
        <MobileDataRow />
      </div>
      <div className="table-container-btm ">
        <div className="table_slider_container">
          <div className="table_slider">
            <span className="previous_button">
              <Button disabled variant="outlined">
                <DoubleArrowIcon style={{ fontSize: '14px' }} /> Prev
              </Button>
            </span>
            <div className="page_buttons">
              <span className="active-num">1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
            </div>
            <span className="next_button">
              <Button variant="outlined">
                Next <DoubleArrowIcon style={{ fontSize: '14px' }} />
              </Button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicUserFeedback;
