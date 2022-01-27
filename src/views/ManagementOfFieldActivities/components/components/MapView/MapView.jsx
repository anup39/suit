import './MapView.scss';

import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useTranslation } from 'react-i18next';

import MapWrapper from '../../../../../components/shared/Openlayer/Openlayer';

const MapView = () => {
  const { t } = useTranslation();

  return (
    <div className="mgmt-map-view-base-div ">
      <div className="map-view-map-div">
        <MapWrapper />
      </div>
      <div className="map-view-details-div">
        <h5 className="map-view-assign-project-header">{t('assignProject')}</h5>
        <div className="map-view-document-search-div">
          <label>{t('docuemntName')}</label>
          <div className="map-view-wraper-con">
            <input placeholder="Search Doc" />
            <SearchIcon className="searchIcon" />
          </div>
        </div>
        <div className="map-view-document-preview"> {t('documentPreview')}</div>
        <div className="map-view-document-details-base">
          <h6> {t('documentDetails')}</h6>
          <div className="map-view-document-details">
            <div>
              <p>DB Data 1</p>
              <h6>DB Data 1</h6>
            </div>
            <div>
              <p>DB Data 1</p>
              <h6>DB Data 1</h6>
            </div>
            <div>
              <p>DB Data 1</p>
              <h6>DB Data 1</h6>
            </div>
            <div>
              <p>DB Data 1</p>
              <h6>DB Data 1</h6>
            </div>
            <div>
              <p>DB Data 1</p>
              <h6>DB Data 1</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
