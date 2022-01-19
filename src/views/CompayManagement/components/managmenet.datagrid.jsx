import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
// import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
import MobileDataRow from '../mobile.data.row';
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
  const { t } = useTranslation();

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
    <div className={classes.company_datagrid_contaier}>
      <div className={classes.cpy_datagrid_head}>
        <div className={classes.head_search}>
          <SearchIcon sx={{ color: '#8094AE' }} />
          <input
            checked={checked}
            className={classes.search_input}
            onChange={updateSearchItem}
            placeholder={t('companySearch')}
            type="text"
          />
        </div>
        <Button
          className={classes.delete_button}
          disabled={companyFullListToDelete.length === 0}
          onClick={deleteCompany}
          type="button"
        >
          {t('delete')}
        </Button>
      </div>
      <div className={classes.datagrid_tables_containers}>
        <table className={classes.datagrid_tables}>
          <thead className={classes.table_heads}>
            <tr className={classes.table_heads_row}>
              <th className={classes.head_row_head}>
                <input onClick={updateCheckbox} type="checkbox" />
              </th>
              <th className={classes.head_row_head}>{t('companyName')}</th>
              <th className={classes.head_row_head}>{t('address')}</th>
              <th className={classes.head_row_head}>{t('city')}</th>
              <th className={classes.head_row_head}>{t('referenceContact')}</th>
              <th className={classes.head_row_head}>{t('lastUpdate')}</th>
              <th className={classes.head_row_head}>{t('userlastUpdate')}</th>
              <th className={classes.head_row_head}>{t('actions')}</th>
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

        {companyFullList ? undefined : (
          <div className={classes.progress_container}>
            <CircularProgress />
          </div>
        )}
      </div>
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
            nextLabel={t('next')}
            nextLinkClassName="page-link"
            // eslint-disable-next-line react/jsx-no-bind
            onPageChange={handlePageClick}
            pageClassName="page-item"
            pageCount={pageCount}
            pageLinkClassName="page-link"
            pageRangeDisplayed={5}
            previousClassName="page-item"
            previousLabel={t('prev')}
            previousLinkClassName="page-link"
          />
        )}
      </div>
      <div className={classes.mobile_table_cmpy_mgmt}>
        <MobileDataRow />
        <MobileDataRow />
        <MobileDataRow />
        <MobileDataRow />
        <MobileDataRow />
        <MobileDataRow />
        <MobileDataRow />
      </div>
    </div>
  );
};

export default CompanyManagementDataGrid;
