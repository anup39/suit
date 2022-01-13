import './CreateProjectForm.scss';
import '../../../../theme/ButtonColors.scss';

import { yupResolver } from '@hookform/resolvers/yup';
// import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { getProjectData } from '../../../../redux/project-management-redux/project.selector';
import { createNewProject } from '../../../../redux/project-management-redux/project-management.actions';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';
import schema from './create-form-schema';

const CreateProjectForm = ({ handelClose, editForm }) => {
  const dispatch = useDispatch();
  const authToken = useSelector(getUserAuthToken);
  const projectData = useSelector(getProjectData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: projectData,
  });

  const onSubmit = (data) => {
    const payloadData = {
      authToken,
      newCompanyData: data,
    };
    dispatch(createNewProject(payloadData));
  };

  return (
    <div className="create-project-form-base-div">
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
          <input {...register('startDate')} id="startDate" type="date" />
          <span className="form-error-text">{errors.startDate?.message}</span>
        </div>
        <div>
          <label>Completion Date</label>
          <input
            {...register('completionDate')}
            id="completionDate"
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
