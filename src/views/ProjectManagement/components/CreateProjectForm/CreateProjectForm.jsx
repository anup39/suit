import './CreateProjectForm.scss';
import '../../../../theme/ButtonColors.scss';

import { yupResolver } from '@hookform/resolvers/yup';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import GlobalSpinner from '../../../../components/shared/Spinners/GlobalSpinner';
import {
  getCreateProjectData,
  getCreateProjectError,
  getCreateProjectLoadingStatus,
  getProjectData,
} from '../../../../redux/project-management-redux/project.selector';
import {
  createNewProject,
  resetNewProjectData,
} from '../../../../redux/project-management-redux/project-management.actions';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';
import schema from './create-form-schema';

const CreateProjectForm = ({ handelClose, editForm }) => {
  const dispatch = useDispatch();
  const authToken = useSelector(getUserAuthToken);
  const projectData = useSelector(getProjectData);
  const isCreateProjectLoading = useSelector(getCreateProjectLoadingStatus);
  const isCreateProjectError = useSelector(getCreateProjectError);
  const createdProjectData = useSelector(getCreateProjectData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: projectData,
  });

  const onSubmit = (data) => {
    // eslint-disable-next-line
    data.startDate = moment(data['startDate'], 'YYYY-MM-DD').format(
      'DD MMM YYYY'
    );

    // eslint-disable-next-line
    data.completionDate = moment(data['completionDate'], 'YYYY-MM-DD').format(
      'DD MMM YYYY'
    );

    const payloadData = {
      authToken,
      newCompanyData: data,
    };
    dispatch(createNewProject(payloadData));
  };

  React.useEffect(() => {
    if (isCreateProjectError) {
      toast.error('Failed to Create New Project!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(resetNewProjectData());
    } else if (createdProjectData) {
      toast.success('New Project Created!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      handelClose();
      dispatch(resetNewProjectData());
    }
  }, [isCreateProjectLoading]);

  return (
    <div className="create-project-form-base-div">
      {}
      {<GlobalSpinner isOpen={isCreateProjectLoading} />}
      {editForm ? <h2>Edit Project</h2> : <h2>Create Project</h2>}

      <form className="create-project-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Project Name</label>
          <input {...register('name')} id="name" type="text" />
          <span className="form-error-text">{errors.name?.message}</span>
        </div>
        <div>
          <label>Client</label>
          <input {...register('clientName')} id="clientName" type="text" />
          <span className="form-error-text">{errors.clientName?.message}</span>
        </div>
        <div>
          <label>Description</label>
          <textarea
            rows={5}
            {...register('description')}
            id="description"
            type="text"
          />
          <span className="form-error-text">{errors.description?.message}</span>
        </div>
        <div>
          <label>Start Date</label>
          <input
            {...register('startDate')}
            id="startDate"
            min={new Date().toISOString().split('T')[0]}
            type="date"
          />
          <span className="form-error-text">{errors.startDate?.message}</span>
        </div>
        <div>
          <label>Completion Date</label>
          <input
            {...register('completionDate')}
            id="completionDate"
            min={new Date().toISOString().split('T')[0]}
            type="date"
          />
          <span className="form-error-text">
            {errors.completionDate?.message}
          </span>
        </div>
        <div className="create-project-form-submit-div">
          <button className="cancel-button" onClick={handelClose} type="button">
            Cancel
          </button>
          <button
            className="create-project-submit-button"
            type="submit"
            variant="contained"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

CreateProjectForm.propTypes = {
  handelClose: PropTypes.isRequired,
  editForm: PropTypes.string.isRequired,
};

export default CreateProjectForm;

// TODO: FORM VALIDATION AND SUBMITTION
