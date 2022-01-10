import './Milestone.scss';

import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMilestoneById } from '../../../../../../../redux/milestone-management/milestone-management.action';
import { getUserAuthToken } from '../../../../../../../redux/user-redux/user.selectors';
import EditModalHeaders from '../EditModalHeaders/EditModalHeaders';

const Milestone = ({ milestoneId }) => {
  const [isAccepted, setIsAccepted] = React.useState(true);

  const dispatch = useDispatch();
  const authToken = useSelector(getUserAuthToken);

  React.useEffect(() => {
    const data = { id: milestoneId, authToken };
    setIsAccepted(false);
    dispatch(getMilestoneById(data));
  }, []);

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
              <p className="milestone-details-label mt-24">
                Activity Description
              </p>
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
      <div className="milestone-btm">
        <button onClick={() => console.log('Close')} type="button">
          Close
        </button>
      </div>
    </div>
  );
};

Milestone.propTypes = {
  milestoneId: PropTypes.string.isRequired,
};

export default Milestone;
