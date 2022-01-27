import './CreateProjectForm.scss';
import '../../../../theme/ButtonColors.scss';

import { yupResolver } from '@hookform/resolvers/yup';
import { t } from 'i18next';
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
  getUpdateProjectSuccess,
} from '../../../../redux/project-management-redux/project.selector';
import {
  createNewProject,
  getProjectList,
  resetNewProjectData,
  resetUpdateProjectData,
  updateProject,
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
  const updateProjectSuccess = useSelector(getUpdateProjectSuccess);
  const [startDateValue, setStartDateValue] = React.useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
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

  const onEditSubmit = (data) => {
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
      companyData: data,
    };
    dispatch(updateProject(payloadData));
  };

  const handelEditCancel = () => {
    handelClose();

    // eslint-disable-next-line
    projectData.startDate = moment(projectData.startDate, 'YYYY-MM-DD').format(
      'DD MMM YYYY'
    );

    // eslint-disable-next-line
    projectData.completionDate = moment(
      projectData.completionDate,
      'YYYY-MM-DD'
    ).format('DD MMM YYYY');
  };

  React.useEffect(() => {
    if (editForm) {
      const tempProjectData = projectData;

      // eslint-disable-next-line
      tempProjectData.startDate = moment(
        tempProjectData.startDate,
        'DD MMM YYYY'
      ).format('YYYY-MM-DD');
      setStartDateValue(tempProjectData.startDate);
      // eslint-disable-next-line
      tempProjectData.completionDate = moment(
        tempProjectData.completionDate,
        'DD MMM YYYY'
      ).format('YYYY-MM-DD');

      reset(tempProjectData);

      if (updateProjectSuccess) {
        dispatch(resetUpdateProjectData());
        handelEditCancel();
      }
    } else if (isCreateProjectError) {
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
      dispatch(getProjectList(authToken));
      dispatch(resetNewProjectData());
    }
  }, [isCreateProjectLoading, projectData, updateProjectSuccess]);

  return (
    <div className="create-project-form-base-div">
      {<GlobalSpinner isOpen={isCreateProjectLoading} />}
      {editForm ? <h2>{t('editProject')}</h2> : <h2>{t('createProject')}</h2>}

      <form
        className="create-project-form"
        onSubmit={
          editForm ? handleSubmit(onEditSubmit) : handleSubmit(onSubmit)
        }
      >
        <div>
          <label>
            {t('projectName')} <sup>*</sup>{' '}
          </label>
          <input {...register('name')} id="name" type="text" />
          <span className="form-error-text">{errors.name?.message}</span>
        </div>
        <div>
          <label>
            {t('client')} <sup>*</sup>{' '}
          </label>
          <input {...register('clientName')} id="clientName" type="text" />
          <span className="form-error-text">{errors.clientName?.message}</span>
        </div>
        <div>
          <label>
            {t('description')} <sup>*</sup>{' '}
          </label>

          <textarea
            rows={5}
            {...register('description')}
            id="description"
            type="text"
          />
          <span className="form-error-text">{errors.description?.message}</span>
        </div>
        <div>
          <label>
            {t('startDate')} <sup>*</sup>{' '}
          </label>
          <input
            {...register('startDate')}
            id="startDate"
            min={new Date().toISOString().split('T')[0]}
            onChange={(e) => setStartDateValue(e.target.value)}
            type="date"
          />
          <span className="form-error-text">{errors.startDate?.message}</span>
        </div>
        <div>
          <label>
            {t('completionDate')} <sup>*</sup>{' '}
          </label>
          <input
            {...register('completionDate')}
            id="completionDate"
            min={
              !startDateValue
                ? new Date().toISOString().split('T')[0]
                : startDateValue
            }
            type="date"
          />
          <span className="form-error-text">
            {errors.completionDate?.message}
          </span>
        </div>
        <div className="create-project-form-submit-div">
          <button
            className="cancel-button"
            onClick={editForm ? handelEditCancel : handelClose}
            type="button"
          >
            {t('cancel')}
          </button>
          <button
            className="create-project-submit-button"
            type="submit"
            variant="contained"
          >
            {t('submit')}
          </button>
        </div>
      </form>
    </div>
  );
};

/* eslint-disable */
CreateProjectForm.propTypes = {
  handelClose: PropTypes.isRequired,
  editForm: PropTypes.bool.isRequired,
};

export default CreateProjectForm;
