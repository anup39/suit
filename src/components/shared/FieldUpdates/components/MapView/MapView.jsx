import './MapView.scss';

import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllProjects } from '../../../../../redux/project-management-redux/project.selector';
import {
  getProjectList,
  getSelectedProjectLayersList,
} from '../../../../../redux/project-management-redux/project-management.actions';
import { getUserAuthToken } from '../../../../../redux/user-redux/user.selectors';
import classes from '../../../../../views/ProjectManagement/components/ImportProject/components/import-drawer/import-drawer.styles.module.scss';
import MapWrapper from '../../../Openlayer/Openlayer';

const MapView = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [projectId, setprojectId] = React.useState('');
  const projectList = useSelector(getAllProjects);
  const authToken = useSelector(getUserAuthToken);
  React.useEffect(() => {
    dispatch(getProjectList(authToken));
  }, []);
  React.useEffect(() => {
    // const getProjectNameFromId = projectList.find(
    //   (project) => project.id === projectId
    // ).name;
    dispatch(getSelectedProjectLayersList('Anuptest3'));
  }, [projectId]);

  return (
    <div className="map-view-base-div">
      <div className="map-view-map-div">
        <MapWrapper />
      </div>
      <div className="map-view-details-div">
        <h5 className="map-view-assign-project-header">Assign Project</h5>
        <div className={classes.form_input_container}>
          <label className={classes.form_label} htmlFor="name">
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
        <div className="map-view-document-search-div">
          <label>Document Name</label>
          <div>
            <input />
            <SearchIcon className="searchIcon" />
          </div>
        </div>
        <div className="map-view-document-preview">Document Preview</div>
        <div className="map-view-document-details-base">
          <p>Document Details</p>
          <div className="map-view-document-details">
            <span>
              <p>DB Data 1</p>
              <p>DB Data 1</p>
            </span>

            <span>
              <p>DB Data 1</p>
              <p>DB Data 1</p>
            </span>

            <span>
              <p>DB Data 1</p>
              <p>DB Data 1</p>
            </span>

            <span>
              <p>DB Data 1</p>
              <p>DB Data 1</p>
            </span>

            <span>
              <p>DB Data 1</p>
              <p>DB Data 1</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
