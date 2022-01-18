import './WorkListManagement.scss';

import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect } from 'react';
import { FaRegShareSquare } from 'react-icons/fa';
import CsvDownload from 'react-json-to-csv';
import { useDispatch, useSelector } from 'react-redux';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import DatagridBase from '../../components/shared/DatagridBase/DatagridBase';
import LoadingSpinner from '../../components/shared/LoadingSpinner/LoadingSpinner';
// import WorkListColumns from './WorkListColumns';
import Pagination from '../../components/shared/Pagination/Pagination';
import { getProjectList } from '../../redux/project-management-redux/project-management.actions';
import {
  getIfAuthenticated,
  getUserAuthToken,
} from '../../redux/user-redux/user.selectors';
import {
  deselectAllWorkList,
  getWorkList,
  selectAllWorkList,
} from '../../redux/worklist-management-redux/worklist.actions';
import {
  getAllWorkListData,
  getIfAllWorkListSelected,
  getIsAllWorklistLoading,
  getSelectedWorkList,
} from '../../redux/worklist-management-redux/worklist.selector';
import AuthenticatedRoute from '../../routes/AuthenticatedRoute';
import WorklistForm from './components/WorklistForm/WorklistForm';
import MobileDataRow from './mobile.data.row';

const WorkListManagement = () => {
  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = React.useState(null);
  const [checkbox, setCheckbox] = React.useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const isWorklistLoading = useSelector(getIsAllWorklistLoading);
  const ifAllSelected = useSelector(getIfAllWorkListSelected);
  const selectedWorklist = useSelector(getSelectedWorkList);
  const authToken = useSelector(getUserAuthToken);
  const isAuthenticated = useSelector(getIfAuthenticated);
  const workListData = useSelector(getAllWorkListData);

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

  const handleCheckbox = (e) => {
    setCheckbox(e.target.checked);

    if (e.target.checked) {
      dispatch(selectAllWorkList());
    } else {
      dispatch(deselectAllWorkList());
    }
  };

  useEffect(() => {
    dispatch(getWorkList(authToken));
    dispatch(getProjectList(authToken));

    if (ifAllSelected) {
      setCheckbox(true);
    } else {
      setCheckbox(false);
    }
  }, []);

  return (
    <AuthenticatedRoute isAuthenticated={isAuthenticated}>
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
            {selectedWorklist.length !== 0 && (
              <span className="worklist-export-button">
                <span onClick={handelMenuOpen}>
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
                      data={selectedWorklist}
                      filename="worklist.csv"
                    >
                      Export CSV
                    </CsvDownload>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>Export XML</MenuItem>
                </Menu>
              </span>
            )}
          </div>
          <div>
            <div className="worklist-table-header">
              <span className="worklist-management-check-input">
                <input
                  checked={checkbox}
                  onChange={handleCheckbox}
                  type="checkbox"
                />
              </span>
              <span className="worklist-management-project-name">
                Project Name
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
              {isWorklistLoading ? (
                <LoadingSpinner />
              ) : (
                <Pagination
                  componentNo={1}
                  itemData={workListData}
                  itemsPerPage={10}
                />
              )}

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
    </AuthenticatedRoute>
  );
};

export default WorkListManagement;

// TODO: XML
