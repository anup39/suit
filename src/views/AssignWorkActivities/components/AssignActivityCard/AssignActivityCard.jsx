import './AssignActivityCard.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import AreYouSure from '../../../../components/shared/AreYouSure/AreYouSure';
import {
  getIsSelectAll,
  getSelectedTaskList,
} from '../../../../redux/assign-worklist/assign-work-list.selector';
import {
  deselectOneTask,
  selectOneTask,
} from '../../../../redux/assign-worklist/assign-worklist.action';
import { getCompaniesList } from '../../../../redux/company-redux/company.selectors';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';
import { deleteTaskByID } from '../../../../redux/worklist-management-redux/worklist.actions';

const AssignActivityCard = ({
  projectName,
  companyName,
  taskId,
  taskName,
  taskDescription,
  isMilestone,
  type,
  status,
}) => {
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);
  const [checkBox, setCheckBox] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [actualCompanyName, setActualCompanyName] = React.useState('');
  const isAllSelected = useSelector(getIsSelectAll);
  const selectedTaskList = useSelector(getSelectedTaskList);
  const authToken = useSelector(getUserAuthToken);
  const dispatch = useDispatch();
  const companyList = useSelector(getCompaniesList);
  const { t } = useTranslation();

  const open = Boolean(menuAnchorEl);

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handelCheckbox = (e) => {
    setCheckBox(e.target.checked);

    if (e.target.checked) {
      dispatch(selectOneTask(taskId));
    } else {
      dispatch(deselectOneTask(taskId));
    }
  };

  const handleModalOpen = () => {
    handleMenuClose();
    setModalOpen(true);
  };
  const handleModalClose = () => setModalOpen(false);

  const handleDelete = () => {
    const dataToSend = {
      authToken,
      taskId,
    };
    dispatch(deleteTaskByID(dataToSend));
    handleModalClose();
  };

  React.useEffect(() => {
    if (companyList) {
      // eslint-disable-next-line
      companyList.map((vals) => {
        if (vals.id === companyName) {
          setActualCompanyName(vals.name);
        }
      });
    }

    let alreadyInList = false;
    // eslint-disable-next-line
    selectedTaskList.map((task) => {
      if (task === taskId) {
        setCheckBox(true);
        alreadyInList = true;
      }
    });
    if (isAllSelected) {
      if (!alreadyInList) {
        setCheckBox(true);
        dispatch(selectOneTask(taskId));
      }
    } else if (checkBox) {
      setCheckBox(false);
      // dispatch(deselectOneTask(taskId));
    }
  }, [isAllSelected]);

  return (
    <>
      <Modal
        aria-describedby="modal-modal-description"
        aria-labelledby="modal-modal-title"
        onClose={handleModalClose}
        open={modalOpen}
      >
        <AreYouSure
          handleClose={handleModalClose}
          handleDelete={handleDelete}
          headline="Are you sure to Delete the Worklist?"
        />
      </Modal>

      <div className="assign-work-activity-table-data">
        <span className="assign-work-activities-card-check-input">
          <input checked={checkBox} onChange={handelCheckbox} type="checkbox" />
        </span>
        <span className="assign-work-activities-card-project-name">
          {projectName}
        </span>

        <span className="assign-work-activities-card-company">
          {!actualCompanyName ? '-' : actualCompanyName}
        </span>
        <span className="assign-work-activities-card-taskId">{taskId}</span>
        <span className="assign-work-activities-card-task-name">
          {!taskName ? '-' : taskName}
        </span>
        <span className="assign-work-activities-card-task-description">
          {!taskDescription ? '-' : taskDescription}
        </span>
        <span className="assign-work-activities-card-isMilestone">
          {isMilestone === 0 ? 'Yes' : 'No'}
        </span>
        <span className="assign-work-activities-card-type">{type} </span>
        <span className="assign-work-activities-card-status">{status}</span>
        <span className="assign-work-activities-card-actions">
          <MoreHorizIcon
            className="assign-work-activities-card-menu-icon"
            onClick={handleMenuClick}
          />
          <Menu
            anchorEl={menuAnchorEl}
            id="basic-menu"
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            onClose={handleMenuClose}
            open={open}
          >
            {/* <MenuItem onClick={handleMenuClose}>Edit</MenuItem> */}
            <MenuItem onClick={handleModalOpen}>{t('delete')}</MenuItem>
          </Menu>
        </span>
      </div>
    </>
  );
};

/* eslint-disable */
AssignActivityCard.propTypes = {
  projectName: PropTypes.string,
  companyName: PropTypes.string,
  taskId: PropTypes.number,
  taskName: PropTypes.string,
  taskDescription: PropTypes.string,
  isMilestone: PropTypes.number,
  type: PropTypes.string,
  status: PropTypes.string,
};
export default AssignActivityCard;
