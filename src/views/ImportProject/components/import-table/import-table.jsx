import Button from '@mui/material/Button';
import React from 'react';

import classes from './import-table.styles.module.scss';
import DatagridRow from './table-row';

const ImportDataGrid = () => {
  return (
    <div className={classes.datagrid_contaier}>
      <div className={classes.datagrid_head} />
      <div className={classes.datagrid_tables_containers}>
        <table className={classes.datagrid_tables}>
          <thead className={classes.table_heads}>
            <tr className={classes.table_heads_row}>
              <th className={classes.head_row_head}>
                <input type="checkbox" />
              </th>
              <th className={classes.head_row_head}>Project Name</th>
              <th className={classes.head_row_head}>Worklist File</th>
              <th className={classes.head_row_head}>QGIS</th>
              <th className={classes.head_row_head}>Documents</th>
              <th className={classes.head_row_head}>Uploaded on</th>
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

export default ImportDataGrid;
