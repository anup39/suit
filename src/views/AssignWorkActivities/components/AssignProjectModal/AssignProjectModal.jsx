import './AssignProjectModal.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCompaniesList } from '../../../../redux/company-redux/company.selectors';
import { getAllProjects } from '../../../../redux/project-management-redux/project.selector';
import { getProjectList } from '../../../../redux/project-management-redux/project-management.actions';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';

const AssignProjectModal = ({ handleClose }) => {
  const dispatch = useDispatch();
  const companiesList = useSelector(getCompaniesList);
  const projectList = useSelector(getAllProjects);
  const authToken = useSelector(getUserAuthToken);

  React.useEffect(() => {
    dispatch(getProjectList(authToken));
  }, []);

  return (
    <div className="assign-project-modal-base">
      <h2> Assign Project</h2>

      {console.log(companiesList)}
      {console.log(projectList)}

      <form className="assign-project-form-base">
        <label>Project Name</label>
        <select className="assign-project-select-input">
          {projectList &&
            projectList.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
        </select>

        <label>Company</label>
        <select className="assign-project-select-input">
          <option>company 1</option>
          <option>company 2</option>
          <option>company 3</option>
          <option>company 4</option>
          <option>company 5</option>
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
        <button className="assign-work-submit-button" type="button">
          Assign
        </button>
      </div>
    </div>
  );
};

AssignProjectModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default AssignProjectModal;
