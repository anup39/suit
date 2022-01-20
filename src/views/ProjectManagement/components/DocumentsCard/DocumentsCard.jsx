import './DocumentsCard.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react';

const DocumentsCard = () => {
  return (
    <div className="project-document-card-base-div">
      <span className="document-name">Document Name</span>

      <span className="document-importd-from">Imported From</span>

      <span className="document-type">Document Type</span>

      <span className="document-uploaded-on">Uploaded On</span>

      <span className="document-actions">
        <MoreHorizIcon className="document-menu-icon" />
      </span>
    </div>
  );
};

export default DocumentsCard;
