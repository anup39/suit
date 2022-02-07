import './FieldUpdates.scss';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { GrMap } from 'react-icons/gr';

import FieldUpdateCard from './components/FieldUpdateCards/FieldUpdateCard';
import MapView from './components/MapView/MapView';

const FieldUpdates = () => {

  const [isMapView, setIsMapView] = React.useState(false);
  const { t } = useTranslation();
  

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
              <input className="field-input" placeholder={t('searchTask')} />
            </span>
            <span>
              <SearchIcon className="field-search-icon" />
              <input className="field-input" placeholder={t('searchCompany')} />
            </span>

        
          </>
        )}
        {!isMapView ? (
          <span className="map-view-button" onClick={showMapView}>
            <GrMap className="map-icon" /> {t('mapView')}
          </span>
        ) : (
          <span className="map-view-button" onClick={showListView}>
            <FormatListBulletedIcon className="map-icon" /> {t('listView')}
          </span>
        )}
      </div>
      {!isMapView ? (
        <>
          <div className="field-update-header">
            <span className="field-updates-header-checkInput">
              <input type="checkbox" />
            </span>
            <span className="field-updates-header-taskItem">{t('taskItem')}</span>

            <span className="field-updates-header-milestoneApproval">
            {t('milestone')}
            </span>
            <span className="field-updates-header-status">{t('status')}</span>
            <span className="field-updates-header-controlActivity">
            {t('controlActivity')}
            </span>
            <span className="field-updates-header-actions">{t('actions')}</span>
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
