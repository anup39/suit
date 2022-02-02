import './ActivityReport.scss';

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

const ActivityReport = () => {
  const { t } = useTranslation();
  const [rejectionReason, setRejectionReason] = React.useState('');

  const fieldLogData = useSelector(getfieldlogs);
  const authToken = useSelector(getUserAuthToken);
  const activityReportData = fieldLogData?.activityTask;
  const [activityTask, setactivityTask] = React.useState(
    fieldLogData.activityTask[0]
  );

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
          fieldlogId: activityReportData?.fieldlogId,
          taskId: activityReportData?.taskId,
          isApproved: false,
          rejectionNote: '',
        },
      };

      dispatch(changeFieldLogStatus(data));
    }
  };

  const handleCrtabchange = (event, value) => {
    setactivityTask(activityReportData[value]);
  };
  const handelAccept = () => {
    const data = {
      authToken,
      taskData: {
        fieldlogId: activityReportData?.fieldlogId,
        taskId: activityReportData?.taskId,
        isApproved: true,
        rejectionNote: '',
      },
    };

    dispatch(changeFieldLogStatus(data));
  };

  return (
    <div className="activity-report-base">
      <EditModalHeaders headerName={t('activityreport')} />
      <Tabs onChange={handleCrtabchange}>
        {activityReportData.length > 0 ? (
          activityReportData.map((p) => (
            <Tab key={p?.fieldlogId} label={p?.fieldlogId}>
              {' '}
            </Tab>
          ))
        ) : (
          <div className="change-request-content-no-data-found">
            <h5> No Data Found!</h5>
          </div>
        )}
      </Tabs>
      {activityTask && activityTask !== null && activityTask !== undefined ? (
        <>
          <div>
            <div className="activity-report-content">
              <div>
                <div className="activity-report-content-body">
                  <div className="activity-report-inputs-div">
                    <span>
                      <p>{t('company')}</p>
                      <div className="activity-report-data">
                        {' '}
                        {!activityTask?.companyName
                          ? '-'
                          : activityTask?.companyName}{' '}
                      </div>
                    </span>

                    <span>
                      <p>{t('projectName')}</p>
                      <div className="activity-report-data">
                        {' '}
                        {!activityTask?.projectId
                          ? '-'
                          : activityTask?.projectId}
                      </div>
                    </span>

                    <span>
                      <p>{t('reportDate')}</p>
                      <div className="activity-report-data">
                        {' '}
                        {!activityTask?.activityReportDate
                          ? '-'
                          : activityTask?.activityReportDate}{' '}
                      </div>
                    </span>

                    <span>
                      <p>{t('reportnr')}</p>
                      <div className="activity-report-data">
                        {' '}
                        {!activityTask?.activityReportnumber
                          ? '-'
                          : activityTask?.activityReportnumber}{' '}
                      </div>
                    </span>
                  </div>

                  <span>
                    <p>{t('sendToCompany')}</p>
                    <div className="activity-report-data">
                      {activityTask?.companyFlag}
                    </div>
                  </span>

                  <span>
                    <p>{t('activity')}</p>
                    <textarea disabled rows="5" />
                  </span>

                  <span className="activity-report-data-rejection-note">
                    {' '}
                    <p>Reason For Rejection</p>
                    <textarea
                      cols={5}
                      onChange={(e) => setRejectionReason(e.target.value)}
                      value={rejectionReason}
                    />
                  </span>

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
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <button className="activity-close-button" type="button">
              {' '}
              {t('close')}
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ActivityReport;
