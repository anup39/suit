import React from 'react';

import Download from '../../../../assets/download.svg';

const UploadDocumentsModal = () => {
  return (
    <div className="custom-modal">
      <div className="modal-head">Upload Documents</div>
      <div className="modal-con">
        <div>
          <div className="upload-circle">
            <img alt="Download" src={Download} />
          </div>
          <p className="para">Drag and Drop Files Here</p>
          <p>Or</p>
          <button type="button">Browse Files</button>
        </div>
      </div>
    </div>
  );
};

export default UploadDocumentsModal;
