import './WebexMessages.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import {
  addNewMessage,
  resetAddNewMessage,
} from '../../../../redux/webex-redux/webex.actions';
import {
  getAddMessageSuccess,
  getIfAddMesssageLoading,
} from '../../../../redux/webex-redux/webex.selector';
import GlobalSpinner from '../../Spinners/GlobalSpinner';

const WebexMessages = ({ handleClose, roomId }) => {
  const [message, setMessage] = React.useState('');
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

    if (!message) {
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
      message,
    };

    dispatch(addNewMessage(dataToSend));
  };

  React.useEffect(() => {
    if (addMessageSuccess) {
      handleClose();
      dispatch(resetAddNewMessage());
    }
  }, [isAddMessageLoading]);

  return (
    <div className="webex-messages-base">
      <GlobalSpinner isOpen={isAddMessageLoading} />
      <div className="webex-messages-head">Add New Message</div>
      <div className="webex-message-base-body">
        <label>Message</label>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <div className="webex-message-control">
          <span onClick={handleClose}>Cancel</span>
          <span className="webex-message-yes" onClick={handleAdd}>
            Send
          </span>
        </div>
      </div>
    </div>
  );
};

WebexMessages.propTypes = {
  handleClose: PropTypes.func.isRequired,
  roomId: PropTypes.isRequired,
};

export default WebexMessages;
