import './Openlayer.scss';

// openlayers
import GeoJSON from 'ol/format/GeoJSON';
// react
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// import { getSelectedProjectLayersList } from '../../../redux/project-management-redux/project-management.actions';
// import { getSelectedProjectLayersList } from '../../../redux/project-management-redux/project-management.actions';
import { getTasksByProject } from '../../../redux/worklist-management-redux/worklist.selector';
// components
import MapWrapper from './OpenLayerWrapper';

const OpenLayer = () => {
  // set intial state
  const [features, setFeatures] = useState([]);
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const selectedProjectLayersList = useSelector(
    (state) => state.projectManagement.selectedProjectLayerList
  )?.layers?.layer;
  const [wmsLayers, setWmsLayers] = useState([]);
  const taskDetailsByProject = useSelector(getTasksByProject);

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
        projectLayersList={selectedProjectLayersList}
        setWmsLayers={setWmsLayers}
        taskDetailsByProject={taskDetailsByProject}
        wmsLayers={wmsLayers}
      />
    </div>
  );
};

export default OpenLayer;
