import './OtherDocuments.scss';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { changeFieldLogStatus } from '../../../../../../../../../redux/Management-of-field-activities/management-field-activities.action';
import { getfieldlogs } from '../../../../../../../../../redux/Management-of-field-activities/management-field-activities.selectors';
import { getUserAuthToken } from '../../../../../../../../../redux/user-redux/user.selectors';
// import EditModalHeaders  from '../../../EditModalHeaders/EditModalHeaders'

const OtherDocuments = () => {
  const { t } = useTranslation();
  const fieldLogs = useSelector(getfieldlogs);
  const [rejectionReason, setRejectionReason] = React.useState('');
  const authToken = useSelector(getUserAuthToken);

  const dispatch = useDispatch();

  const documentsData = fieldLogs.notesTask;
  const [notesTask, setnotesTask] = React.useState(fieldLogs.notesTask[0]);

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
          fieldlogId: documentsData?.fieldlogId,
          taskId: documentsData?.taskId,
          isApproved: false,
          rejectionNote: '',
        },
      };

      dispatch(changeFieldLogStatus(data));
    }
  };

  const handleCrtabchange = (event, value) => {
    setnotesTask(documentsData[value]);
  };
  const handelAccept = () => {
    const data = {
      authToken,
      taskData: {
        fieldlogId: documentsData?.fieldlogId,
        taskId: documentsData?.taskId,
        isApproved: true,
        rejectionNote: '',
      },
    };

    dispatch(changeFieldLogStatus(data));
  };

  return (
    <div>
      {/* <EditModalHeaders headerName={t('changerequest')} /> */}
      <Tabs onChange={handleCrtabchange}>
        {documentsData.length > 0 ? (
          documentsData.map((p) => (
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
      {notesTask && notesTask !== null && notesTask !== undefined ? (
        <>
          <div className="field-log-data">
            <span className="field-log-data-projectId">
              <p>Project Id</p>
              <div> {!notesTask?.projectId ? '-' : notesTask?.projectId} </div>
            </span>
            <span className="field-log-data-taskName">
              <p>Task Name</p>
              <div> {!notesTask?.taskName ? '-' : notesTask?.taskName} </div>
            </span>
            <span className="field-log-data-time">
              <p>Time</p>
              <div>{!notesTask?.fieldTime ? '-' : notesTask?.fieldTime}</div>
            </span>

            <span className="field-log-data-date">
              <p>Date</p>
              <div>{!notesTask?.fieldDate ? '-' : notesTask?.fieldDate}</div>
            </span>
            <span className="field-log-data-note">
              <p>Note</p>
              <div>{!notesTask?.fieldNote ? '-' : notesTask?.fieldNote}</div>
            </span>
            <span className="field-log-data-status">
              <p>Status</p>
              <div>
                {!notesTask?.taskNotification
                  ? '-'
                  : notesTask?.taskNotification}
              </div>
            </span>
            <span className="field-log-data-barcode">
              <p>Barcode Detection</p>
              <div>-</div>
            </span>
            <span className="field-log-data-field-operator">
              {' '}
              <p>Field Operator Id</p>
              <div>
                {!notesTask?.fieldOperatorId ? '-' : notesTask?.fieldOperatorId}
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

export default OtherDocuments;
