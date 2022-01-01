import './Documents.scss';

import SearchIcon from '@mui/icons-material/Search';
import Pagination from '@mui/material/Pagination';
import React, { useState } from 'react';

import DocumentsCard from '../DocumentsCard/DocumentsCard';

const Documents = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalNoDiv, setTotalNoDiv] = useState(200);
  const perPage = 10;
  const handelChange = (event, val) => {
    setCurrentPage(val);
    setTotalNoDiv(200);
  };

  return (
    <div className="documents-base-div">
      <div className="documents-search-div">
        <input className="document-search-input" />
        <SearchIcon className="document-search-icon" />
      </div>
      <DocumentsCard />
      <Pagination
        className="pagination-numbers"
        count={totalNoDiv / perPage}
        onChange={handelChange}
        page={currentPage}
        shape="rounded"
        variant="outlined"
      />
    </div>
  );
};

export default Documents;
