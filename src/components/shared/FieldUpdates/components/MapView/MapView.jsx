import './MapView.scss';

// import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getAllProjects,
  getSelectedTaskId,
  // getTasksByProject,
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

const MapView = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [projectId, setprojectId] = React.useState(null);
  const projectList = useSelector(getAllProjects);
  const authToken = useSelector(getUserAuthToken);
  // eslint-disable-next-line no-unused-vars
  const taskDetailsByProject = useSelector(getTasksByProject);
  const selectedTaskId = useSelector(getSelectedTaskId);

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
  const filteredTaskByTaskId =
    taskDetailsByProject &&
    taskDetailsByProject?.find((task) => task.taskId === selectedTaskId);
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
          <select
            className={classes.form_input}
            onChange={(e) => setprojectId(e.target.value)}
          >
            <option value=""> Select A Project</option>
            {projectList.map((vals) => (
              <option key={vals.id} value={vals.id}>
                {vals.name}
              </option>
            ))}
          </select>
        </div>
        {/* <div className="map-view-document-search-div">
          <label>Document Name</label>
          <div>
            <input />
            <SearchIcon className="searchIcon" />
          </div>
        </div> */}
        <div className="map-view-document-preview">
          {/* <embed
            // src={successStoryDetailData?.resource_file}
            // src={taskDetailsByProject[0].documents}
            src="http://www.africau.edu/images/default/sample.pdf"
            style={{ height: '100%' }}
            type="application/pdf"
            width="100%"
          /> */}
          <iframe
            height="100%"
            src="http://asuite.arkivista.it/VistaEcmWeb.aspx?AppName=ASuite&FolderCode=ASUITE&DocTypeCode=PROJECT_DOCS&LogonType=3&OperationType=10&DispayMode=0&UserName=Administrator&PwdHash=FE5925DF339948B95B605D595DF8861729F3EB3A&IdxId=69&DocId=66"
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
              <h6>Task Name:</h6>
              <p>{filteredTaskByTaskId?.taskName}</p>
            </span>

            <span>
              <p>Task Status:</p>
              <p>{filteredTaskByTaskId?.taskStatus}</p>
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
