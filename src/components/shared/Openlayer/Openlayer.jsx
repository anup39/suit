import './Openlayer.scss';

// openlayers
import GeoJSON from 'ol/format/GeoJSON';
// react
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectTaskId } from '../../../redux/project-management-redux/project-management.actions';
// import { getSelectedProjectLayersList } from '../../../redux/project-management-redux/project-management.actions';
// import { getSelectedProjectLayersList } from '../../../redux/project-management-redux/project-management.actions';
import { getTasksByProject } from '../../../redux/worklist-management-redux/worklist.selector';
// components
import MapWrapper from './OpenLayerWrapper';

// eslint-disable-next-line react/prop-types
const OpenLayer = ({selectedDropdownTaskId,projectId}) => {
  const dispatch = useDispatch();
  // set intial state
  const [features, setFeatures] = useState([]);
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const selectedProjectLayersList = useSelector(
    (state) => state.projectManagement.selectedProjectLayerList
  )?.layers?.layer;
  const [wmsLayers, setWmsLayers] = useState([]);
  const taskDetailsByProject = useSelector(getTasksByProject);

  useEffect(() => {
    if (taskDetailsByProject?.length > 0) {
      dispatch(selectTaskId(taskDetailsByProject?.[0]?.taskId));
    }
  }, [taskDetailsByProject]);

  // initialization - retrieve GeoJSON features from Mock JSON API get features from mock
  //  GeoJson API (read from flat .json file in public directory)
  useEffect(() => {
    fetch('/mock-geojson-api.json')
      .then((response) => response.json())
      .then((fetchedFeatures) => {
        // parse fetched geojson into OpenLayers features
        //  use options to convert feature from EPSG:4326 to EPSG:3857
        const wktOptions = {
          dataProjection: 'EPSG:4326',
          featureProjection: 'EPSG:3857',
        };
        const parsedFeatures = new GeoJSON().readFeatures(
          fetchedFeatures,
          wktOptions
        );

        // set features into state (which will be passed into OpenLayers
        //  map component as props)
        setFeatures(parsedFeatures);
      });
  }, []);

  return (
    <div className="App">
      <MapWrapper
        features={features}
        projectId={projectId}
        projectLayersList={selectedProjectLayersList}
        selectedDropdownTaskId={selectedDropdownTaskId}
        setWmsLayers={setWmsLayers}
        taskDetailsByProject={taskDetailsByProject}
        wmsLayers={wmsLayers}
      />
    </div>
  );
};

export default OpenLayer;