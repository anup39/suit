import './AssignWorkActivities.scss';

import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import Modal from '@mui/material/Modal';
import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import DatagridBase from '../../components/shared/DatagridBase/DatagridBase';
import AssignActivityCard from './components/AssignActivityCard/AssignActivityCard';
import AssignProjectModal from './components/AssignProjectModal/AssignProjectModal';
import AssignTaskModal from './components/AssignTaskModal/AssignTaskModal';

const AssignWorkActivities = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handelCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handelOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

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
      <BaseTemplate title="Assign Work Activities">
        <span className="assign-project-button" onClick={handelOpenDrawer}>
          + Assign Project
        </span>
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
            <span
              className="work-activity-assign-task-button"
              onClick={handleModalOpen}
            >
              <BiLinkExternal className="work-activity-assign-logo" />
              Assign Task
            </span>
          </div>
          <div className="assign-work-activity-table-header">
            <span className="assign-work-activities-check-input">
              <input type="checkbox" />
            </span>
            <span className="assign-work-activities-project-name">
              Project Name
            </span>
            <span className="assign-work-activities-comapny">Company</span>
            <span className="assign-work-activities-taskId">Task Id</span>
            <span className="assign-work-activities-task-name">Task Name</span>
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
          <div>
            <AssignActivityCard />
            <AssignActivityCard />
            <AssignActivityCard />
            <AssignActivityCard />
          </div>
        </DatagridBase>
      </BaseTemplate>
    </>
  );
};

export default AssignWorkActivities;
