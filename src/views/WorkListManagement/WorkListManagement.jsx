import './WorkListManagement.scss';

import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { FaRegShareSquare } from 'react-icons/fa';
import CsvDownload from 'react-json-to-csv';
import { connect, useDispatch } from 'react-redux';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import DatagridBase from '../../components/shared/DatagridBase/DatagridBase';
// import WorkListColumns from './WorkListColumns';
import Pagination from '../../components/shared/Pagination/Pagination';
import { getWorkList } from '../../redux/worklist-management-redux/worklist.actions';
import WorklistForm from './components/WorklistForm/WorklistForm';
import MobileDataRow from './mobile.data.row';
// import WorkListManagementCard from './components/WorklistManagementCard/WorklistManagementCard';

const WorkListManagement = ({ authToken, workListData }) => {
  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = React.useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const open = Boolean(menuOpen);

  const handelMenuOpen = (event) => {
    setMenuOpen(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuOpen(null);
  };

  const handelCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handelOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  useEffect(() => {
    dispatch(getWorkList(authToken));
  }, []);

  return (
    <>
      <Drawer
        anchor="right"
        onClose={() => handelCloseDrawer()}
        open={isDrawerOpen}
      >
        <WorklistForm handelClose={handelCloseDrawer} />
      </Drawer>

      <BaseTemplate>
        <div className="header-wrapper">
          <h2 className="header">Worklist Management</h2>

          <button onClick={handelOpenDrawer} type="button">
            <AddIcon />
            Add Task
          </button>
        </div>

        <DatagridBase>
          <div className="worklist-search-div">
            <div className="worklist-input-container">
              <SearchIcon className="search-icon" />
              <input placeholder="Project Name" />
            </div>

            <div className="worklist-input-container">
              <SearchIcon className="search-icon" />
              <input placeholder="Company Name" />
            </div>
            <span className="worklist-export-button" onClick={handelMenuOpen}>
              <FaRegShareSquare className="worklist-export-icon" />
              Export Worklist
            </span>
            <Menu
              anchorEl={menuOpen}
              id="basic-menu"
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              onClose={handleMenuClose}
              open={open}
            >
              <MenuItem onClick={handleMenuClose}>
                <CsvDownload
                  className="export-csv-button"
                  data={workListData}
                  filename="worklist.csv"
                >
                  Export CSV
                </CsvDownload>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>Export XML</MenuItem>
            </Menu>
          </div>
          <div>
            <div className="worklist-table-header">
              <span className="worklist-management-check-input">
                <input type="checkbox" />
              </span>
              <span className="worklist-management-project-name">
                Project Id
              </span>
              <span className="worklist-management-task-name">Task Name</span>
              <span className="worklist-management-task-description">
                Task Description
              </span>
              <span className="worklist-management-isMilestone">
                Ismilestone
              </span>
              <span className="worklist-management-type">Type</span>
              <span className="worklist-management-actions">Actions</span>
            </div>
            <div>
              {/* {workListData.map((values) => (
                <WorkListManagementCard
                  key={values.taskId}
                  isMilestone={values.isMilestone}
                  projectName={values.projectsId}
                  taskDescription={values.taskDescription}
                  taskName={values.taskName}
                  type={values.type}
                  workId={values.taskId}
                />
              ))} */}
              <Pagination
                componentNo={1}
                itemData={workListData}
                itemsPerPage={5}
              />
              <div className="mobile_table_worklist">
                <MobileDataRow />
                <MobileDataRow />
                <MobileDataRow />
                <MobileDataRow />
                <MobileDataRow />

                <MobileDataRow />
              </div>
            </div>
          </div>
        </DatagridBase>
      </BaseTemplate>
    </>
  );
};

WorkListManagement.propTypes = {
  authToken: PropTypes.string.isRequired,
  workListData: PropTypes.isRequired,
};

const mapStateToProps = (state) => ({
  authToken: state.user.userData.accessToken,
  workListData: state.workListManagement.allWorkList,
});

export default connect(mapStateToProps)(WorkListManagement);

// TODO: Pagination
// TODO: FORMS Fill Data
// TODO: XML
