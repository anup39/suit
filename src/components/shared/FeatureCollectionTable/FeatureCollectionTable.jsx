import './FeatureCollectionTable.scss';

import PropTypes from 'prop-types';
import React from 'react';

import TableData from './components/TableData/TableData';

const FeatureCollectionTable = ({ featureData }) => {
  return (
    <div className="map-table-data-base">
      {console.log(featureData)}
      <TableData />
    </div>
  );
};

FeatureCollectionTable.propTypes = {
  featureData: PropTypes.isRequired,
};

export default FeatureCollectionTable;
