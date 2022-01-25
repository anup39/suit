/*eslint-disable*/
import './Openlayer.scss';

// react
import React, { useState, useEffect } from 'react';

// openlayers
import GeoJSON from 'ol/format/GeoJSON';
import Feature from 'ol/Feature';

// components
import MapWrapper from './OpenLayerWrapper';

function OpenLayer() {
  // set intial state
  const [features, setFeatures] = useState([]);
  const [projectLayers, setProjectLayers] = useState([
    {
      name: 14,
      href: 'http://13.233.23.132:7080/geoserver/rest/workspaces/Anuptest3/layers/14.json',
    },
    {
      name: 141,
      href: 'http://13.233.23.132:7080/geoserver/rest/workspaces/Anuptest3/layers/141.json',
    },
    {
      name: '20200101_LKDH_AXFlurstueck',
      href: 'http://13.233.23.132:7080/geoserver/rest/workspaces/Anuptest3/layers/20200101_LKDH_AXFlurstueck.json',
    },
    {
      name: 'Schutzrohre_vor_POPBaulos14',
      href: 'http://13.233.23.132:7080/geoserver/rest/workspaces/Anuptest3/layers/Schutzrohre_vor_POPBaulos14.json',
    },
    {
      name: 'TrassenStand_baulos14',
      href: 'http://13.233.23.132:7080/geoserver/rest/workspaces/Anuptest3/layers/TrassenStand_baulos14.json',
    },
  ]);

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
      {/* <MapWrapper features={features} /> */}
      <MapWrapper features={features} wmsLayers={projectLayers} />
    </div>
  );
}

export default OpenLayer;
