import 'react-toastify/dist/ReactToastify.css';
import './addfeedback.scss';

import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import React from 'react';

import UploadDocumentsModal from './upload.documents.modal';

const AddFeedback = ({ isOpen, isClose }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [rating, setRating] = React.useState('');
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const closeDrawer = () => {
    isClose(false);
  };

  const ratingValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
          <h3 className="side-head">Add Feedback</h3>
          <div className="form_input_container">
            <label className="form_label" htmlFor="Address">
              Address
            </label>
            <input className="form_inputs" id="Address" type="text" />
            <span className="form_error">message</span>
          </div>
          <div className="form_input_container">
            <label className="form_label" htmlFor="City">
              City
            </label>
            <input className="form_inputs" id="City" type="text" />
          </div>
          <div className="form_input_container">
            <label className="form_label" htmlFor="ZipCode">
              Zip Code
            </label>
            <input className="form_inputs" id="ZipCode" type="text" />
          </div>
          <div className="form_input_container">
            <label className="form_label" htmlFor="Comment">
              Comment
            </label>
            <textarea className="form_textarea_input" id="Comment" rows="3" />
          </div>
          <div className="form_input_container">
            <label className="form_label" htmlFor="Satisfaction">
              Satisfaction{' '}
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
            </div>
          </div>
          <div className="form_input_container">
            <label className="form_label" htmlFor="Upload">
              Upload{' '}
            </label>
            <div
              className="file_upload_inputs"
              disabled
              id="Upload"
              onClick={handleModalOpen}
            >
              {' '}
              Select File To Upload{' '}
            </div>
          </div>
          <div className="btn-btm">
            <button className="transparent-btn" type="button">
              Cancel
            </button>
            <button className="orange-btn" type="button">
              Submit
            </button>
          </div>
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
