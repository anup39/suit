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
import Pagination from '../../components/shared/Pagination/Pagination';
import { getAllCompany } from '../../redux/company-redux/company.actions';
import { getUserAuthToken } from '../../redux/user-redux/user.selectors';
import { getWorkList } from '../../redux/worklist-management-redux/worklist.actions';
import { getAllWorkListData } from '../../redux/worklist-management-redux/worklist.selector';
import AssignProjectModal from './components/AssignProjectModal/AssignProjectModal';
import AssignTaskModal from './components/AssignTaskModal/AssignTaskModal';
import MobileDataRow from './components/mobile.data.row';

const AssignWorkActivities = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const dispatch = useDispatch();

  const workListData = useSelector(getAllWorkListData);
  const userAuthToken = useSelector(getUserAuthToken);

  const handelCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handelOpenDrawer = () => {
    dispatch(getAllCompany(userAuthToken));
    setIsDrawerOpen(true);
  };

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  React.useState(() => {
    dispatch(getWorkList(userAuthToken));
  }, []);

  return (
    <>
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
            <button
              className="work-activity-assign-task-button"
              onClick={handleModalOpen}
              type="button"
            >
              <BiLinkExternal className="work-activity-assign-logo" />
              Assign Task
            </button>
          </div>
          <div className="assign-work-activity-table-tbody">
            <div className="assign-work-activity-table-header">
              <span className="assign-work-activities-check-input">
                <input type="checkbox" />
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
            <Pagination
              componentNo={2}
              itemData={workListData}
              itemsPerPage={7}
            />
            <div className="mobile_table">
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
    </>
  );
};

export default AssignWorkActivities;
