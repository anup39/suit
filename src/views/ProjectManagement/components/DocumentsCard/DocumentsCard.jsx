import './DocumentsCard.scss';

import React from 'react';

const DocumentsCard = () => {
  return (
    <div className="document-card-base-div">
      <span>
        <input type="checkbox" />
      </span>

      <span>
        <p>Document Name</p>
      </span>

      <span>
        <p>Imported From</p>
      </span>

      <span>
        <p>Document Type</p>
      </span>

      <span>
        <p>Uploaded On</p>
      </span>

      <span>
        <p>Actions</p>
      </span>
    </div>
  );
};

export default DocumentsCard;
