import './WebexFiles.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { resetAddNewMessage } from '../../../../redux/webex-redux/webex.actions';
import {
  getAddMessageSuccess,
  getIfAddMesssageLoading,
} from '../../../../redux/webex-redux/webex.selector';
import GlobalSpinner from '../../Spinners/GlobalSpinner';

const WebexFiles = ({ handleClose, roomId }) => {
  const [files, setFiles] = React.useState('');
  const isAddMessageLoading = useSelector(getIfAddMesssageLoading);
  const addMessageSuccess = useSelector(getAddMessageSuccess);

  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!roomId) {
      toast.warn('Room Not Found!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (!files) {
      toast.warn('Message Cannot Be Empty!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    const dataToSend = {
      roomId,
      imageUrl: files,
    };

    console.log(dataToSend);
  };

  React.useEffect(() => {
    if (addMessageSuccess) {
      handleClose();
      dispatch(resetAddNewMessage());
    }
  }, [isAddMessageLoading]);

  return (
    <div className="webex-files-base">
      <GlobalSpinner isOpen={isAddMessageLoading} />
      <div className="webex-files-head">Add New Files</div>
      <div className="webex-files-base-body">
        <label>New Files</label>
        <input onChange={(e) => setFiles(e.target.files[0])} type="file" />

        <div className="webex-files-control">
          <span onClick={handleClose}>Cancel</span>
          <span className="webex-files-yes" onClick={handleAdd}>
            Send
          </span>
        </div>
      </div>
    </div>
  );
};

WebexFiles.propTypes = {
  handleClose: PropTypes.func.isRequired,
  roomId: PropTypes.isRequired,
};

export default WebexFiles;
