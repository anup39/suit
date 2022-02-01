import './ChangeRequest.scss';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { changeFieldLogStatus } from '../../../../../../../redux/Management-of-field-activities/management-field-activities.action';
import { getfieldlogs } from '../../../../../../../redux/Management-of-field-activities/management-field-activities.selectors';
import { getUserAuthToken } from '../../../../../../../redux/user-redux/user.selectors';
import EditModalHeaders from '../EditModalHeaders/EditModalHeaders';


const ChangeRequest = () => {
  const { t } = useTranslation();

  const fieldLogData = useSelector(getfieldlogs);
  const authToken = useSelector(getUserAuthToken);

  const chnageRequestData = fieldLogData.changeTask;

  const [rejectionReason, setRejectionReason] = React.useState('');
  const [changeRequest, setChangeRequest] = React.useState(fieldLogData.changeTask[0]);

 const dispatch = useDispatch();

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
          fieldlogId: chnageRequestData?.fieldlogId,
          taskId: chnageRequestData?.taskId,
          isApproved: false,
          rejectionNote: '',
        },
      };

      dispatch(changeFieldLogStatus(data));
    }
  };

  const handleCrtabchange = (event, value) => {
    setChangeRequest(chnageRequestData[value])

  };
  const handelAccept = () => {
    const data = {
      authToken,
      taskData: {
        fieldlogId: changeRequest?.fieldlogId,
        taskId: changeRequest?.taskId,
        isApproved: true,
        rejectionNote: '',
      },
    };

    dispatch(changeFieldLogStatus(data));
  };

  return (
    <div className="change-request-base">
      <EditModalHeaders headerName={t('changerequest')} />
      <Tabs onChange={handleCrtabchange}>
      {(chnageRequestData.length > 0) ? chnageRequestData.map ( p => (
        <Tab key={p.fieldlogId} label={p.fieldlogId}> </Tab>
      )):
      (<div className="change-request-content-no-data-found">
          <h5> No Data Found!</h5>
        </div>
      )}
      </Tabs>
         <div className="change-request-body-div">
         {changeRequest && changeRequest !== null && changeRequest !== undefined ? (
            <div>
              <div className="change-request-body-header">
                <p> {!changeRequest?.taskId
                        ? '-'
                        : changeRequest?.taskId}</p>
              </div>
              <div className="change-request-body">
                <div className="change-body-request-details">
                  <span>
                    <p>{t('companyName')}</p>
                    <div className="change-request-details">
                      {!changeRequest?.companyName
                        ? '-'
                        : changeRequest?.companyName}
                    </div>
                  </span>

                  <span>
                    <p>{t('projectName')}</p>
                    <div className="change-request-details">
                      {!changeRequest?.projectName
                        ? '-'
                        : changeRequest?.projectName}
                    </div>
                  </span>

                  <span>
                    <p>{t('requetsDate')}</p>
                    <div className="change-request-details">
                      {!changeRequest?.requestDate
                        ? '-'
                        : changeRequest?.requestDate}
                    </div>
                  </span>

                  <span>
                    <p>{t('requestnr')}</p>
                    <div className="change-request-details">
                      {' '}
                      {!changeRequest?.taskNumber
                        ? '-'
                        : changeRequest?.taskNumber}{' '}
                    </div>
                  </span>
                </div>

                <div>
                  <p>{t('changerequest')}</p>
                  <div className="change-request-description-details">
                    {!changeRequest?.fieldNote
                      ? '-'
                      : changeRequest?.fieldNote}
                  </div>
                </div>
                {!changeRequest?.verifierCheck ? <div className="change-request-buttons-div">
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
                : null}
                {changeRequest?.rejectionNote ?
                <span>
                  <p>{t('reasonofRejection')}</p>
                  <textarea
                    className="reason-of-rejection-details-text-area"
                    onChange={(e) => setRejectionReason(e.target.value)}
                    value={changeRequest.rejectionNote}
                  />
                </span>
                : 
                <span>
                <p>{t('reasonofRejection')}</p>
                <textarea
                  className="reason-of-rejection-details-text-area"
                  onChange={(e) => setRejectionReason(e.target.value)}
                  value={rejectionReason}
                />
              </span>
                }
              </div>
            </div>
            ) : null }
          </div>
          <div className="text-right">
            <button className="close-button" type="button">
              {t('close')}
            </button>
          </div>
    </div>
  );
};

export default ChangeRequest;