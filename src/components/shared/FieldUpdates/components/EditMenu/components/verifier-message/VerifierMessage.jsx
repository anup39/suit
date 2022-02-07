import './VerifierMessage.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { changeFieldLogStatus } from '../../../../../../../redux/Management-of-field-activities/management-field-activities.action';
import { getUserAuthToken } from '../../../../../../../redux/user-redux/user.selectors';

const VerifierMessage = ({ handleClose, taskid, fieldLogId }) => {
  const [message, setMessage] = React.useState('');
  const authToken = useSelector(getUserAuthToken);
  const { t } = useTranslation();


  const dispatch = useDispatch();

  
  const handelReject = () => {
    if (!message) {
      toast.warn('Please Add A Reason For Rejection!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const data = {
        authToken,
        taskData: {
          fieldlogId: fieldLogId,
          taskId: taskid,
          isApproved: false,
          rejectionNote: '',
        },
      };

      dispatch(changeFieldLogStatus(data));
      handleClose();

    }
  };

 
  

  
  const handelAccept = () => {
    console.log(taskid)
    const data = {
      authToken,
      taskData: {
        fieldlogId: fieldLogId,
        taskId: taskid,
        isApproved: true,
        rejectionNote: '',
      },
    };
    dispatch(changeFieldLogStatus(data));
    handleClose();

  };



  return (
    <div className="webex-messages-base">
      <div className="webex-messages-head">Add Approval / Rejection Note</div>
      <div className="webex-message-base-body">
        <label>Reason</label>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <div className="webex-message-control">
        <button className="btn btn-dark"  id="cancel" onClick={() => handleClose()}  type="submit">
            <span>{t('Cancel')}</span>
        </button> 
          <button className="btn btn-warning"  id="reject" onClick={() => handelReject()}  type="submit">
              <span>{t('reject')}</span>
            </button>
          <button className="btn btn-success"  id="success" onClick={() => handelAccept()}  type="submit">
              <span>{t('accept')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

VerifierMessage.propTypes = {
  handleClose: PropTypes.func.isRequired,
  taskid: PropTypes.func.isRequired,
  fieldLogId: PropTypes.func.isRequired,
};

export default VerifierMessage;
