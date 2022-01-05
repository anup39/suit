// import AddIcon from '@mui/icons-material/Add';
import React from 'react';

import ImportDrawer from './components/import-drawer/import-drawer';
import ImportDataGrid from './components/import-table/import-table';
import classes from './styles/import-project.styles.module.scss';

const ImportProjectPage = () => {
  const [menu, setMenu] = React.useState(false);
  // const openmenu = () => {
  //   setMenu(true);
  // };
  return (
    <div className={classes.import_container}>
      <div className={classes.import_header}>
        <div className={classes.header_button_container}>
          <ImportDrawer handleClose={setMenu} isOpen={menu} />
          {/* <button
            ButtonUnstyled
            className={classes.header_button}
            onClick={openmenu}
            type="button"
          >
            <AddIcon /> import Data
          </button> */}
        </div>
      </div>
      <ImportDataGrid />
    </div>
  );
};

export default ImportProjectPage;
