import './ActivityReport.scss';

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import React from 'react';

import EditModalHeaders from '../EditModalHeaders/EditModalHeaders';

const ActivityReport = () => {
  return (
    <div className="activity-report-base">
      <EditModalHeaders headerName="Activity Report" />
      <div>
        <div className="activity-report-content">
          <div className="activity-report-content-header">
            <span>Activity Report 1</span>
            <span className="activity-download-button">
              <FileDownloadOutlinedIcon className="activity-download-icon" />{' '}
              Download
            </span>
          </div>
          <div className="activity-report-content-body">
            <div className="activity-report-inputs-div">
              <span>
                <p>Company</p>
                <input className="activity-report-inputs" />
              </span>

              <span>
                <p>Project name</p>
                <input className="activity-report-inputs" />
              </span>

              <span>
                <p>Date</p>
                <input className="activity-report-inputs" />
              </span>

              <span>
                <p>Report nr</p>
                <input className="activity-report-inputs" />
              </span>
            </div>

            <span>
              <p>Activity</p>
              <textarea className="activity-report-textarea" cols={6} />
            </span>
          </div>
        </div>
        <span className="activity-close-button"> Close</span>
      </div>
    </div>
  );
};

export default ActivityReport;
