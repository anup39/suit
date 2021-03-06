import './FieldUpdates.scss';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { GrMap } from 'react-icons/gr';

import FieldUpdateCard from './components/FieldUpdateCards/FieldUpdateCard';
import MapView from './components/MapView/MapView';

const FieldUpdates = () => {
  const [isMapView, setIsMapView] = React.useState(false);

  const showMapView = () => {
    setIsMapView(true);
  };

  const showListView = () => {
    setIsMapView(false);
  };

  return (
    <div className="field-update-base-div">
      <div className="field-update-search-div">
        {!isMapView && (
          <>
            <span>
              <SearchIcon className="field-search-icon" />
              <input className="field-input" placeholder="Search Task" />
            </span>
            <span>
              <SearchIcon className="field-search-icon" />
              <input className="field-input" placeholder="Search Company" />
            </span>
          </>
        )}
        {!isMapView ? (
          <span className="map-view-button" onClick={showMapView}>
            <GrMap className="map-icon" /> Map View
          </span>
        ) : (
          <span className="map-view-button" onClick={showListView}>
            <FormatListBulletedIcon className="map-icon" /> List View
          </span>
        )}
      </div>
      {!isMapView ? (
        <>
          <div className="field-update-header">
            <span className="field-updates-header-checkInput">
              <input type="checkbox" />
            </span>
            <span className="field-updates-header-taskItem">Task Item</span>
            <span className="field-updates-header-fieldLogs">Field Logs</span>
            <span className="field-updates-header-activityReport">
              Activity report
            </span>
            <span className="field-updates-header-changeRequest">
              Change request
            </span>
            <span className="field-updates-header-milestoneApproval">
              Milestone approval
            </span>
            <span className="field-updates-header-status">Status</span>
            <span className="field-updates-header-controlActivity">
              Control Activity
            </span>
            <span className="field-updates-header-actions">Actions</span>
          </div>
          <div>
            <FieldUpdateCard />
            <FieldUpdateCard />
            <FieldUpdateCard />
            <FieldUpdateCard />
          </div>
        </>
      ) : (
        <MapView />
      )}
    </div>
  );
};

export default FieldUpdates;
