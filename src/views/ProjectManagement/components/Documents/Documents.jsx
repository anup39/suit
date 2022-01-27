import './Documents.scss';

// import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import LoadingSpinner from '../../../../components/shared/LoadingSpinner/LoadingSpinner';
import Pagination from '../../../../components/shared/Pagination/Pagination';
import {
  getIsProjcectDocumentsLoading,
  getProjcectDocuments,
  getProjectData,
} from '../../../../redux/project-management-redux/project.selector';
import { projectDocuments } from '../../../../redux/project-management-redux/project-management.actions';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';

const Documents = () => {
  const currentProject = useSelector(getProjectData);
  const authToken = useSelector(getUserAuthToken);
  const currentProjectDocuments = useSelector(getProjcectDocuments);
  const isProjectDocumentLoading = useSelector(getIsProjcectDocumentsLoading);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  React.useEffect(() => {
    const data = {
      authToken,
      projectId: currentProject.id,
    };

    dispatch(projectDocuments(data));
  }, []);

  return (
    <div className="documents-base-div">
      {/* <div className="documents-search-div">
        <input className="document-search-input" />
        <SearchIcon className="document-search-icon" />
      </div> */}
      <div className="document-header-table">
        <span className="document-name">{t('docuemntName')}</span>
        <span className="document-importd-from">{t('importedFrom')}</span>
        <span className="document-type">{t('documentType')}</span>
        <span className="document-uploaded-on">{t('uploadedOn')}</span>
        <span className="document-actions">{t('actions')}</span>
      </div>
      {isProjectDocumentLoading && <LoadingSpinner />}
      {!isProjectDocumentLoading &&
      currentProjectDocuments &&
      currentProjectDocuments.length === 0 ? (
        <div className="no-data-found">
          <p>No Data Found!</p>
        </div>
      ) : (
        <Pagination
          componentNo={8}
          itemData={currentProjectDocuments}
          itemsPerPage={10}
        />
      )}
    </div>
  );
};

export default Documents;
