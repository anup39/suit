import './MilestoneApprovalModal.scss';

import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import GlobalSpinner from '../../../../components/shared/Spinners/GlobalSpinner';
import {
  getUpdateMilestoneLoading,
  getUpdatetMilestoneSuccess,
} from '../../../../redux/milestone-management/milestone.selector';
import {
  resetUpdateMilestone,
  updateMilestone,
} from '../../../../redux/milestone-management/milestone-management.action';
import {
  getUserAuthToken,
  getUserData,
} from '../../../../redux/user-redux/user.selectors';

const MilestoneApprovalModal = ({ handelClose, milestoneNr, milestoneId }) => {
  const [description, setDescription] = React.useState('');
  const authToken = useSelector(getUserAuthToken);
  const currentUser = useSelector(getUserData);
  const isUpdateMilestoneLoading = useSelector(getUpdateMilestoneLoading);
  const updateMilestoneSuccess = useSelector(getUpdatetMilestoneSuccess);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleApprovalOfMilestone = (e) => {
    e.preventDefault();
    const currentData = {
      authToken,
      desc: description,
      userId: currentUser.id,
      date: moment(new Date()).format('DD MMM YYYY'),
      milestoneId,
    };
    dispatch(updateMilestone(currentData));
  };

  React.useEffect(() => {
    if (updateMilestoneSuccess) {
      handelClose();
      dispatch(resetUpdateMilestone());
    }
  }, [isUpdateMilestoneLoading]);

  return (
    <div className="milestone-approval-modal-base">
      <GlobalSpinner isOpen={isUpdateMilestoneLoading} />
      <div className="milestone-approval-modal-header">
        <span className="milestone-approval-left" />
        <h3 className="edit-modal-header-text">{t('reasonOfApproval')}</h3>
      </div>
      <div className="milestone-approval-modal-body">
        <div>
          <label>{t('milestonenr')}</label>
          <input disabled value={milestoneNr} />
        </div>
        <div>
          <label>{t('description')}</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
            value={description}
          />
        </div>
      </div>
      <div className="milestone-approval-submit-div">
        <span
          className="milestone-approval-button-cancel"
          onClick={handelClose}
        >
          {t('cancel')}
        </span>
        <button
          className="handle-approve-button"
          onClick={handleApprovalOfMilestone}
          type="button"
        >
          {t('approveMilestone')}
        </button>
      </div>
    </div>
  );
};

/* eslint-disable */
MilestoneApprovalModal.propTypes = {
  handelClose: PropTypes.func,
  milestoneNr: PropTypes.number,
  milestoneId: PropTypes.any,
};

export default MilestoneApprovalModal;
