import './MapView.scss';

import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

import MapWrapper from '../../../Openlayer/Openlayer';

const MapView = () => {
  return (
    <div className="map-view-base-div">
      <div className="map-view-map-div">
        <MapWrapper />
      </div>
      <div className="map-view-details-div">
        <h5 className="map-view-assign-project-header">Assign Project</h5>
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
