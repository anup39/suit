import PropTypes from 'prop-types';
import React from 'react';

const Items = ({ currentItems }) => {
  return (
    <div>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item}>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </div>
  );
};

Items.propTypes = {
  currentItems: PropTypes.isRequired,
};

export default Items;
