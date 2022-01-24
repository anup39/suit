import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getProjcectDocuments,
  getProjectData,
} from '../../../../../../redux/project-management-redux/project.selector';
import { projectDocuments } from '../../../../../../redux/project-management-redux/project-management.actions';
import { getUserAuthToken } from '../../../../../../redux/user-redux/user.selectors';
import classes from './import-table.styles.module.scss';
import DatagridRow from './table-row';

const ImportDataGrid = () => {
  const dispatch = useDispatch();
  const authToken = useSelector(getUserAuthToken);
  const currentProject = useSelector(getProjectData);
  const currentProjectDocuments = useSelector(getProjcectDocuments);

  React.useEffect(() => {
    const data = {
      authToken,
      projectId: currentProject.id,
    };

    dispatch(projectDocuments(data));
  }, []);

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
            {currentProjectDocuments && currentProjectDocuments.length === 0 ? (
              <div className={classes.no_data_found}>
                <p style={{ textAlign: 'center' }}>No Data Found!</p>
              </div>
            ) : (
              currentProjectDocuments &&
              currentProjectDocuments.map(() => <DatagridRow key="test" />)
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImportDataGrid;
