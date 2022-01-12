import React from 'react';

import Download from '../../../../assets/download.svg';

const UploadDocumentsModal = () => {
  const inputField = React.useRef(null);

  const handleSelectFileClick = () => {
    inputField.current.click();
  };

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
          <input
            ref={inputField}
            multiple
            onChange={(e) => console.log(e.target.files)}
            style={{ display: 'none' }}
            type="file"
          />
          <button
            className="browse-file-button"
            onClick={handleSelectFileClick}
            type="button"
          >
            Browse Files
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadDocumentsModal;
