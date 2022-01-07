import 'react-toastify/dist/ReactToastify.css';
import './addfeedback.scss';

import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import React from 'react';

import UploadDocumentsModal from './upload.documents.modal';

// eslint-disable-next-line react/display-name
const AddFeedback = ({ isOpen, isClose }) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const closeDrawer = () => {
    isClose(false);
  };
  const handelApprove = () => {
    handleModalOpen();
  };

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
          sx={{ width: 467, padding: 3 }}
        >
          <h3 className="side-head">Add Feedback</h3>
          <div className="form_input_container">
            <label className="form_label" htmlFor="Address">
              Address
            </label>
            <input className="form_input" id="Address" type="text" />
            <span className="form_error">message</span>
          </div>
          <div className="form_input_container">
            <label className="form_label" htmlFor="City">
              City
            </label>
            <input className="form_input" id="City" type="text" />
          </div>
          <div className="form_input_container">
            <label className="form_label" htmlFor="ZipCode">
              Zip Code
            </label>
            <input className="form_input" id="ZipCode" type="text" />
          </div>
          <div className="form_input_container">
            <label className="form_label" htmlFor="Comment">
              Comment
            </label>
            <textarea className="form_input" id="Comment" rows="3" />
          </div>
          <div className="form_input_container">
            <label className="form_label" htmlFor="Satisfaction">
              Satisfaction{' '}
            </label>
            <div className="sat-con">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div className="active">9</div>
              <div>10</div>
            </div>
          </div>
          <div className="form_input_container">
            <label className="form_label" htmlFor="Upload">
              Upload{' '}
            </label>
            <input className="form_input" id="Upload" type="text" />
          </div>
          <div className="btn-btm">
            <button className="transparent-btn" type="button">
              Cancel
            </button>
            <button
              className="orange-btn"
              onClick={handelApprove}
              type="button"
            >
              Submit
            </button>
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default AddFeedback;
