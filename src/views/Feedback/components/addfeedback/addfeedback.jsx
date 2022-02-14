import 'react-toastify/dist/ReactToastify.css';
import './addfeedback.scss';

import { yupResolver } from '@hookform/resolvers/yup';
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import {
  addNewFeedback,
  resetNewFeedback,
} from '../../../../redux/feedback-redux/feedback.actions';
import {
  getAddFeedbackError,
  getAddFeedbackSuccess,
  getFeebackImage,
} from '../../../../redux/feedback-redux/feedback.selector';
import {
  getUserAuthToken,
  getUserData,
} from '../../../../redux/user-redux/user.selectors';
import schema from './schema';
import UploadDocumentsModal from './upload.documents.modal';

const AddFeedback = ({ isOpen, isClose }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const { t } = useTranslation();

  // const [feedbackImage, setfeedbackImage] = React.useState('');
  const [rating, setRating] = React.useState('');
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const closeDrawer = () => {
    isClose(false);
  };

  const ratingValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const dispatch = useDispatch();
  const authToken = useSelector(getUserAuthToken);
  const userData = useSelector(getUserData);
  const addFeedbackSuccess = useSelector(getAddFeedbackSuccess);
  const addFeedbackError = useSelector(getAddFeedbackError);
  const feedbackImage = useSelector(getFeebackImage);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  /* eslint-disable */
  const onAddFeedbackSubmit = (data) => {
    if (rating) {
      data.satisfactionLevel = rating;
    }

    if (feedbackImage) {
      data.documentDetails = feedbackImage;
    }

    data.idUser = userData.id;
    console.log(authToken);
    const dataToSend = { authToken, feedBackDetails: data };
    dispatch(addNewFeedback(dataToSend));
  };
  /* eslint-enable */

  React.useEffect(() => {
    if (addFeedbackSuccess) {
      toast.success('Feedback Added Successfully!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setRating('');
      reset();
      dispatch(resetNewFeedback());
      closeDrawer();
    } else if (addFeedbackError) {
      toast.error('Failed to add Feedback!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(resetNewFeedback());
    }
  }, [addFeedbackSuccess, addFeedbackError]);

  return (
    <>
      <Modal onClose={handleModalClose} open={modalOpen}>
        <UploadDocumentsModal />
      </Modal>
      <Drawer anchor="right" onClose={closeDrawer} open={isOpen}>
        {/* <GlobalSpinner isOpen={isLoading} /> */}
        <Box
          className="add-feedback"
          role="presentation"
          sx={{ width: 400, padding: 3 }}
        >
          <h3 className="side-head">{t('addFeedback')}</h3>
          <form onSubmit={handleSubmit(onAddFeedbackSubmit)}>
            <div className="form_input_container">
              <label className="form_label" htmlFor="Address">
                {t('address')}
              </label>
              <input
                className="form_inputs"
                id="Address"
                type="text"
                {...register('address')}
              />
              <span className="form_error"> {errors.address?.message}</span>
            </div>
            <div className="form_input_container">
              <label className="form_label" htmlFor="City">
                {t('city')}
              </label>
              <input
                className="form_inputs"
                id="City"
                type="text"
                {...register('city')}
              />

              <span className="form_error"> {errors.city?.message}</span>
            </div>
            <div className="form_input_container">
              <label className="form_label" htmlFor="ZipCode">
                {t('zipCode')}
              </label>
              <input
                className="form_inputs"
                id="ZipCode"
                type="number"
                {...register('zipCode')}
              />
              <span className="form_error"> {errors.zipCode?.message}</span>
            </div>
            <div className="form_input_container">
              <label className="form_label" htmlFor="Comment">
                {t('comment')}
              </label>
              <textarea
                className="form_textarea_input"
                id="Comment"
                rows="3"
                {...register('comment')}
              />
              <span className="form_error"> {errors.comment?.message}</span>
            </div>
            <div className="form_input_container">
              <label className="form_label" htmlFor="Satisfaction">
                {t('satisfaction')}
              </label>
              <div className="sat-con">
                {ratingValues.map((val) => (
                  <div
                    key={val}
                    className={rating === val ? 'active' : ''}
                    onClick={() => setRating(val)}
                  >
                    {val}
                  </div>
                ))}
                {/* <span className="form_error"></span> */}
              </div>
            </div>
            <div className="form_input_container">
              <label className="form_label" htmlFor="Upload">
                {t('upload')}{' '}
              </label>
              <div
                className="file_upload_inputs"
                disabled
                id="Upload"
                onClick={handleModalOpen}
              >
                {t('selectFileToUpload')}
              </div>
            </div>
            <div className="btn-btm">
              <button
                className="transparent-btn"
                onClick={closeDrawer}
                type="button"
              >
                {t('cancel')}
              </button>
              <button className="orange-btn" type="submit">
                {t('submit')}
              </button>
            </div>
          </form>
        </Box>
      </Drawer>
    </>
  );
};

AddFeedback.propTypes = {
  isOpen: PropTypes.func.isRequired,
  isClose: PropTypes.func.isRequired,
};

export default AddFeedback;
