import PropTypes from 'prop-types';
import React from 'react';

import DocumentsCard from '../../../../views/ProjectManagement/components/DocumentsCard/DocumentsCard';

const ProjectDocuments = ({ currentItems }) => {
  return (
    <div>
      {currentItems &&
        currentItems.map((values) => (
          <DocumentsCard key={values.id} documentsDetails={values} />
        ))}
    </div>
  );
};

ProjectDocuments.propTypes = {
  currentItems: PropTypes.isRequired,
};

export default ProjectDocuments;
