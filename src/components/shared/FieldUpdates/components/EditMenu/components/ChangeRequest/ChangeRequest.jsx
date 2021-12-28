import './ChangeRequest.scss';

import React from 'react';

import EditModalHeaders from '../EditModalHeaders/EditModalHeaders';

const ChangeRequest = () => {
  return (
    <div className="change-request-base">
      <EditModalHeaders headerName="Change Request" />
      <div className="change-request-body-div">
        <div className="change-request-body-header">
          <p>Task 1 Change</p>
        </div>
        <div className="change-request-body">
          <div className="change-body-request-details">
            <span>
              <p>Company Name</p>
              <div className="change-request-details">Microhard </div>
            </span>

            <span>
              <p>Project name</p>
              <div className="change-request-details">
                React Native Mobile App{' '}
              </div>
            </span>

            <span>
              <p>Requets Date</p>
              <div className="change-request-details">10/12/21</div>
            </span>

            <span>
              <p>Request nr</p>
              <div className="change-request-details">123445645 </div>
            </span>
          </div>

          <div>
            <p>Change Request</p>
            <div className="change-request-description-details">
              Change Request Details
            </div>
          </div>

          <div className="filename-base-div">
            <p>List of File Names</p>
            <div className="change-request-details-files"> File Div </div>
          </div>

          <div className="change-request-buttons-div">
            <span className="change-request-button-reject">Reject</span>
            <span className="change-request-button-accept">Accept</span>
          </div>

          <span>
            <p>Reason of Rejection</p>
            <textarea className="reason-of-rejection-details-text-area" />
          </span>
        </div>
      </div>
      <span className="close-button">Close</span>
    </div>
  );
};

export default ChangeRequest;
