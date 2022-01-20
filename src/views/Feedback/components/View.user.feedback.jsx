import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Button from '@mui/material/Button';
import React from 'react';

import MobileDataViewRow from './mobile.data.view.row';
import ViewUserTable from './Viewusertable';

const ViewUserFeedback = () => {
  return (
    <div className="table-container">
      <div className="table-container-head" />
      <div className="table-responsive">
        <ViewUserTable />
      </div>
      <div className="mobile-table">
        <MobileDataViewRow />
        <MobileDataViewRow />
        <MobileDataViewRow />
        <MobileDataViewRow />
        <MobileDataViewRow />
        <MobileDataViewRow />
        <MobileDataViewRow />
      </div>
      <div className="table-container-btm ">
        {/* <div className="table_slider_container">
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
        </div> */}
      </div>
    </div>
  );
};
export default ViewUserFeedback;
