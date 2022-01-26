import './MapView.scss';

import CancelIcon from '@mui/icons-material/Cancel';
import ChatIcon from '@mui/icons-material/Chat';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import { red, yellow } from '@mui/material/colors';
// import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getAllProjects,
  // getTasksByProject,
  getProjectData,
  getSelectedTaskId,
} from '../../../../../redux/project-management-redux/project.selector';
import {
  getProjectList,
  getSelectedProjectLayersList,
} from '../../../../../redux/project-management-redux/project-management.actions';
import { getUserAuthToken } from '../../../../../redux/user-redux/user.selectors';
import { taskByProject } from '../../../../../redux/worklist-management-redux/worklist.actions';
import { getTasksByProject } from '../../../../../redux/worklist-management-redux/worklist.selector';
import classes from '../../../../../views/ProjectManagement/components/ImportProject/components/import-drawer/import-drawer.styles.module.scss';
import MapWrapper from '../../../Openlayer/Openlayer';

// eslint-disable-next-line react/prop-types
const MapView = ({ page }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [projectId, setprojectId] = React.useState(null);
  const projectList = useSelector(getAllProjects);
  const authToken = useSelector(getUserAuthToken);
  // eslint-disable-next-line no-unused-vars
  const taskDetailsByProject = useSelector(getTasksByProject);
  const selectedTaskId = useSelector(getSelectedTaskId);
  const selectedProjectData = useSelector(getProjectData);

  React.useEffect(() => {
    dispatch(getProjectList(authToken));
  }, []);
  React.useEffect(() => {
    if (projectList.length > 0 && projectId) {
      const getProjectNameFromId = projectList?.find(
        (project) => project.id === +projectId
      ).name;
      dispatch(
        getSelectedProjectLayersList(getProjectNameFromId.replaceAll(' ', ''))
      );
      const data = {
        authToken,
        projectId: +projectId,
      };
      dispatch(taskByProject(data));
    }
  }, [projectList, projectId]);
  React.useEffect(() => {
    if (!selectedProjectData && projectList.length > 0) {
      setprojectId(`${projectList?.[0]?.id}`);
    }
    if (selectedProjectData) {
      setprojectId(`${selectedProjectData?.id}`);
    }
  }, [projectList, selectedProjectData]);
  // React.useEffect(() => {
  //   if (selectedProjectData) {
  //     setprojectId(`${selectedProjectData?.id}`);
  //   }
  // }, [selectedProjectData]);

  const filteredTaskByTaskId =
    taskDetailsByProject &&
    taskDetailsByProject?.find((task) => task.taskId === selectedTaskId);

  const getStatusIcons = (status) => {
    switch (status) {
      case 'Not assigned':
        return (
          <DoNotDisturbAltIcon
            className="field-search-icon"
            color="grey"
            fontSize="large"
          />
        );
      case 'Not started':
        return (
          <RemoveCircleOutlineIcon
            className="field-search-icon"
            fontSize="large"
          />
        );
      case 'In progress/started':
        return <TimelapseIcon color="primary" fontSize="large" />;
      case 'Waiting for feedback':
        return (
          <ChatIcon
            className="field-search-icon"
            color="primary"
            fontSize="large"
          />
        );
      case 'Suspended':
        return (
          <PauseCircleIcon
            className="field-search-icon"
            fontSize="large"
            sx={{ color: yellow[900] }}
          />
        );
      case 'Completed':
        return (
          <CheckCircleIcon
            className="field-search-icon"
            color="primary"
            fontSize="large"
          />
        );
      case 'Canceled':
        return (
          <CancelIcon
            className="field-search-icon"
            fontSize="large"
            sx={{ color: red[900] }}
          />
        );
      case 'Approved':
        return (
          <CheckCircleIcon
            className="field-search-icon"
            color="success"
            fontSize="large"
          />
        );

      default:
        return <div />;
    }
  };
  // eslint-disable-next-line no-console
  console.log(
    `http://ecm.digital-twinsuite.com/VistaEcmWeb.aspx?LogonType=3&UserName=Administrator&Password=Asuite&Ap
  pName=Asuite&FolderCode=ASUITE&DocTypeCode=PROJECT_DOCS&OperationType=10&Query=~
  TASK_NAME=${filteredTaskByTaskId?.taskName} PROJ_NAME=${filteredTaskByTaskId?.projectsName}`,
    'url'
  );
  return (
    <div className="map-view-base-div">
      <div className="map-view-map-div">
        <MapWrapper />
      </div>
      <div className="map-view-details-div">
        {/* <h5 className="map-view-assign-project-header">Assign Project</h5> */}
        <div className={classes.form_input_container}>
          <label
            className={classes.form_label}
            htmlFor="name"
            style={{ color: 'white' }}
          >
            Project Name
          </label>
          {page === 'webgisservices' && (
            <select
              className={classes.form_input}
              onChange={(e) => setprojectId(e.target.value)}
              value={projectId}
            >
              <option value=""> Select A Project</option>
              {projectList.map((vals) => (
                <option key={vals.id} value={vals.id}>
                  {vals.name}
                </option>
              ))}
            </select>
          )}
        </div>
        {/* <div className="map-view-document-search-div">
          <label>Document Name</label>
          <div>
            <input />
            <SearchIcon className="searchIcon" />
          </div>
        </div> */}
        <div className="map-view-document-preview">
          <iframe
            height="100%"
            src={`http://ecm.digital-twinsuite.com/VistaEcmWeb.aspx?LogonType=3&UserName=Administrator&Password=Asuite&Ap
            pName=Asuite&FolderCode=ASUITE&DocTypeCode=PROJECT_DOCS&OperationType=10&Query=~
            TASK_NAME=${filteredTaskByTaskId?.taskName ?? ''} PROJ_NAME=${
              filteredTaskByTaskId?.projectsName ?? ''
            }`}
            title="Pdf Title"
            width="100%"
          />
        </div>
        <div className="map-view-document-details-base">
          <p style={{ color: 'white' }}>Document Details</p>
          <div className="map-view-document-details">
            <span>
              <p>Geometry Type:</p>
              <p>Point</p>
            </span>
            <span>
              <p>Project Name:</p>
              <p>{filteredTaskByTaskId?.projectsName}</p>
            </span>
            <span>
              <p>Project Id:</p>
              <p>{filteredTaskByTaskId?.projectsId}</p>
            </span>
            <span>
              <p>Task Id:</p>
              <p>{filteredTaskByTaskId?.taskId}</p>
            </span>
            <span>
              <p>Type:</p>
              <p>{filteredTaskByTaskId?.type}</p>
            </span>

            <span>
              <h6>Task Name:</h6>
              <p>{filteredTaskByTaskId?.taskName}</p>
            </span>

            <span>
              <p>Task Status:</p>
              <p>{getStatusIcons(filteredTaskByTaskId?.taskStatus)}</p>
              {/* <p>{filteredTaskByTaskId?.taskStatus}</p> */}
            </span>

            <span>
              <p>Task Description:</p>
              <p>{filteredTaskByTaskId?.taskDescription}</p>
            </span>

            <span>
              <p>Start Date:</p>
              <p>{filteredTaskByTaskId?.start}</p>
            </span>
            <span>
              <p>End Date:</p>
              <p>{filteredTaskByTaskId?.end}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;