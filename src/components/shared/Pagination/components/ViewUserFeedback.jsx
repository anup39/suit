import PropTypes from 'prop-types';
import React from 'react';

import DataRow from '../../../../views/Feedback/components/Viewusertable/datagrid';

const PublicUserFeedback = ({ currentItems }) => {
  return (
    <div>
      {currentItems &&
        currentItems.map((values) => (
          <DataRow key={values.id} feedBackDetails={values} />
        ))}
    </div>
  );
};

PublicUserFeedback.propTypes = {
  currentItems: PropTypes.isRequired,
};

export default PublicUserFeedback;
