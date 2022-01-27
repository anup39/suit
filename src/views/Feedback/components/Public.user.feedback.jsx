// import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
// import Button from '@mui/material/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import LoadingSpinner from '../../../components/shared/LoadingSpinner/LoadingSpinner';
import Pagination from '../../../components/shared/Pagination/Pagination';
import GlobalSpinner from '../../../components/shared/Spinners/GlobalSpinner';
import {
  feedbackByUserId,
  resetDeleteFeedback,
  resetNewFeedback,
} from '../../../redux/feedback-redux/feedback.actions';
import {
  getAddFeedbackSuccess,
  getDeleteFeedbackError,
  getDeleteFeedbackSuccess,
  getFeebackByUserID,
  // getFeebackByUserIDError,
  getFeebackByUserIDLoading,
  getIsDeleteFeedbackLoading,
} from '../../../redux/feedback-redux/feedback.selector';
import {
  getUserAuthToken,
  getUserData,
} from '../../../redux/user-redux/user.selectors';
// import Datarow from './Datarow';
import MobileDataRow from './mobile.data.row';

const PublicUserFeedback = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const authToken = useSelector(getUserAuthToken);
  const userData = useSelector(getUserData);
  const isFeedbackLoading = useSelector(getFeebackByUserIDLoading);
  const feedbackData = useSelector(getFeebackByUserID);
  const isDeleteFeedbackLoading = useSelector(getIsDeleteFeedbackLoading);
  const deleteFeedbackError = useSelector(getDeleteFeedbackError);
  const deleteFeedbackSuccess = useSelector(getDeleteFeedbackSuccess);
  const feedBackSuccess = useSelector(getAddFeedbackSuccess);
  // const feedbackDataError = useSelector(getFeebackByUserIDError);

  React.useEffect(() => {
    if (!feedbackData) {
      const data = { authToken, userId: userData.id };
      dispatch(feedbackByUserId(data));
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
      const data = { authToken, userId: userData.id };
      dispatch(feedbackByUserId(data));
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
    } else if (feedBackSuccess) {
      const data = { authToken, userId: userData.id };
      dispatch(feedbackByUserId(data));
      dispatch(resetNewFeedback());
    }
  }, [deleteFeedbackError, deleteFeedbackSuccess, feedBackSuccess]);

  return (
    <div className="table-container">
      <GlobalSpinner isOpen={isDeleteFeedbackLoading} />
      <div className="table-container-head" />
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              {/* <th className="check-con" scope="col">
                {' '}
                <input type="checkbox" />
              </th> */}
              <th scope="col">{t('username')}</th>
              <th scope="col">{t('date')}</th>
              <th scope="col" style={{ width: '25%' }}>
                {t('address')}
              </th>
              <th scope="col">{t('city')}</th>
              <th scope="col">{t('satisfaction')}</th>
              <th scope="col" style={{ width: '15%' }}>
                {t('documents')}
              </th>
              <th scope="col">{t('actions')}</th>
            </tr>
          </thead>
          {isFeedbackLoading ? (
            <LoadingSpinner />
          ) : (
            feedbackData && (
              <Pagination
                componentNo={5}
                itemData={feedbackData}
                itemsPerPage={10}
              />
            )
          )}
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
      <div className="table-container-btm " />
      {/* <div className="table-container-btm ">
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
      </div> */}
    </div>
  );
};

export default PublicUserFeedback;
