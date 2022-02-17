/* eslint-disable react/no-multi-comp */
/* eslint-disable react/jsx-key */
import './ImageDocuments.scss';

import DoneIcon from '@mui/icons-material/Done';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { Modal } from '@mui/material';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';

import { getfieldlogs } from '../../../../../../../../../redux/Management-of-field-activities/management-field-activities.selectors';
import { getCurrentUserRole } from '../../../../../../../../../redux/user-redux/user.selectors';
import VerifierMessage from '../../../verifier-message/VerifierMessage';
// import EditModalHeaders from '../../../EditModalHeaders/EditModalHeaders';

const ImageDocuments = () => {
  const { t } = useTranslation();
  const fieldLogs = useSelector(getfieldlogs);
  const currentUserRole = useSelector(getCurrentUserRole);
  const [taskId, settaskId] = React.useState('');
  const [fieldid, setfieldid] = React.useState('');
  const [MessageModalOpen, setIsMessageModalOpen] = React.useState(false);

  const imageData = fieldLogs.imageTask;

  const handleMessageModalClose = () => {
    setIsMessageModalOpen(false);
  };

  const handledata = (fieldlogId, taskid) => {
    console.log(fieldlogId);
    settaskId(taskid);
    setfieldid(fieldlogId);
    setIsMessageModalOpen(true);
  };

  let columns;
  if (currentUserRole === 'PlanA_admin') {
    columns = useMemo(
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
              <span
                className="view-docs-in-ecm"
                onClick={() => window.open(data.value, '_blank')}
              >
                View Doc
              </span>
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
  } else {
    columns = useMemo(
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
              <span
                className="view-docs-in-ecm"
                onClick={() => window.open(data.value, '_blank')}
              >
                View Doc
              </span>
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
      ],
      []
    );
  }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: imageData,
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

      <div className="list row">
        <div className="col-md-12 list table-theme">
          {imageData && imageData.length > 0 ? (
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
              <tbody {...getTableBodyProps()}>
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
    </>
  );
};

export default ImageDocuments;
