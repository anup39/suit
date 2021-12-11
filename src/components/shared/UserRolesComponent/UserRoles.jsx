import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import * as React from 'react';

import classes from './styles/userRoles.module.scss';

const UserRolesDataGrid = () => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 6,
  });

  return (
    <div className={classes.roles_container}>
      <DataGrid checkboxSelection disableSelectionOnClick {...data} />
    </div>
  );
};

export default UserRolesDataGrid;
