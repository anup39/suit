import './WebexFiles.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import {
  addNewFile,
  resetWebexFile,
} from '../../../../redux/webex-redux/webex.actions';
import {
  getAddFileSuccess,
  getIfAddFileLoading,
} from '../../../../redux/webex-redux/webex.selector';
import GlobalSpinner from '../../Spinners/GlobalSpinner';

const WebexFiles = ({ handleClose, roomId }) => {
  const [files, setFiles] = React.useState('');
  const [message, setMessage] = React.useState('');
  const isAddFileLoading = useSelector(getIfAddFileLoading);
  const addFileSuccess = useSelector(getAddFileSuccess);

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
      toast.warn('Files Cannot Be Empty!', {
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

    // if (!message) {
    //   toast.warn('Files Cannot Be Empty!', {
    //     position: 'top-center',
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    //   return;
    // }

    const formData = new FormData();

    formData.append('roomId', roomId);
    formData.append('text', message);
    formData.append('files', files, files.name);

    dispatch(addNewFile(formData));
  };

  React.useEffect(() => {
    if (addFileSuccess) {
      handleClose();
      dispatch(resetWebexFile());
    }
  }, [isAddFileLoading]);

  return (
    <div className="webex-files-base">
      <GlobalSpinner isOpen={isAddFileLoading} />
      <div className="webex-files-head">Add New Files</div>
      <div className="webex-files-base-body">
        <label>Message</label>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          value={message}
        />

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
