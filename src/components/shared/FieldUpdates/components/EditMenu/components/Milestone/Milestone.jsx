import './Milestone.scss';

import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getMilestoneByIdData } from '../../../../../../../redux/milestone-management/milestone.selector';
import { getMilestoneById } from '../../../../../../../redux/milestone-management/milestone-management.action';
import { getUserAuthToken } from '../../../../../../../redux/user-redux/user.selectors';
import EditModalHeaders from '../EditModalHeaders/EditModalHeaders';

const Milestone = ({ milestoneId, handleClose }) => {
  const [isAccepted, setIsAccepted] = React.useState(true);
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const authToken = useSelector(getUserAuthToken);
  const milestoneData = useSelector(getMilestoneByIdData);

  React.useEffect(() => {
    const data = { id: milestoneId, authToken };
    setIsAccepted(false);
    dispatch(getMilestoneById(data));
  }, []);

  return (
    <div className="milestone-base">
      <EditModalHeaders headerName={t('milestone')} />
      {console.log(milestoneData)}
      <div className="milestone-content">
        <div className="content-header">
          <p className="content-title">{}</p>

          {isAccepted ? (
            <span className="confirm-status-span">
              <CheckCircleOutlineOutlinedIcon className="status-icon" />
              {t('approved')}
            </span>
          ) : (
            <span className="rejected-status-span">
              <HighlightOffOutlinedIcon className="status-icon" />
              {t('rejected')}
            </span>
          )}
          <span className="milestone-download-button">
            <FileDownloadOutlinedIcon className="status-icon" /> {t('download')}
          </span>
        </div>
        <div className="milestone-content-body">
          <div className="milestone-details">
            <span>
              <p className="milestone-details-label">{t('companyName')}</p>
              <div className="milestone-details-data">
                {milestoneData?.companyName}
              </div>
            </span>

            <span>
              <p className="milestone-details-label">{t('projectName')}</p>
              <div className="milestone-details-data">
                {milestoneData?.projectName ? milestoneData?.projectName : '-'}
              </div>
            </span>

            <span>
              <p className="milestone-details-label">{t('requestDate')}</p>
              <div className="milestone-details-data">
                {milestoneData?.milestoneDate}
              </div>
            </span>

            <span>
              <p className="milestone-details-label">{t('milestonenr')}</p>
              <div className="milestone-details-data">
                {milestoneData?.milestoneNumber}
              </div>
            </span>
          </div>
          <div>
            <span>
              <p className="milestone-details-label mt-24">
                {t('activityDescription')}
              </p>
              <div className="milestone-details-description">-</div>
            </span>
          </div>

          <div className="milestone-details">
            <span>
              <p className="milestone-details-label">{t('approvedBy')}</p>
              <div className="milestone-details-data">
                {milestoneData?.approvedBy}
              </div>
            </span>
            <span>
              <p className="milestone-details-label">{t('approveDate')}</p>
              <div className="milestone-details-data">
                {milestoneData?.approvalDate}
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="milestone-btm">
        <button onClick={() => handleClose()} type="button">
          {t('close')}
        </button>
      </div>
    </div>
  );
};

Milestone.propTypes = {
  milestoneId: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Milestone;
