import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import Download from '../../../../assets/download.svg';
import GlobalSpinner from '../../../../components/shared/Spinners/GlobalSpinner';
import { addFeedbackImage } from '../../../../redux/feedback-redux/feedback.actions';

const UploadDocumentsModal = () => {
  const inputField = React.useRef(null);

  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleImageOnChange = (e) => {
    const image = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(image);

    reader.onload = () => {
      setIsLoading(true);
    };

    reader.onloadend = (event) => {
      setIsLoading(false);
      const dataToSend = {
        fileName: image.name,

        fileType: image.type,

        files: event.target.result,
      };
      console.log(dataToSend);

      dispatch(addFeedbackImage(dataToSend));
    };

    setIsLoading(false);
  };

  const handleSelectFileClick = () => {
    inputField.current.click();
  };

  return (
    <div className="custom-modal">
      <GlobalSpinner isOpen={isLoading} />
      <div className="modal-head">{t('Upload Documents')}</div>
      <div className="modal-con">
        <div>
          <div className="upload-circle">
            <img alt="Download" src={Download} />
          </div>
          {/* <p className="para">{t('dragandDropFilesHere')}</p>
          <p>Or</p> */}
          <input
            ref={inputField}
            multiple
            onChange={(e) => handleImageOnChange(e)}
            style={{ display: 'none' }}
            type="file"
          />
          <button
            className="browse-file-button"
            onClick={handleSelectFileClick}
            type="button"
          >
            {t('browseFiles')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadDocumentsModal;
