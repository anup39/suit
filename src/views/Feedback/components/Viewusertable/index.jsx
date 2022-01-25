import './viewusertable.scss';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import LoadingSpinner from '../../../../components/shared/LoadingSpinner/LoadingSpinner';
// import Datagrid from './datagrid';
import Pagination from '../../../../components/shared/Pagination/Pagination';
import GlobalSpinner from '../../../../components/shared/Spinners/GlobalSpinner';
import {
  getAllFeedback,
  resetDeleteFeedback,
} from '../../../../redux/feedback-redux/feedback.actions';
import {
  getDeleteFeedbackError,
  getDeleteFeedbackSuccess,
  getIsDeleteFeedbackLoading,
  getIsListFeedbackLoading,
  getListAllFeedback,
} from '../../../../redux/feedback-redux/feedback.selector';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';

const ViewUserTable = () => {
  const dispatch = useDispatch();
  const authToken = useSelector(getUserAuthToken);
  const feedbackList = useSelector(getListAllFeedback);
  const isFeedbackLoading = useSelector(getIsListFeedbackLoading);
  const isDeleteFeedbackLoading = useSelector(getIsDeleteFeedbackLoading);
  const deleteFeedbackError = useSelector(getDeleteFeedbackError);
  const deleteFeedbackSuccess = useSelector(getDeleteFeedbackSuccess);
  const { t } = useTranslation();

  React.useEffect(() => {
    if (!feedbackList) {
      dispatch(getAllFeedback(authToken));
    } else if (deleteFeedbackSuccess) {
      toast.success('Feedback Deleted Successfully!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(resetDeleteFeedback());
      setTimeout(() => {
        dispatch(getAllFeedback(authToken));
      }, 1000);
    } else if (deleteFeedbackError) {
      toast.error('Failed To Delete Feedback!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(resetDeleteFeedback());
    }
  }, [deleteFeedbackError, deleteFeedbackSuccess]);
  return (
    <>
      <GlobalSpinner isOpen={isDeleteFeedbackLoading} />
      <div className="table-head-grid table-header-grid">
        {/* <div className="table-check">
          <input type="checkbox" />
        </div> */}
        <div className="table-user">{t('username')}</div>
        <div className="table-date">{t('date')}</div>
        <div className="table-address">{t('address')}</div>
        <div className="table-city">{t('city')}</div>
        <div className="table-satis">{t('satisfaction')}</div>
        <div className="table-doc">{t('documents')}</div>
        <div className="table-actions">{t('actions')}</div>
      </div>
      <div className="tabletbody">
        {isFeedbackLoading ? (
          <LoadingSpinner />
        ) : (
          feedbackList && (
            <Pagination
              componentNo={6}
              itemData={feedbackList}
              itemsPerPage={10}
            />
          )
        )}
      </div>
    </>
  );
};

export default ViewUserTable;
