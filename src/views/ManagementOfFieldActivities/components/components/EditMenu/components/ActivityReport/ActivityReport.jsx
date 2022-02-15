/* eslint-disable react/jsx-key */
/* eslint-disable react/no-multi-comp */
import './ActivityReport.scss';

import DoneIcon from '@mui/icons-material/Done';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';

import { getfieldlogs } from '../../../../../../../redux/Management-of-field-activities/management-field-activities.selectors';
import EditModalHeaders from '../EditModalHeaders/EditModalHeaders';
import VerifierMessage from '../verifier-message/VerifierMessage';

const ActivityReport = () => {
  const { t } = useTranslation();
  const fieldLogData = useSelector(getfieldlogs);
  const activityReportData = fieldLogData?.activityTask;

  const [taskId, settaskId] = React.useState('');
  const [fieldid, setfieldid] = React.useState('');
  const [MessageModalOpen, setIsMessageModalOpen] = React.useState(false);
  const handleMessageModalClose = () => {
    setIsMessageModalOpen(false);
  };

  const handledata = (fieldlogId, taskid) => {
    console.log(fieldlogId);
    settaskId(taskid);
    setfieldid(fieldlogId);
    setIsMessageModalOpen(true);
  };

  const columns = useMemo(
    () => [
      {
        Header: t('FieldDate'),
        accessor: 'fieldDate',
        minWidth: 30,
        width: 30,
      },
      {
        Header: t('FieldNote'),
        accessor: 'fieldNote',
        minWidth: 50,
        width: 50,
      },
      {
        Header: t('lat'),
        accessor: 'lat',
        minWidth: 10,
        width: 10,
      },
      {
        Header: t('lon'),
        accessor: 'lon',
        minWidth: 10,
        width: 10,
      },
      {
        Header: t('Status'),
        accessor: 'verifierCheck',
        Cell: (data) => {
          return data.value ? data.value : 'Not Verified';
        },
        minWidth: 30,
        width: 30,
      },
      {
        Header: t('FieldOperator'),
        accessor: 'fieldUser',
        minWidth: 30,
        width: 30,
      },
      {
        Header: t('Attachment'),
        accessor: 'docLink',
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return data.value ? (
            <a href={data.value} window="_blank">
              View Doc
            </a>
          ) : (
            ''
          );
        },
        minWidth: 30,
        width: 30,
      },
      {
        Header: t('VerifiedBy'),
        accessor: 'verifiedUser',
        minWidth: 30,
        width: 30,
      },
      {
        Header: t('Verifier Note'),
        accessor: 'verifierNote',
        minWidth: 30,
        width: 30,
      },
      {
        Header: t('Actions'),
        accessor: 'actions',
        minWidth: 60,
        width: 60,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          const taskid = data.row.original.taskId;
          const rowidx = data.row.original.fieldlogId;
          let disable = true;
          if (
            data.row.original.verifierCheck &&
            data.row.original.verifierCheck !== null
          ) {
            disable = true;
          } else {
            disable = false;
          }

          return (
            <div>
              {disable ? (
                <DoneIcon color="secondary" />
              ) : (
                <PendingActionsIcon
                  color="secondary"
                  onClick={() => handledata(rowidx, taskid)}
                />
              )}
            </div>
          );
        },
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: activityReportData,
    });

  return (
    <>
      <Modal onClose={handleMessageModalClose} open={MessageModalOpen}>
        <VerifierMessage
          fieldLogId={fieldid}
          handleClose={handleMessageModalClose}
          taskid={taskId}
        />
      </Modal>
      <div className="activity-report-base">
        <EditModalHeaders headerName={t('fieldLogs')} />

        <div className="field-log-content-div">
          <Box sx={{ pt: 2 }}>
            <div className="list row">
              <div className="col-md-12 list table-theme">
                {activityReportData && activityReportData.lenght > 0 ? (
                  <table
                    className="table table-striped"
                    {...getTableProps({
                      style: { textAlign: 'center', verticalAlign: 'middle' },
                    })}
                  >
                    <thead>
                      {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column) => (
                            <th
                              {...column.getHeaderProps({
                                style: {
                                  minWidth: column.minWidth,
                                  width: column.width,
                                },
                              })}
                            >
                              {column.render('Header')}
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody
                      {...getTableBodyProps()}
                      className="activity-report-table-body"
                    >
                      {rows.map((row) => {
                        prepareRow(row);
                        return (
                          <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                              return (
                                <td
                                  {...cell.getCellProps({
                                    style: {
                                      minWidth: cell.column.minWidth,
                                      width: cell.column.width,
                                    },
                                  })}
                                >
                                  {cell.render('Cell')}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                ) : (
                  <div className="field-logs-no-data-found">
                    <p>No Data Found!</p>
                  </div>
                )}
              </div>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};

export default ActivityReport;
