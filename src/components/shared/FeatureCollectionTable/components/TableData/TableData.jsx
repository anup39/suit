import './TableData.scss';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PropTypes from 'prop-types';
import React from 'react';

const TableData = ({ data }) => {
  const [isMoreDataOpen, setIsMoreDataOpen] = React.useState(false);
  const handleOpenMoreData = () => {
    setIsMoreDataOpen(true);
  };

  const handleCloseMoreData = () => {
    setIsMoreDataOpen(false);
  };

  return (
    <div className="table-data-base-div">
      {console.log(data)}
      <span
        className={
          isMoreDataOpen
            ? 'table-data-more-arrow-closed'
            : 'table-data-more-arrow'
        }
        onClick={!isMoreDataOpen ? handleOpenMoreData : handleCloseMoreData}
      >
        <ArrowRightIcon />
      </span>
      <span className="table-data-header">Hello</span>
      <span className="table-data-body">World </span>
    </div>
  );
};

TableData.propTypes = {
  data: PropTypes.isRequired,
};

export default TableData;
