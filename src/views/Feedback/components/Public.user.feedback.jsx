import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Button from '@mui/material/Button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoadingSpinner from '../../../components/shared/LoadingSpinner/LoadingSpinner';
import { feedbackByUserId } from '../../../redux/feedback-redux/feedback.actions';
import {
  getFeebackByUserID,
  // getFeebackByUserIDError,
  getFeebackByUserIDLoading,
} from '../../../redux/feedback-redux/feedback.selector';
import {
  getUserAuthToken,
  getUserData,
} from '../../../redux/user-redux/user.selectors';
import Datarow from './Datarow';
import MobileDataRow from './mobile.data.row';

const PublicUserFeedback = () => {
  const dispatch = useDispatch();
  const authToken = useSelector(getUserAuthToken);
  const userData = useSelector(getUserData);
  const isFeedbackLoading = useSelector(getFeebackByUserIDLoading);
  const feedbackData = useSelector(getFeebackByUserID);
  // const feedbackDataError = useSelector(getFeebackByUserIDError);

  React.useEffect(() => {
    const data = { authToken, userId: userData.id };
    dispatch(feedbackByUserId(data));
  }, []);

  return (
    <div className="table-container">
      <div className="table-container-head" />
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              {/* <th className="check-con" scope="col">
                {' '}
                <input type="checkbox" />
              </th> */}
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
            {isFeedbackLoading ? (
              <LoadingSpinner />
            ) : (
              feedbackData &&
              feedbackData.map((val) => <Datarow key={val.id} data={val} />)
            )}
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
