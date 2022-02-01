import './AssignProjectModal.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import GlobalSpinner from '../../../../components/shared/Spinners/GlobalSpinner';
import { getCompaniesList } from '../../../../redux/company-redux/company.selectors';
import {
  getAllProjects,
  getAssignProjectLoading,
  getAssignProjectSuccess,
} from '../../../../redux/project-management-redux/project.selector';
import {
  assignProject,
  getProjectList,
  resetAssignProject,
} from '../../../../redux/project-management-redux/project-management.actions';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';

const AssignProjectModal = ({ handleClose }) => {
  const dispatch = useDispatch();
  const companiesList = useSelector(getCompaniesList);
  const projectList = useSelector(getAllProjects);
  const authToken = useSelector(getUserAuthToken);
  const isAssignProjectLoading = useSelector(getAssignProjectLoading);
  const assignProjectSuccess = useSelector(getAssignProjectSuccess);

  const [selectedCompany, setSelectedCompany] = React.useState('');
  const [selectedProject, setSelectedProject] = React.useState('');
  const { t } = useTranslation();

  const handleSubmit = () => {
    if (!selectedCompany || !selectedProject) {
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
    if (projectList.length === 0) {
      dispatch(getProjectList(authToken));
    } else if (assignProjectSuccess.status === 200) {
      handleClose();
      dispatch(resetAssignProject());
    }
  }, [isAssignProjectLoading]);

  return (
    <div className="assign-project-modal-base">
      <GlobalSpinner isOpen={isAssignProjectLoading} />
      <h2> {t('assignProject')}</h2>
      <form className="assign-project-form-base">
        <label>{t('projectName')}</label>
        <select
          className="assign-project-select-input"
          onChange={(e) => setSelectedProject(e.target.value)}
          value={selectedProject}
        >
          <option value=""> {t('selectAProject')}</option>

          {projectList &&
            projectList.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
        </select>

        <label>{t('company')}</label>
        <select
          className="assign-project-select-input"
          onChange={(e) => setSelectedCompany(e.target.value)}
          value={selectedCompany}
        >
          <option value=""> {t('pleaseSelectACompany')}</option>
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
          {t('cancel')}
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
          {t('assign')}
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
