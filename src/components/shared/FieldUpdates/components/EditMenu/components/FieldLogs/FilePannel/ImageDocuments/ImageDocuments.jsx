import './ImageDocuments.scss';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { changeFieldLogStatus } from '../../../../../../../../../redux/Management-of-field-activities/management-field-activities.action';
import { getfieldlogs } from '../../../../../../../../../redux/Management-of-field-activities/management-field-activities.selectors';
import { getUserAuthToken } from '../../../../../../../../../redux/user-redux/user.selectors';
// import EditModalHeaders from '../../../EditModalHeaders/EditModalHeaders';

const ImageDocuments = () => {
  const [rejectionReason, setRejectionReason] = React.useState('');

  const { t } = useTranslation();
  const fieldLogs = useSelector(getfieldlogs);
  const authToken = useSelector(getUserAuthToken);

  const dispatch = useDispatch();

  const imageData = fieldLogs.imageTask;
  const [imageTask, setimageTask] = React.useState(fieldLogs.imageTask[0]);

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

  const handleCrtabchange = (event, value) => {
    setimageTask(imageData[value]);
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
      {/* <EditModalHeaders headerName={t('fieldlogimage')} /> */}
      <Tabs onChange={handleCrtabchange}>
        {imageData.length > 0 ? (
          imageData.map((p) => (
            <Tab key={p.fieldlogId} label={p.fieldlogId}>
              {' '}
            </Tab>
          ))
        ) : (
          <div className="change-request-content-no-data-found">
            <h5> No Data Found!</h5>
          </div>
        )}
      </Tabs>
      {imageTask && imageTask !== null && imageTask !== undefined ? (
        <>
          <div className="field-log-data">
            <span className="field-log-data-projectId">
              <p>Project Id</p>
              <div> {!imageTask?.projectId ? '-' : imageTask?.projectId} </div>
            </span>
            <span className="field-log-data-taskName">
              <p>Task Name</p>
              <div>
                {!imageTask?.projectName ? '-' : imageTask?.projectName}
              </div>
            </span>
            <span className="field-log-data-time">
              <p>Time</p>
              <div>{!imageTask?.fieldTime ? '-' : imageTask?.fieldTime}</div>
            </span>

            <span className="field-log-data-date">
              <p>Date</p>
              <div>{!imageTask?.fieldDate ? '-' : imageTask?.fieldDate}</div>
            </span>
            <span className="field-log-data-note">
              <p>Note</p>
              <div>
                {!imageTask?.verifierNote ? '-' : imageTask?.verifierNote}
              </div>
            </span>
            <span className="field-log-data-status">
              <p>Status</p>
              <div>
                {!imageTask?.taskNotification
                  ? '-'
                  : imageTask?.taskNotification}
              </div>
            </span>
            <span className="field-log-data-barcode">
              <p>Barcode Detection</p>
              <div>
                {!imageTask?.barCodeDetection
                  ? '-'
                  : imageTask?.barCodeDetection}
              </div>
            </span>
            <span className="field-log-data-field-operator">
              {' '}
              <p>Field Operator Id</p>
              <div>
                {!imageTask?.fieldOperatorId ? '-' : imageTask?.fieldOperatorId}
              </div>
            </span>

            <span className="field-log-data-barcode-value">
              {' '}
              <p>Barcode Value</p>
              <div>
                {!imageTask?.barCodeValues ? '-' : imageTask?.barCodeValues}
              </div>
            </span>

            <span className="field-log-data-lat">
              {' '}
              <p>Latitude</p>
              <div>{!imageTask?.lat ? '-' : imageTask?.lat}</div>
            </span>

            <span className="field-log-data-long">
              {' '}
              <p>Longitude</p>
              <div>{!imageTask?.lon ? '-' : imageTask?.lon}</div>
            </span>

            <span className="field-log-data-img-address">
              {' '}
              <p>Image Address</p>
              <div>
                {!imageTask?.imageAddress ? '-' : imageTask?.imageAddress}
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
      ) : null}
    </div>
  );
};

export default ImageDocuments;
