import './AssignWorkActivities.scss';

import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import Modal from '@mui/material/Modal';
import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import DatagridBase from '../../components/shared/DatagridBase/DatagridBase';
import LoadingSpinner from '../../components/shared/LoadingSpinner/LoadingSpinner';
import Pagination from '../../components/shared/Pagination/Pagination';
import GlobalSpinner from '../../components/shared/Spinners/GlobalSpinner';
import {
  getIsSelectAll,
  getSelectedTaskList,
} from '../../redux/assign-worklist/assign-work-list.selector';
import {
  deselectAllTask,
  selectAllTask,
} from '../../redux/assign-worklist/assign-worklist.action';
import { getAllCompany } from '../../redux/company-redux/company.actions';
import {
  getIfAuthenticated,
  getUserAuthToken,
} from '../../redux/user-redux/user.selectors';
import {
  getWorkList,
  resetDeleteTask,
} from '../../redux/worklist-management-redux/worklist.actions';
import {
  getAllWorkListData,
  getDeleteWorkListSuccess,
  getIsAllWorklistLoading,
  getIsDeleteWorkListLoading,
} from '../../redux/worklist-management-redux/worklist.selector';
import AuthenticatedRoute from '../../routes/AuthenticatedRoute';
import AssignProjectModal from './components/AssignProjectModal/AssignProjectModal';
import AssignTaskModal from './components/AssignTaskModal/AssignTaskModal';
import MobileDataRow from './components/mobile.data.row';

const AssignWorkActivities = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [checkBox, setCheckbox] = React.useState(false);

  const workListData = useSelector(getAllWorkListData);
  const userAuthToken = useSelector(getUserAuthToken);
  const isAllSelected = useSelector(getIsSelectAll);
  const selectedTasks = useSelector(getSelectedTaskList);
  const isWorklistLoading = useSelector(getIsAllWorklistLoading);
  const isAuthenticated = useSelector(getIfAuthenticated);
  const isDeleteWorklistLoading = useSelector(getIsDeleteWorkListLoading);
  const deleteWorklistSuccess = useSelector(getDeleteWorkListSuccess);

  const handelCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handelOpenDrawer = () => {
    dispatch(getAllCompany(userAuthToken));
    setIsDrawerOpen(true);
  };

  const handleCheckbox = (e) => {
    setCheckbox(e.target.checked);
    if (e.target.checked) {
      dispatch(selectAllTask());
    } else {
      dispatch(deselectAllTask());
    }
  };

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  React.useEffect(() => {
    if (workListData.length === 0) {
      dispatch(getWorkList(userAuthToken));
    } else if (deleteWorklistSuccess) {
      setTimeout(() => {
        dispatch(getWorkList(userAuthToken));
        dispatch(resetDeleteTask());
      }, 1000);
    }

    if (isAllSelected) {
      setCheckbox(true);
    } else {
      setCheckbox(false);
    }
  }, [isDeleteWorklistLoading]);

  return (
    <AuthenticatedRoute isAuthenticated={isAuthenticated}>
      <GlobalSpinner isOpen={isDeleteWorklistLoading} />
      <Drawer
        anchor="right"
        onClose={() => handelCloseDrawer()}
        open={isDrawerOpen}
      >
        <AssignProjectModal handleClose={handelCloseDrawer} />
      </Drawer>
      <Modal
        aria-describedby="modal-modal-description"
        aria-labelledby="modal-modal-title"
        onClose={handleModalClose}
        open={isModalOpen}
      >
        <AssignTaskModal handleCancel={handleModalClose} />
      </Modal>
      <BaseTemplate>
        <div className="header-wrapper">
          <h2 className="header">Assign Work Activities</h2>
          {/* <span className="assign-project-button" >
          </span> */}

          <button onClick={handelOpenDrawer} type="button">
            <AddIcon />
            Assign Project
          </button>
        </div>

        <DatagridBase>
          <div className="assign-work-activity-search-div">
            <div className="assign-work-activity-container">
              <SearchIcon className="assign-work-activity-search-icon" />
              <input placeholder="Project Name" />
            </div>
            <div className="assign-work-activity-container">
              <SearchIcon className="assign-work-activity-search-icon" />
              <input placeholder="Task Name" />
            </div>
            {selectedTasks.length !== 0 && (
              <button
                className="work-activity-assign-task-button"
                onClick={handleModalOpen}
                type="button"
              >
                <BiLinkExternal className="work-activity-assign-logo" />
                Assign Task
              </button>
            )}
          </div>
          <div className="assign-work-activity-table-tbody">
            <div className="assign-work-activity-table-header">
              <span className="assign-work-activities-check-input">
                <input
                  checked={checkBox}
                  onChange={handleCheckbox}
                  type="checkbox"
                />
              </span>
              <span className="assign-work-activities-project-name">
                Project Name
              </span>
              <span className="assign-work-activities-company">Company</span>
              <span className="assign-work-activities-taskId">Task Id</span>
              <span className="assign-work-activities-task-name">
                Task Name
              </span>
              <span className="assign-work-activities-task-description">
                Task Description
              </span>
              <span className="assign-work-activities-isMilestone">
                Ismilestone
              </span>
              <span className="assign-work-activities-type">Type </span>
              <span className="assign-work-activities-status">Status</span>
              <span className="assign-work-activities-actions">Actions</span>
            </div>
            {/*eslint-disable */}
            {isWorklistLoading ? (
              <LoadingSpinner />
            ) : workListData && workListData.length !== 0 ? (
              <Pagination
                componentNo={2}
                itemData={workListData}
                itemsPerPage={7}
              />
            ) : (
              <div>
                {' '}
                <p
                  style={{
                    textAlign: 'center',
                    paddingTop: '20%',
                    paddingBottom: '15%',
                  }}
                >
                  No Data Found!
                </p>{' '}
              </div>
            )}
            {/* eslint-enable */}

            <div className="mobile_table_assignwork">
              <MobileDataRow />
              <MobileDataRow />
              <MobileDataRow />
              <MobileDataRow />
              <MobileDataRow />

              <MobileDataRow />
            </div>
          </div>
        </DatagridBase>
      </BaseTemplate>
    </AuthenticatedRoute>
  );
};

export default AssignWorkActivities;
