import './ActivityReport.scss';

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
  const activityReportData = fieldLogData?.activityTask[0];

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
      {activityReportData ? (
        <>
          <div>
            <div className="activity-report-content">
              <div>
                <div className="activity-report-content-header">
                  <span>Activity Report 1</span>
                </div>
                <div className="activity-report-content-body">
                  <div className="activity-report-inputs-div">
                    <span>
                      <p>{t('company')}</p>
                      <div className="activity-report-data">
                        {' '}
                        {!activityReportData?.companyName
                          ? '-'
                          : activityReportData?.companyName}{' '}
                      </div>
                    </span>

                    <span>
                      <p>{t('projectName')}</p>
                      <div className="activity-report-data">
                        {' '}
                        {!activityReportData?.projectId
                          ? '-'
                          : activityReportData?.projectId}
                      </div>
                    </span>

                    <span>
                      <p>{t('reportDate')}</p>
                      <div className="activity-report-data">
                        {' '}
                        {!activityReportData?.activityReportDate
                          ? '-'
                          : activityReportData?.activityReportDate}{' '}
                      </div>
                    </span>

                    <span>
                      <p>{t('reportnr')}</p>
                      <div className="activity-report-data">
                        {' '}
                        {!activityReportData?.activityReportnumber
                          ? '-'
                          : activityReportData?.activityReportnumber}{' '}
                      </div>
                    </span>
                  </div>

                  <span>
                    <p>{t('sendToCompany')}</p>
                    <div className="activity-report-data">
                      {activityReportData?.companyFlag}
                    </div>
                    {/* <select className="activity-report-select">
                <option value="">Select An Option</option>
                <option value={1}>Yes</option>
                <option value={
                  0}>No</option>
              </select> */}
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
      ) : (
        <div className="activity-report-content-no-data-found">
          <h5> No Data Found!</h5>
        </div>
      )}
    </div>
  );
};

export default ActivityReport;
