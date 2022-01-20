import PropTypes from 'prop-types';
import React from 'react';

import Daterow from '../../../../views/Feedback/components/Datarow';

const PublicUserFeedback = ({ currentItems }) => {
  return (
    <div>
      {currentItems &&
        currentItems.map((values) => <Daterow key={values.id} data={values} />)}
    </div>
  );
};

PublicUserFeedback.propTypes = {
  currentItems: PropTypes.isRequired,
};

export default PublicUserFeedback;
