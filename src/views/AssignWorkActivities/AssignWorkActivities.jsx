import './AssignWorkActivities.scss';

import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import Modal from '@mui/material/Modal';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BiLinkExternal } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import DatagridBase from '../../components/shared/DatagridBase/DatagridBase';
import LoadingSpinner from '../../components/shared/LoadingSpinner/LoadingSpinner';
import Pagination from '../../components/shared/Pagination/Pagination';
import RestrictedPages from '../../components/shared/RestrictedPages/RestrictedPages';
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

const PAGE_ACCESSABLE_BY = ['planA_admin'];

const AssignWorkActivities = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [searchProjectItem, setSearchProjectItem] = React.useState('');
  const [searchTaskItem, setSearchTaskItem] = React.useState('');
  const dispatch = useDispatch();
  const [checkBox, setCheckbox] = React.useState(false);
  const { t } = useTranslation();

  const workListData = useSelector(getAllWorkListData);
  const userAuthToken = useSelector(getUserAuthToken);
  const isAllSelected = useSelector(getIsSelectAll);
  const selectedTasks = useSelector(getSelectedTaskList);
  const isWorklistLoading = useSelector(getIsAllWorklistLoading);
  const isAuthenticated = useSelector(getIfAuthenticated);
  const isDeleteWorklistLoading = useSelector(getIsDeleteWorkListLoading);
  const deleteWorklistSuccess = useSelector(getDeleteWorkListSuccess);
  const navigate = useNavigate();
  const filterLists = (list) => {
    const projectItem = searchProjectItem.toLowerCase();
    const taskItem = searchTaskItem.toLowerCase();
    const filteredList = list.filter((item) => {
      let listFilter = [];
      if (projectItem && taskItem) {
        listFilter =
          item?.projectsName.toLowerCase().includes(projectItem) &&
          item?.taskName.toLowerCase().includes(taskItem);
      } else if (projectItem) {
        listFilter = item?.projectsName.toLowerCase().includes(projectItem);
      } else if (taskItem) {
        listFilter = item?.taskName.toLowerCase().includes(taskItem);
      }
      return listFilter;
    });
    return filteredList;
  };
  const projectSearchItem = (e) => {
    setSearchProjectItem(e.target.value);
  };

  const taskSearchItem = (e) => {
    setSearchTaskItem(e.target.value);
  };

  const handelCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handelOpenDrawer = () => {
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
    if (isAuthenticated) {
      if (workListData.length === 0) {
        dispatch(getWorkList(userAuthToken));
        dispatch(getAllCompany(userAuthToken));
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
    } else {
      navigate('/asuiteweb/signin');
    }
  }, [isDeleteWorklistLoading, isAuthenticated]);

  return (
    <RestrictedPages accessibleBy={PAGE_ACCESSABLE_BY}>
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
            <h2 className="header">{t('assingWorkActivities')}</h2>
            {/* <span className="assign-project-button" >
          </span> */}

            <button onClick={handelOpenDrawer} type="button">
              <AddIcon />
              {t('assignProject')}
            </button>
          </div>

          <DatagridBase>
            <div className="assign-work-activity-search-div">
              <div className="assign-work-activity-container">
                <SearchIcon className="assign-work-activity-search-icon" />
                <input
                  onChange={projectSearchItem}
                  placeholder={t('projectName')}
                />
              </div>
              <div className="assign-work-activity-container">
                <SearchIcon className="assign-work-activity-search-icon" />
                <input onChange={taskSearchItem} placeholder={t('taskName')} />
              </div>
              {selectedTasks.length !== 0 && (
                <button
                  className="work-activity-assign-task-button"
                  onClick={handleModalOpen}
                  type="button"
                >
                  <BiLinkExternal className="work-activity-assign-logo" />
                  {t('assignTask')}
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
                  {t('projectName')}
                </span>
                <span className="assign-work-activities-company">
                  {t('company')}
                </span>
                <span className="assign-work-activities-taskId">
                  {t('taskId')}
                </span>
                <span className="assign-work-activities-task-name">
                  {t('taskName')}
                </span>
                <span className="assign-work-activities-task-description">
                  {t('taskDescription')}
                </span>
                <span className="assign-work-activities-isMilestone">
                  {t('isMilestone')}
                </span>
                <span className="assign-work-activities-type">
                  {t('type')}{' '}
                </span>
                <span className="assign-work-activities-status">
                  {t('status')}
                </span>
                <span className="assign-work-activities-actions">
                  {t('actions')}
                </span>
              </div>
              {/*eslint-disable */}
              {isWorklistLoading ? (
                <LoadingSpinner />
              ) : workListData && workListData.length !== 0 ? (
                <Pagination
                  componentNo={2}
                  itemData={filterLists(workListData)}
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
                    {t('noDataFound')}
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
    </RestrictedPages>
  );
};

export default AssignWorkActivities;
