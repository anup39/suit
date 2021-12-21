import './Milestone.scss';

import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import React from 'react';

import EditModalHeaders from '../EditModalHeaders/EditModalHeaders';

const Milestone = () => {
  // eslint-disable-next-line
  const [isAccepted, setIsAccepted] = React.useState(true);

  return (
    <div className="milestone-base">
      <EditModalHeaders headerName="Milestone" />

      <div className="milestone-content">
        <div className="content-header">
          <p className="content-title">Milestone 1</p>

          {isAccepted ? (
            <span className="confirm-status-span">
              <CheckCircleOutlineOutlinedIcon className="status-icon" />
              Approved
            </span>
          ) : (
            <span className="rejected-status-span">
              <HighlightOffOutlinedIcon className="status-icon" />
              Rejected
            </span>
          )}
          <span className="milestone-download-button">
            <FileDownloadOutlinedIcon className="status-icon" /> Download
          </span>
        </div>
        <div className="milestone-content-body">
          <div className="milestone-details">
            <span>
              <p className="milestone-details-label">Company Name</p>
              <div className="milestone-details-data">Company 1</div>
            </span>

            <span>
              <p className="milestone-details-label">Project Name</p>
              <div className="milestone-details-data">Project 1</div>
            </span>

            <span>
              <p className="milestone-details-label">Request Date</p>
              <div className="milestone-details-data">05 Nov 20201</div>
            </span>

            <span>
              <p className="milestone-details-label">Milestone nr</p>
              <div className="milestone-details-data">1254666</div>
            </span>
          </div>
          <div>
            <span>
              <p className="milestone-details-label">Activity Description</p>
              <div className="milestone-details-description">A big Text</div>
            </span>
          </div>

          <div className="milestone-details">
            <span>
              <p className="milestone-details-label">Approved By</p>
              <div className="milestone-details-data">User 1</div>
            </span>
            <span>
              <p className="milestone-details-label">Approve Date</p>
              <div className="milestone-details-data">05 Dec 2021</div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
