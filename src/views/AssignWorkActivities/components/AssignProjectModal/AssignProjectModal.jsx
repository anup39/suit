import './AssignProjectModal.scss';

// import Box from '@mui/material/Box';
// import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { getCompaniesList } from '../../../../redux/company-redux/company.selectors';
import { getAllProjects } from '../../../../redux/project-management-redux/project.selector';
import {
  assignProject,
  getProjectList,
} from '../../../../redux/project-management-redux/project-management.actions';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';

const AssignProjectModal = ({ handleClose }) => {
  const dispatch = useDispatch();
  const companiesList = useSelector(getCompaniesList);
  const projectList = useSelector(getAllProjects);
  const authToken = useSelector(getUserAuthToken);
  // const isAssignProjectLoading = useSelector(getAssignProjectLoading);

  const [selectedCompany, setSelectedCompany] = React.useState('');
  const [selectedProject, setSelectedProject] = React.useState('');

  const handleSubmit = () => {
    if (!selectedCompany && !selectedProject) {
      toast.warn('Please Select Both Fields!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const data = {
        authToken,
        projectId: parseInt(selectedProject, 10),
        companyId: parseInt(selectedCompany, 10),
      };

      dispatch(assignProject(data));
    }
  };

  React.useEffect(() => {
    dispatch(getProjectList(authToken));
  }, []);

  return (
    <div className="assign-project-modal-base">
      <h2> Assign Project</h2>
      <form className="assign-project-form-base">
        <label>Project Name</label>
        <select
          className="assign-project-select-input"
          onChange={(e) => setSelectedProject(e.target.value)}
          value={selectedProject}
        >
          <option value=""> Select a Project</option>

          {projectList &&
            projectList.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
        </select>

        <label>Company</label>
        <select
          className="assign-project-select-input"
          onChange={(e) => setSelectedCompany(e.target.value)}
          value={selectedCompany}
        >
          <option value=""> Select a Company</option>
          {companiesList &&
            companiesList.map((company) => (
              <option key="company" value={company.id}>
                {company.name}
              </option>
            ))}
        </select>
      </form>
      <div className="assign-work-submit-div">
        <button
          className="assign-work-cancel-button"
          onClick={handleClose}
          type="button"
        >
          Cancel
        </button>
        {/* {isAssignProjectLoading ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        ) : ( */}
        <button
          className="assign-work-submit-button"
          onClick={handleSubmit}
          type="button"
        >
          Assign
        </button>
        {/* )} */}
      </div>
    </div>
  );
};

AssignProjectModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default AssignProjectModal;
