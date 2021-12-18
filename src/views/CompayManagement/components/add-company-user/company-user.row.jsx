import React from 'react';

import classes from './row.styles.module.scss';

const DatagridRow = () => {
  return (
    <tr className={classes.row_container}>
      <td className={classes.row_description}>
        <input className={classes.row_input} type="checkbox" />
      </td>
      <td className={classes.row_description}>abdivakilov1981@gmail.com</td>
      <td className={classes.row_description}>engineer</td>
    </tr>
  );
};

export default DatagridRow;
