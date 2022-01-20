import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { getAllProjects } from '../../../../../../redux/project-management-redux/project.selector';
import { importProjectData } from '../../../../../../redux/project-management-redux/project-management.actions';
import { getUserAuthToken } from '../../../../../../redux/user-redux/user.selectors';
import classes from './import-drawer.styles.module.scss';

const ImportDrawer = ({ isOpen, handleClose }) => {
  const [projectId, setprojectId] = React.useState('');
  const dispatch = useDispatch();
  const authToken = useSelector(getUserAuthToken);
  const projectList = useSelector(getAllProjects);
  const formData = new FormData();

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
      };
      dispatch(importProjectData(dataToSend));
    }
  };

  const handleQgisChangeChange = (e) => {
    formData.append('qgisFile', e.target.files);
  };

  const handleWorkListChange = (e) => {
    e.preventDefault();
    formData.append('workListFile', e.target.files);
  };

  const handleDocumntsChange = (e) => {
    e.preventDefault();
    formData.append('documentsFile', e.target.files);
  };

  React.useEffect(() => {}, []);

  return (
    <Drawer anchor="right" onClose={closeDrawer} open={isOpen}>
      <Box role="presentation" sx={{ width: 350, padding: 5, height: '100%' }}>
        <div className={classes.import_container}>
          <div className={classes.import_form_box}>
            <h3 className={classes.import_form_header}>Import Project Data</h3>
            <form
              className={classes.form_container}
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className={classes.form_input_container}>
                <label className={classes.form_label} htmlFor="name">
                  Project Name
                </label>
                <select
                  className={classes.form_input}
                  onChange={(e) => setprojectId(e.target.value)}
                >
                  <option value=""> Select A Project</option>
                  {projectList.map((vals) => (
                    <option key={vals.id} value={vals.id}>
                      {vals.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className={classes.form_input_container}>
                <label className={classes.form_label} htmlFor="name">
                  Work List
                </label>
                <input
                  accept=".jpg, .jpeg, .png, .pdf, .docx, mpeg, mpeg4, .xml, .zip"
                  className={classes.form_input}
                  multiple
                  onChange={handleWorkListChange}
                  type="file"
                />
              </div>
              <div className={classes.form_input_container}>
                <label className={classes.form_label} htmlFor="name">
                  QGIS Files
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
                  Documents
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
                <span className={classes.form_button_1}>
                  <Button color="error" onClick={closeDrawer}>
                    Cancel
                  </Button>
                </span>
                <Button type="submit" variant="contained">
                  Upload
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
