/*eslint-disable*/
// react
import React, { useState, useEffect, useRef } from 'react';

// openlayers
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import XYZ from 'ol/source/XYZ';
import { transform } from 'ol/proj';
import { toStringXY } from 'ol/coordinate';
import { fromLonLat } from 'ol/proj';
import TileWMS from 'ol/source/TileWMS';
import { get } from 'ol/proj';
import { useDispatch, useSelector } from 'react-redux';
import { selectTaskId } from '../../../redux/project-management-redux/project-management.actions';
// import Style from 'ol/style/Style';
// import Fill from 'ol/style/Fill';
// import Circle from 'ol/geom/Circle';
// import Stroke from 'ol/style/Stroke';
import { Circle, Fill, Stroke, Style } from 'ol/style';
import {
  getAllProjects,
  getSelectedTaskId,
  // getTasksByProject,
} from '../../../redux/project-management-redux/project.selector';

function MapWrapper(props) {
  const dispatch = useDispatch();
  // set intial state
  const [map, setMap] = useState();
  const [featuresLayer, setFeaturesLayer] = useState();
  const [vectorLayer, setVectorLayer] = useState(null);
  const [selectedCoord, setSelectedCoord] = useState();

  const washingtonLonLat = [-77.036667, 38.895];
  const washingtonWebMercator = fromLonLat(washingtonLonLat);
  // const taskDetailsByProject = useSelector(getTasksByProject);
  const selectedTaskId = useSelector(getSelectedTaskId);

  useEffect(() => {
    if (map && vectorLayer && props?.taskDetailsByProject) {
      var source = vectorLayer.getSource();
      var features = source.getFeatures();
      features.forEach((feat) => {
        if (feat.values_.taskId === selectedTaskId) {
          var ext = feat.getGeometry().getExtent();
          // map.getView().fitExtent(ext,map.getSize());
          map.getView().fit(ext, {
            padding: [50, 50, 50, 50],
            duration: 500,
            maxZoom: 8,
            constrainResolution: true,
          });
        }
      });
    }
  }, [map, props.taskDetailsByProject, vectorLayer]);

  // pull refs
  const mapElement = useRef();

  // create state ref that can be accessed in OpenLayers onclick callback function
  //  https://stackoverflow.com/a/60643670
  const mapRef = useRef();
  mapRef.current = map;

  // initialize map on first render - logic formerly put into componentDidMount
  useEffect(() => {
    // create and add vector source layer
    const initalFeaturesLayer = new VectorLayer({
      source: new VectorSource(),
    });

    // create map
    const initialMap = new Map({
      target: mapElement.current,
      layers: [
        // USGS Topo
        new TileLayer({
          source: new XYZ({
            url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}',
          }),
        }),

        // Google Maps Terrain
        /* new TileLayer({
          source: new XYZ({
            url: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}',
          })
        }), */

        initalFeaturesLayer,
      ],
      view: new View({
        projection: 'EPSG:3857',
        center: washingtonWebMercator,
        zoom: 9,
      }),
      controls: [],
    });

    // set map onclick handler
    initialMap.on('click', handleMapClick);
    // initialMap.on('click', function y(evt) {

    // });
    // save map and vector layer references to state
    setMap(initialMap);
    setFeaturesLayer(initalFeaturesLayer);
  }, []);

  // update map if features prop changes - logic formerly put into componentDidUpdate
  useEffect(() => {
    if (props?.features?.length) {
      // may be null on first render

      // set features to map
      featuresLayer.setSource(
        new VectorSource({
          features: props.features, // make sure features is an array
        })
      );

      // fit map to feature extent (with 100px of padding)
      map.getView().fit(featuresLayer.getSource().getExtent(), {
        padding: [100, 100, 100, 100],
      });
    }
  }, [props.features]);

  useEffect(() => {
    if (map) {
      if (props.taskDetailsByProject.length > 0) {
        const finalGeojson = {
          type: 'FeatureCollection',
          features: props?.taskDetailsByProject.map((item) => ({
            type: 'Feature',
            properties: { ...item },
            geometry: {
              type: 'Point',
              coordinates: [item.longitude, item.latitude],
            },
          })),
        };
        const projectTasks = new VectorLayer({
          source: new VectorSource({
            features: new GeoJSON().readFeatures(finalGeojson, {
              featureProjection: get('EPSG:3857'),
            }),
          }),
          style: new Style({
            image: new Circle({
              radius: 5 * 2,
              fill: new Fill({
                color: 'yellow',
              }),
              stroke: new Stroke({
                color: 'black',
                width: 5 / 2,
              }),
            }),
            zIndex: Infinity,
          }),
          // style: style,
        });
        setVectorLayer(projectTasks);
        map.addLayer(projectTasks);
      }
    }
    return () => {
      if (map && vectorLayer) {
        map.removeLayer(vectorLayer);
      }
    };
  }, [props.taskDetailsByProject]);

  useEffect(() => {
    if (map) {
      if (props.projectLayersList) {
        props.projectLayersList.forEach((layer, i) => {
          const tileLayer = new TileLayer({
            source: new TileWMS({
              // crossOrigin: 'anonymous',
              // url:`http://13.233.23.132:7080/geoserver/`,
              url: 'http://13.233.23.132:7080/geoserver/Anuptest3/wms',
              params: {
                FORMAT: 'image/png',
                VERSION: '1.1.1',
                tiled: true,
                STYLES: '',
                LAYERS: `Anuptest3:${layer.name}`,
              },
            }),
          });
          tileLayer.setZIndex(5 - i);
          props.setWmsLayers((prevState) => [...prevState, tileLayer]);
          map.addLayer(tileLayer);
        });
      }
    }
    return () => {
      props.wmsLayers.forEach((layer) => {
        map.removeLayer(layer);
      });
    };
  }, [map, props.projectLayersList]);

  useEffect(() => {
    return () => {
      props.wmsLayers.forEach((layer) => {
        map.removeLayer(layer);
      });
    };
  }, [props.projectLayersList, props.wmsLayers]);

  // map click handler
  const handleMapClick = (event) => {
    // get clicked coordinate using mapRef to access current React state inside OpenLayers callback
    //  https://stackoverflow.com/a/60643670
    const clickedCoord = mapRef.current.getCoordinateFromPixel(event.pixel);

    // transform coord to EPSG 4326 standard Lat Long
    const transormedCoord = transform(clickedCoord, 'EPSG:3857', 'EPSG:4326');

    // set React state
    setSelectedCoord(transormedCoord);

    const feature = mapRef.current.forEachFeatureAtPixel(
      event.pixel,
      function x(featurex) {
        return featurex;
      }
    );
    if (feature) {
      if (feature.values_.taskId) {
        dispatch(selectTaskId(feature.values_.taskId));
      }
    } else {
      // olOverlay.setPosition(undefined);
    }
  };

  // render component
  return (
    <div>
      <div ref={mapElement} className="map-container"></div>

      <div className="clicked-coord-label">
        <p>{selectedCoord ? toStringXY(selectedCoord, 5) : ''}</p>
      </div>
    </div>
  );
}

export default MapWrapper;