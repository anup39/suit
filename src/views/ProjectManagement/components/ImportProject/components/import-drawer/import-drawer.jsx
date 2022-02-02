import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import {
  getAllProjects,
  getImportProjectDataLoading,
  getImportProjectDataSuccess,
} from '../../../../../../redux/project-management-redux/project.selector';
import {
  importProjectData,
  importProjectDataReset,
} from '../../../../../../redux/project-management-redux/project-management.actions';
import { getUserAuthToken } from '../../../../../../redux/user-redux/user.selectors';
import classes from './import-drawer.styles.module.scss';

const ImportDrawer = ({ isOpen, handleClose }) => {
  const [projectId, setprojectId] = React.useState('');

  const dispatch = useDispatch();
  const authToken = useSelector(getUserAuthToken);
  const projectList = useSelector(getAllProjects);

  const isImportProjectDataLoading = useSelector(getImportProjectDataLoading);
  const importProjectDataSuccess = useSelector(getImportProjectDataSuccess);

  const formData = new FormData();
  const { t } = useTranslation();
  const docType = 'Contractor';
  const closeDrawer = () => {
    handleClose(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!projectId) {
      toast.warn('Please Select A Project!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const dataToSend = {
        authToken,
        data: formData,
        projectId,
        docType,
      };
      dispatch(importProjectData(dataToSend));
    }
  };

  const handleQgisChangeChange = (e) => {
    const qgisFile = e.target.files;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < qgisFile.length; i++) {
      formData.append('qgisFile', qgisFile[i]);
    }
  };

  const handleWorkListChange = (e) => {
    e.preventDefault();
    const worklistfiles = e.target.files;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < worklistfiles.length; i++) {
      formData.append('workListFile', worklistfiles[i]);
    }
  };

  const handleDocumntsChange = (e) => {
    e.preventDefault();
    const documentsFile = e.target.files;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < documentsFile.length; i++) {
      formData.append('documentsFile', documentsFile[i]);
    }
  };

  React.useEffect(() => {
    if (importProjectDataSuccess) {
      handleClose();
      dispatch(importProjectDataReset());
    }
  }, [isImportProjectDataLoading]);

  return (
    <Drawer anchor="right" onClose={closeDrawer} open={isOpen}>
      <Box
        className="add-feedback"
        role="presentation"
        sx={{ width: 400, padding: 3 }}
      >
        {' '}
        <div className={classes.import_container}>
          <div className={classes.import_form_box}>
            <h3 className={classes.import_form_header}>
              {t('importProjectData')}
            </h3>
            <form
              className={classes.form_container}
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className={classes.form_input_container}>
                <label className={classes.form_label} htmlFor="name">
                  {t('projectName')}
                </label>
                <select
                  className={classes.form_input}
                  onChange={(e) => setprojectId(e.target.value)}
                >
                  <option value=""> {t('selectAProject ')}</option>
                  {projectList.map((vals) => (
                    <option key={vals.id} value={vals.id}>
                      {vals.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className={classes.form_input_container}>
                <label className={classes.form_label} htmlFor="name">
                  {t('workList')}
                </label>
                <input
                  accept=".csv, .xml"
                  className={classes.form_input}
                  multiple
                  onChange={handleWorkListChange}
                  type="file"
                />
              </div>
              <div className={classes.form_input_container}>
                <label className={classes.form_label} htmlFor="name">
                  {t('QGISFiles')}
                </label>
                <input
                  accept=".jpg, .jpeg, .png, .pdf, .docx, mpeg, mpeg4, .xml, .zip"
                  className={classes.form_input}
                  multiple
                  onChange={handleQgisChangeChange}
                  type="file"
                />
              </div>
              <div className={classes.form_input_container}>
                <label className={classes.form_label} htmlFor="name">
                  {t('documents')}
                </label>
                <input
                  accept=".jpg, .jpeg, .png, .pdf, .docx, mpeg, mpeg4, .xml, .zip"
                  className={classes.form_input}
                  multiple
                  onChange={handleDocumntsChange}
                  type="file"
                />
              </div>

              <div className={classes.action_buttons_container}>
                <Button
                  className="cancel-btn"
                  onClick={closeDrawer}
                  type="submit"
                >
                  {t('cancel')}
                </Button>
                <Button
                  className="submit-button"
                  type="submit"
                  variant="contained"
                >
                  {t('upload')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Box>
    </Drawer>
  );
};

ImportDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ImportDrawer;
