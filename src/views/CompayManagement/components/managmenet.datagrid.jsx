import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import React from 'react';

import classes from './datagrid.module.scss';
import DatagridRow from './datagrid.row';

const CompanyManagementDataGrid = () => {
  return (
    <div className={classes.datagrid_contaier}>
      <div className={classes.datagrid_head}>
        <div className={classes.head_search}>
          <SearchIcon />
          <input
            className={classes.search_input}
            placeholder="Company search"
            type="text"
          />
        </div>
        <button className={classes.delete_button} type="button">
          Delete
        </button>
      </div>
      <div className={classes.datagrid_tables_containers}>
        <table className={classes.datagrid_tables}>
          <thead className={classes.table_heads}>
            <tr className={classes.table_heads_row}>
              <th className={classes.head_row_head}>
                <input type="checkbox" />
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
            <DatagridRow />
            <DatagridRow />
            <DatagridRow />
            <DatagridRow />
            <DatagridRow />
            <DatagridRow />
            <DatagridRow />
            <DatagridRow />
            <DatagridRow />
            <DatagridRow />
          </tbody>
        </table>
        <div className={classes.table_slider_container}>
          <div className={classes.table_slider}>
            <span className={classes.previous_button}>
              <Button disabled variant="outlined">
                Prev
              </Button>
            </span>
            <div className={classes.page_buttons}>
              <span className={classes.chapter_button}>1</span>
              <span className={classes.chapter_button}>2</span>
            </div>
            <span className={classes.next_button}>
              <Button variant="outlined">Next</Button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyManagementDataGrid;
