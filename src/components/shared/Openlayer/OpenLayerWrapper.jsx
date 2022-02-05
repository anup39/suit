/*eslint-disable*/
// react
import React, { useState, useEffect, useRef } from 'react';

// openlayers
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import View from 'ol/View';
import Image from 'ol/layer/Image';
import WMSCapabilities from 'ol/format/WMSCapabilities';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import XYZ from 'ol/source/XYZ';
import { transform,transformExtent } from 'ol/proj';
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
import ol from 'ol';
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
  const projectList = useSelector(getAllProjects);

  const filteredProjectBySelectedId =
  projectList &&
  projectList?.find((project) => +project.id === +props.projectId)?.name?.replaceAll(" ","");

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
        if (feat.values_.taskId === props.selectedDropdownTaskId) {
          var ext = feat.getGeometry().getExtent();
          // map.getView().fitExtent(ext,map.getSize());
          // map.getView().fit(ext, {
          //   padding: [50, 50, 50, 50],
          //   duration: 500,
          //   maxZoom: 8,
          //   constrainResolution: true,
          // });
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
        // const filteredTask = props.taskDetailsByProject.filter((task)=>task.taskId === props.selectedDropdownTaskId);
       
        const finalGeojson = {
          type: 'FeatureCollection',
          features: props.taskDetailsByProject.map((item) => ({
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
  }, [props.taskDetailsByProject,props.selectedDropdownTaskId]);
useEffect (()=>{
  return () => {
    if (map && vectorLayer) {
      map.removeLayer(vectorLayer);
    }
  };
},[vectorLayer])
  useEffect(() => {
    if (map) {
      if (props.projectLayersList) {
        props.projectLayersList.forEach((layer, i) => {
          if(layer.name == props.selectedDropdownTaskId){
          const tileLayer = new TileLayer({
            source: new TileWMS({
              // crossOrigin: 'anonymous',
              // url:`http://192.168.100.242:8080/geoserver/`,
              url: `${process.env.REACT_APP_GEOSERVER_HOSTNAME}${filteredProjectBySelectedId}/wms`,
              params: {
                FORMAT: 'image/png',
                VERSION: '1.1.1',
                tiled: true,
                STYLES: '',
                LAYERS: `${filteredProjectBySelectedId}:${layer.name}`,
              },
            }),
          });
          tileLayer.setZIndex(5 - i);
          props.setWmsLayers((prevState) => [...prevState, tileLayer]);
          map.addLayer(tileLayer);
          const tileSource = tileLayer.getSource();
          // const url = tileSource.getFeatureInfoUrl(
          //   evt.coordinate,
          //   viewResolution,
          //   'EPSG:3857',
          //   { INFO_FORMAT: 'application/json' },
          //   // { INFO_FORMAT: 'text/html' },
          // );
          const base_url = `${process.env.REACT_APP_GEOSERVER_HOSTNAME}/${filteredProjectBySelectedId}/wms?`
          const parser = new WMSCapabilities();
          fetch(base_url + 'SERVICE=WMS&VERSION=1.1.0&REQUEST=GetCapabilities').then(function(response) {
            return response.text();
        }).then(function(text) {
                const result = parser.read(text);
                console.log(result,'result');
                const extent = result.Capability.Layer.Layer.find(l => l.Name === `${filteredProjectBySelectedId}:${layer.name}`).BoundingBox?.[0].extent;
           
                var extent_3857 = transformExtent(extent, 'EPSG:4326', 'EPSG:3857');
              //   var layer2 = new Image({
              //     title: 'zone',
              //     visible: false,
              //     source: wmsSource2,
              //     extent: extent_3857
              // });
              map.getView().fit(extent_3857, {
                padding: [50, 50, 50, 50],
                duration: 2000,
                maxZoom: 8,
                constrainResolution: true,
            });
        });
          fetch(base_url + `SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&LAYERS=${filteredProjectBySelectedId}:${layer.name}`).then(function(response) {
            return response.text();
        }).then(function(text) {
                const result = parser.read(text);
                console.log(result,'result1');
                // const extent = result.Capability.Layer.Layer.find(l => l.Name === `${filteredProjectBySelectedId}:${layer.name}`).BoundingBox?.[0].extent;
           
                // var extent_3857 = transformExtent(extent, 'EPSG:4326', 'EPSG:3857');
              //   var layer2 = new Image({
              //     title: 'zone',
              //     visible: false,
              //     source: wmsSource2,
              //     extent: extent_3857
              // });
            //   map.getView().fit(extent_3857, {
            //     padding: [50, 50, 50, 50],
            //     duration: 2000,
            //     maxZoom: 8,
            //     constrainResolution: true,
            // });
        });
    
        }
        });
      }
    }
    return () => {
      props.wmsLayers.forEach((layer) => {
        map.removeLayer(layer);
      });
    };
  }, [map, props.projectLayersList,props.selectedDropdownTaskId]);

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