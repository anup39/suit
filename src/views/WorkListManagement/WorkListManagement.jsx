import './WorkListManagement.scss';

import AddIcon from '@mui/icons-material/Add';
// import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import exportFromJSON from 'export-from-json';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegShareSquare } from 'react-icons/fa';
import CsvDownload from 'react-json-to-csv';
import { useDispatch, useSelector } from 'react-redux';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import DatagridBase from '../../components/shared/DatagridBase/DatagridBase';
import LoadingSpinner from '../../components/shared/LoadingSpinner/LoadingSpinner';
// import WorkListColumns from './WorkListColumns';
import Pagination from '../../components/shared/Pagination/Pagination';
import RestrictedPages from '../../components/shared/RestrictedPages/RestrictedPages';
import GlobalSpinner from '../../components/shared/Spinners/GlobalSpinner';
import { getAllCompany } from '../../redux/company-redux/company.actions';
import { getCompaniesList } from '../../redux/company-redux/company.selectors';
import { getAllProjects } from '../../redux/project-management-redux/project.selector';
import { getProjectList } from '../../redux/project-management-redux/project-management.actions';
import {
  getIfAuthenticated,
  getUserAuthToken,
} from '../../redux/user-redux/user.selectors';
import {
  deselectAllWorkList,
  getWorkList,
  resetDeleteTask,
  selectAllWorkList,
} from '../../redux/worklist-management-redux/worklist.actions';
import {
  getAllWorkListData,
  getDeleteWorkListSuccess,
  getIfAllWorkListSelected,
  getIsAllWorklistLoading,
  getIsDeleteWorkListLoading,
  getSelectedWorkList,
} from '../../redux/worklist-management-redux/worklist.selector';
import AuthenticatedRoute from '../../routes/AuthenticatedRoute';
import WorklistForm from './components/WorklistForm/WorklistForm';
import MobileDataRow from './mobile.data.row';

const PAGE_ACCESSABLE_BY = ['planA_admin'];

const WorkListManagement = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = React.useState(null);
  const [checkbox, setCheckbox] = React.useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [filteredList, setFilteredList] = React.useState([]);

  const [companyName, setCompanyName] = React.useState([]);
  const [projectName, setProjectName] = React.useState([]);

  const isWorklistLoading = useSelector(getIsAllWorklistLoading);
  const ifAllSelected = useSelector(getIfAllWorkListSelected);
  const selectedWorklist = useSelector(getSelectedWorkList);
  const authToken = useSelector(getUserAuthToken);
  const isAuthenticated = useSelector(getIfAuthenticated);
  const workListData = useSelector(getAllWorkListData);
  const projectList = useSelector(getAllProjects);
  const companyList = useSelector(getCompaniesList);
  const deleteWorkListSuccess = useSelector(getDeleteWorkListSuccess);
  const isDeleteWorkListLoading = useSelector(getIsDeleteWorkListLoading);
  const theme = useTheme();

  const open = Boolean(menuOpen);

  const ITEM_HEIGHT = 40;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const getStyles = (name, personName, theme2) => {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme2.typography.fontWeightRegular
          : theme2.typography.fontWeightMedium,
    };
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCompanyName(typeof value === 'string' ? value.split(',') : value);
  };

  const handleProjectChange = (event) => {
    const {
      target: { value },
    } = event;
    setProjectName(typeof value === 'string' ? value.split(',') : value);
  };

  const handelMenuOpen = (e) => {
    setMenuOpen(e.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuOpen(null);
  };

  const handleExportAsXML = () => {
    handleMenuClose();
    const exportType = 'xml';
    const fileName = 'WorkList.xml';

    const data = selectedWorklist;

    exportFromJSON({ data, fileName, exportType });
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
    if (!projectList || workListData.length === 0) {
      dispatch(getProjectList(authToken));

      setTimeout(() => {
        dispatch(getAllCompany(authToken));
      }, 500);
      setTimeout(() => {
        dispatch(getWorkList(authToken));
      }, 500);
    } else {
      const filteredData = [];

      if (companyName.length !== 0 && projectName.length !== 0) {
        // eslint-disable-next-line
        workListData.map((vals) => {
          if (
            projectName.includes(vals.projectsId) &&
            companyName.includes(vals.companiesId)
          ) {
            filteredData.push(vals);
          }
        });
      } else {
        // eslint-disable-next-line
        workListData.map((vals) => {
          if (
            projectName.includes(vals.projectsId) ||
            companyName.includes(vals.companiesId)
          ) {
            filteredData.push(vals);
          }
        });
      }

      setFilteredList(filteredData);

      if (ifAllSelected) {
        setCheckbox(true);
      } else {
        setCheckbox(false);
      }
    }

    if (deleteWorkListSuccess) {
      dispatch(getWorkList(authToken));
      dispatch(resetDeleteTask());
    }
  }, [projectName, companyName, isDeleteWorkListLoading]);

  return (
    <RestrictedPages accessibleBy={PAGE_ACCESSABLE_BY}>
      <AuthenticatedRoute isAuthenticated={isAuthenticated}>
        <GlobalSpinner isOpen={isDeleteWorkListLoading} />
        <Drawer
          anchor="right"
          onClose={() => handelCloseDrawer()}
          open={isDrawerOpen}
        >
          <WorklistForm handelClose={handelCloseDrawer} />
        </Drawer>

        <BaseTemplate>
          <div className="header-wrapper">
            <h2 className="header">{t('worklistManagement')}</h2>

            <button onClick={handelOpenDrawer} type="button">
              <AddIcon />
              {t('addTask')}
            </button>
          </div>

          <DatagridBase>
            <div className="worklist-search-div">
              {/* <div className="worklist-input-container">
              <SearchIcon className="search-icon" />
              <input placeholder="Project Name" />
            </div>

            <div className="worklist-input-container">
              <SearchIcon className="search-icon" />
              <input placeholder="Company Name" />
            </div> */}

              <div>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-name-label">
                    {t('companyName')}
                  </InputLabel>
                  <Select
                    id="demo-multiple-name"
                    input={<OutlinedInput label={t('companyName')} />}
                    labelId="demo-multiple-name-label"
                    MenuProps={MenuProps}
                    multiple
                    onChange={handleChange}
                    value={companyName}
                  >
                    {companyList &&
                      companyList.map((vals) => (
                        <MenuItem
                          key={vals.id}
                          style={getStyles(vals, companyName, theme)}
                          value={vals.id}
                        >
                          {vals.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </div>

              <div>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-name-label">
                    {t('projectName')}
                  </InputLabel>
                  <Select
                    id="demo-multiple-name"
                    input={<OutlinedInput label="Project Name" />}
                    labelId="demo-multiple-name-label"
                    MenuProps={MenuProps}
                    multiple
                    onChange={handleProjectChange}
                    value={projectName}
                  >
                    {projectList &&
                      projectList.map((val) => (
                        <MenuItem
                          key={val.id}
                          style={getStyles(val.id, projectName, theme)}
                          value={val.id}
                        >
                          {val.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </div>

              {selectedWorklist.length !== 0 && (
                <span className="worklist-export-button">
                  <span onClick={handelMenuOpen}>
                    <FaRegShareSquare className="worklist-export-icon" />
                    {t('exportWorklist')}
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
                        {t('exportCSV')}
                      </CsvDownload>
                    </MenuItem>
                    <MenuItem onClick={handleExportAsXML}>
                      {t('exportXML')}
                    </MenuItem>
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
                  {t('projectName')}
                </span>
                <span className="worklist-management-task-name">
                  {t('taskName')}
                </span>
                <span className="worklist-management-task-description">
                  {t('taskDescription')}
                </span>
                <span className="worklist-management-isMilestone">
                  {t('isMilestone')}
                </span>
                <span className="worklist-management-type">{t('type')}</span>
                <span className="worklist-management-actions">
                  {t('actions')}
                </span>
              </div>
              <div>
                {/* eslint-disable */}
                {isWorklistLoading ? (
                  <LoadingSpinner />
                ) : workListData && workListData.length === 0 ? (
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
                ) : (
                  <Pagination
                    componentNo={1}
                    itemData={
                      companyName.length === 0 && projectName.length === 0
                        ? workListData
                        : filteredList
                    }
                    itemsPerPage={10}
                  />
                )}
                {/* eslint-enable */}
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
    </RestrictedPages>
  );
};

export default WorkListManagement;
