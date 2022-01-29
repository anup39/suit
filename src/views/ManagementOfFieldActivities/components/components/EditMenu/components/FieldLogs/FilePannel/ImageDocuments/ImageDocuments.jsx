import './ImageDocuments.scss';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { changeFieldLogStatus } from '../../../../../../../../../redux/Management-of-field-activities/management-field-activities.action';
import { getfieldlogs } from '../../../../../../../../../redux/Management-of-field-activities/management-field-activities.selectors';
import { getUserAuthToken } from '../../../../../../../../../redux/user-redux/user.selectors';

const ImageDocuments = () => {
  const [rejectionReason, setRejectionReason] = React.useState('');

  const { t } = useTranslation();
  const fieldLogs = useSelector(getfieldlogs);
  const authToken = useSelector(getUserAuthToken);

  const dispatch = useDispatch();

  const imageData = fieldLogs.imageTask[0];

  const handelReject = () => {
    if (!rejectionReason) {
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
          fieldlogId: imageData?.fieldlogId,
          taskId: imageData?.taskId,
          isApproved: false,
          rejectionNote: '',
        },
      };

      dispatch(changeFieldLogStatus(data));
    }
  };
  const handelAccept = () => {
    const data = {
      authToken,
      taskData: {
        fieldlogId: imageData?.fieldlogId,
        taskId: imageData?.taskId,
        isApproved: true,
        rejectionNote: '',
      },
    };

    dispatch(changeFieldLogStatus(data));
  };

  return (
    <div>
      {imageData ? (
        <>
          <div className="field-log-data">
            <span className="field-log-data-projectId">
              <p>Project Id</p>
              <div> {!imageData?.projectId ? '-' : imageData?.projectId} </div>
            </span>
            <span className="field-log-data-taskName">
              <p>Task Name</p>
              <div>
                {!imageData?.projectName ? '-' : imageData?.projectName}
              </div>
            </span>
            <span className="field-log-data-time">
              <p>Time</p>
              <div>{!imageData?.fieldTime ? '-' : imageData?.fieldTime}</div>
            </span>

            <span className="field-log-data-date">
              <p>Date</p>
              <div>{!imageData?.fieldDate ? '-' : imageData?.fieldDate}</div>
            </span>
            <span className="field-log-data-note">
              <p>Note</p>
              <div>
                {!imageData?.verifierNote ? '-' : imageData?.verifierNote}
              </div>
            </span>
            <span className="field-log-data-logs">
              <p>Field Log</p>
              <div>{!imageData?.fieldlogId ? '-' : imageData?.fieldlogId}</div>
            </span>
            <span className="field-log-data-status">
              <p>Status</p>
              <div>---</div>
            </span>
            <span className="field-log-data-barcode">
              <p>Barcode Detection</p>
              <div>
                {!imageData?.barCodeDetection
                  ? '-'
                  : imageData?.barCodeDetection}
              </div>
            </span>
            <span className="field-log-data-user">
              {' '}
              <p>User</p>
              <div>Test User 1</div>
            </span>

            <span className="field-log-data-field-operator">
              {' '}
              <p>Field Operator Id</p>
              <div>
                {!imageData?.fieldOperatorId ? '-' : imageData?.fieldOperatorId}
              </div>
            </span>

            <span className="field-log-data-task-notification">
              {' '}
              <p>Task Notification</p>
              <div>
                {!imageData?.taskNotification
                  ? '-'
                  : imageData?.taskNotification}
              </div>
            </span>

            <span className="field-log-data-barcode-value">
              {' '}
              <p>Barcode Value</p>
              <div>
                {!imageData?.barCodeValues ? '-' : imageData?.barCodeValues}
              </div>
            </span>

            <span className="field-log-data-lat">
              {' '}
              <p>Latitude</p>
              <div>{!imageData?.lat ? '-' : imageData?.lat}</div>
            </span>

            <span className="field-log-data-long">
              {' '}
              <p>Longitude</p>
              <div>{!imageData?.lon ? '-' : imageData?.lon}</div>
            </span>

            <span className="field-log-data-img-address">
              {' '}
              <p>Image Address</p>
              <div>
                {!imageData?.imageAddress ? '-' : imageData?.imageAddress}
              </div>
            </span>

            <span className="field-log-data-rejection-note">
              {' '}
              <p>Reason For Rejection</p>
              <textarea
                cols={5}
                onChange={(e) => setRejectionReason(e.target.value)}
                value={rejectionReason}
              />
            </span>
          </div>

          <div className="change-request-buttons-div">
            <span
              className="change-request-button-reject"
              onClick={handelReject}
            >
              {t('reject')}
            </span>
            <span
              className="change-request-button-accept"
              onClick={handelAccept}
            >
              {t('accept')}
            </span>
          </div>
        </>
      ) : (
        <div className="image-document-content-no-data-found">
          <h5> No Data Found!</h5>
        </div>
      )}
    </div>
  );
};

export default ImageDocuments;
