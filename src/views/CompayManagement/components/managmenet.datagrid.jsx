import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
// import Button from '@mui/material/Button';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';

import {
  deleteCompanyStart,
  eraseCheckedCompany,
  getAllCompany,
  getCheckedCompany,
} from '../../../redux/company-redux/company.actions';
import {
  getCompaniesList,
  getCompaniesListToDelete,
} from '../../../redux/company-redux/company.selectors';
import { getUserAuthToken } from '../../../redux/user-redux/user.selectors';
import classes from './datagrid.module.scss';
import DatagridRow from './datagrid.row';

const CompanyManagementDataGrid = () => {
  const companyFullList = useSelector(getCompaniesList);
  const companyFullListToDelete = useSelector(getCompaniesListToDelete);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchItem, setSearchItem] = useState('');
  const [render, setRender] = useState(false);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const accessToken = useSelector(getUserAuthToken);

  const updateCheckbox = (e) => {
    setRender(e.target.checked);
    if (e.target.checked) {
      setChecked(true);
      companyFullList.map((item) =>
        dispatch(
          getCheckedCompany({ name: item.name, id: item.id, checked: true })
        )
      );
    } else if (!e.target.checked) {
      setChecked(false);
      companyFullList.map((item) =>
        dispatch(eraseCheckedCompany({ name: item.name, id: item.id }))
      );
    }
  };

  const filterLists = (list) => {
    const filteredList = list.filter((item) =>
      item?.name.toLowerCase().includes(searchItem.toLowerCase())
    );

    return filteredList;
  };

  React.useState(() => {
    if (companyFullListToDelete.length !== companyFullList.length) {
      setChecked(false);
    }
  }, [render]);

  function handlePageClick() {
    setCurrentPage(currentPage);
  }

  const pageCount = Math.ceil(companyFullList.length / 10);

  const updateSearchItem = (e) => {
    setSearchItem(e.target.value);
  };

  const deleteCompany = () => {
    companyFullListToDelete.map((item) =>
      dispatch(deleteCompanyStart({ id: item.id, accessToken }))
    );
    setTimeout(() => {
      dispatch(getAllCompany(accessToken));
    }, 2000);
  };

  return (
    <div className={classes.datagrid_contaier}>
      <div className={classes.datagrid_head}>
        <div className={classes.head_search}>
          <SearchIcon sx={{ color: '#8094AE' }} />
          <input
            checked={checked}
            className={classes.search_input}
            onChange={updateSearchItem}
            placeholder="Company search"
            type="text"
          />
        </div>
        <Button
          className={classes.delete_button}
          disabled={companyFullListToDelete.length === 0}
          onClick={deleteCompany}
          type="button"
        >
          Delete
        </Button>
      </div>
      <div className={classes.datagrid_tables_containers}>
        <table className={classes.datagrid_tables}>
          <thead className={classes.table_heads}>
            <tr className={classes.table_heads_row}>
              <th className={classes.head_row_head}>
                <input onClick={updateCheckbox} type="checkbox" />
              </th>
              <th className={classes.head_row_head}>Company Name</th>
              <th className={classes.head_row_head}>Address</th>
              <th className={classes.head_row_head}>City</th>
              <th className={classes.head_row_head}>Reference contact</th>
              <th className={classes.head_row_head}>Last update</th>
              <th className={classes.head_row_head}>User last update</th>
              <th className={classes.head_row_head}>Actions</th>
            </tr>
          </thead>
          <tbody className={classes.table_body}>
            {companyFullList
              ? filterLists(companyFullList)
                  .slice(currentPage * 10, currentPage * 10 + 10)
                  .map((company) => (
                    <DatagridRow
                      key={company.id}
                      address={company.address}
                      city={company.city}
                      id={company.id}
                      isRender={render}
                      lastUpdate={company.last_update}
                      name={company.name}
                      referenceContact={company.reference_contact}
                      setAllChecked={setChecked}
                      update={setRender}
                      userLastUpdate={company.user_last_update}
                    />
                  ))
              : undefined}
          </tbody>
        </table>
        <div className={classes.table_slider_container}>
          <div className={classes.table_slider}>
            {!companyFullList ||
            filterLists(companyFullList).length < 10 ? undefined : (
              <ReactPaginate
                activeClassName="active"
                breakClassName="page-item"
                breakLabel="..."
                breakLinkClassName="page-link"
                containerClassName="pagination"
                marginPagesDisplayed={2}
                nextClassName="page-item"
                nextLabel="Next>>"
                nextLinkClassName="page-link"
                // eslint-disable-next-line react/jsx-no-bind
                onPageChange={handlePageClick}
                pageClassName="page-item"
                pageCount={pageCount}
                pageLinkClassName="page-link"
                pageRangeDisplayed={5}
                previousClassName="page-item"
                previousLabel="<<Previous"
                previousLinkClassName="page-link"
              />
            )}
          </div>
        </div>
        {companyFullList ? undefined : (
          <div className={classes.progress_container}>
            <CircularProgress />
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyManagementDataGrid;
