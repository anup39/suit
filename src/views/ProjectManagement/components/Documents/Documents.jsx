import './Documents.scss';

import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

import DocumentsCard from '../DocumentsCard/DocumentsCard';
// import { useSelector, useDispatch } from 'react-redux';
// import { getProjectData } from '../../../../redux/project-management-redux/project.selector';
// import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';

const Documents = () => {
  // const currentProject = useSelector(getProjectData);
  // const authToken = useSelector(getUserAuthToken);
  // const dispatch = useDispatch();

  // React.useEffect(() => {}, []);

  return (
    <div className="documents-base-div">
      <div className="documents-search-div">
        <input className="document-search-input" />
        <SearchIcon className="document-search-icon" />
      </div>
      <DocumentsCard />
      <DocumentsCard />
      <DocumentsCard />
      <DocumentsCard />
      <DocumentsCard />
    </div>
  );
};

export default Documents;
