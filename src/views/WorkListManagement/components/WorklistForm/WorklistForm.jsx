import './WorklistForm.scss';

import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { connect, useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { getAllProjects } from '../../../../redux/project-management-redux/project.selector';
import { getProjectList } from '../../../../redux/project-management-redux/project-management.actions';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';
import {
  addWorkList,
  editWorkList,
  getTaskByID,
  getWorkList,
  resetAddTaskData,
  resetEditTaskData,
} from '../../../../redux/worklist-management-redux/worklist.actions';
import {
  getAddWorkListError,
  getAddWorkListSuccess,
  getCurrentTaskData,
  getEditWorkListError,
  getEditWorkListSuccess,
} from '../../../../redux/worklist-management-redux/worklist.selector';
import schema from './work.list.schema';

const WorklistForm = ({ isEdit = false, handelClose, workId }) => {
  const dispatch = useDispatch();
  const currentTaskData = useSelector(getCurrentTaskData);
  const authToken = useSelector(getUserAuthToken);
  const projectList = useSelector(getAllProjects);
  const addWorklistSuccess = useSelector(getAddWorkListSuccess);
  const addWorklistError = useSelector(getAddWorkListError);

  const editWorklistSuccess = useSelector(getEditWorkListSuccess);
  const editWorklistError = useSelector(getEditWorkListError);

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
    data.start = moment(data.start, 'YYYY-MM-DD').format('DD MMM YYYY');
    // eslint-disable-next-line
    data.end = moment(data.end, 'YYYY-MM-DD').format('DD MMM YYYY');
    const dataToSend = {
      authToken,
      workListFormData: data,
    };
    dispatch(addWorkList(dataToSend));
  };

  const onEditSubmit = (data) => {
    // eslint-disable-next-line
    data.start = moment(data.start, 'YYYY-MM-DD').format('DD MMM YYYY');
    // eslint-disable-next-line
    data.end = moment(data.end, 'YYYY-MM-DD').format('DD MMM YYYY');
    const dataToSend = {
      authToken,
      workListFormData: data,
    };
    dispatch(editWorkList(dataToSend));
  };

  if (isEdit) {
    React.useEffect(() => {
      const data = {
        authToken,
        taskId: workId,
      };
      if (currentTaskData.taskId !== workId) {
        dispatch(getTaskByID(data));
      } else {
        currentTaskData.start = moment(
          currentTaskData.start,
          'DD MMM YYYY'
        ).format('YYYY-MM-DD');

        currentTaskData.end = moment(currentTaskData.end, 'DD MMM YYYY').format(
          'YYYY-MM-DD'
        );
        reset(currentTaskData);
      }

      if (editWorklistSuccess) {
        toast.success('Task Updated Successfully!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        handelClose();
        dispatch(getWorkList(authToken));
        dispatch(resetEditTaskData());
      } else if (editWorklistError) {
        toast.error('Failed to Edit Task!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch(resetEditTaskData());
      }
    }, [currentTaskData, editWorklistSuccess, editWorklistError]);
  } else {
    React.useEffect(() => {
      if (projectList.length === 0) {
        dispatch(getProjectList(authToken));
      } else if (addWorklistSuccess) {
        toast.success('New Task Added Successfully!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        handelClose();
        dispatch(getWorkList(authToken));
        dispatch(resetAddTaskData());
      } else if (addWorklistError) {
        toast.error('Failed to add task!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch(resetAddTaskData());
      }
    }, [addWorklistSuccess, addWorklistError]);
  }

  return (
    <div className="worklist-form-base-div">
      {!isEdit ? <h2>Add Worklist</h2> : <h2>Edit Worklist</h2>}

      <form
        className="worklist-form-container"
        onSubmit={isEdit ? handleSubmit(onEditSubmit) : handleSubmit(onSubmit)}
      >
        <div>
          <label>
            Project Name <sup>*</sup>{' '}
          </label>
          {isEdit ? (
            <select
              className="select-company-field-disabled"
              disabled
              name="projectsId"
              {...register('projectsId')}
              defaultValue={register('projectsId')}
            >
              <option value={false}> Select A Project </option>
              {projectList.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
          ) : (
            <select
              className="select-company-field"
              name="projectsId"
              {...register('projectsId')}
            >
              <option> Select A Project </option>

              {projectList.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
          )}
          <span className="worklistform-error-text">
            {errors.projectsId?.message}
          </span>
        </div>

        <div>
          <label>
            Task ID <sup>*</sup>{' '}
          </label>
          {isEdit ? (
            <input name="taskId" {...register('taskId')} disabled />
          ) : (
            <input name="taskId" {...register('taskId')} />
          )}

          <span className="worklistform-error-text">
            {errors.taskId?.message}
          </span>
        </div>

        <div>
          <label>
            Task Name <sup>*</sup>{' '}
          </label>
          <input name="taskName" {...register('taskName')} />
          <span className="worklistform-error-text">
            {errors.taskName?.message}
          </span>
        </div>

        <div>
          <label>
            Task Description <sup>*</sup>{' '}
          </label>
          <textarea
            name="taskDescription"
            rows={3}
            {...register('taskDescription')}
          />
          <span className="worklistform-error-text">
            {errors.taskDescription?.message}
          </span>
        </div>

        <div>
          <label>Ismilestone</label>

          <select
            className="select-company-field"
            name="isMilestone"
            {...register('isMilestone')}
          >
            <option value={0}>Yes</option>
            <option selected value={1}>
              No
            </option>
          </select>
          <span className="worklistform-error-text">
            {errors.isMilestone?.message}
          </span>
        </div>

        <div>
          <label>
            Type <sup>*</sup>{' '}
          </label>
          <input name="type" {...register('type')} />
          <span className="worklistform-error-text">
            {errors.type?.message}
          </span>
        </div>

        <div>
          <label>
            Priority <sup>*</sup>{' '}
          </label>
          <input name="priority" {...register('priority')} />
          <span className="worklistform-error-text">
            {errors.priority?.message}
          </span>
        </div>

        <div className="worklist-management-gird">
          <div>
            <label>
              Start Date <sup>*</sup>{' '}
            </label>
            <input name="start" type="date" {...register('start')} />
            <span className="worklistform-error-text">
              {errors.start?.message}
            </span>
          </div>

          <div>
            <label>
              End Date <sup>*</sup>{' '}
            </label>
            <input name="end" type="date" {...register('end')} />
            <span className="worklistform-error-text">
              {errors.end?.message}
            </span>
          </div>
        </div>

        <div>
          <label>Street</label>
          <input name="street" {...register('street')} />
          <span className="worklistform-error-text">
            {errors.street?.message}
          </span>
        </div>

        <div>
          <label>Zip Code</label>
          <input name="zipCode" {...register('zipCode')} />
          <span className="worklistform-error-text">
            {errors.zipCode?.message}
          </span>
        </div>

        <div>
          <label>City</label>
          <input name="city" {...register('city')} />
          <span className="worklistform-error-text">
            {errors.city?.message}
          </span>
        </div>

        <div>
          <label>
            Country <sup>*</sup>{' '}
          </label>
          <input name="country" {...register('country')} />
          <span className="worklistform-error-text">
            {errors.country?.message}
          </span>
        </div>
        <div className="worklist-management-gird">
          <div>
            <label>Latitude</label>
            <input name="latitude" {...register('latitude')} />
            <span className="worklistform-error-text">
              {errors.latitude?.message}
            </span>
          </div>

          <div>
            <label>Longitude</label>
            <input name="longitude" {...register('longitude')} />
            <span className="worklistform-error-text">
              {errors.longitude?.message}
            </span>
          </div>
        </div>

        <div>
          <label>Geofence</label>

          <input name="geoFence" {...register('geoFence')} />
          <span className="worklistform-error-text">
            {errors.geoFence?.message}
          </span>
        </div>

        <div>
          <label>Note</label>

          <textarea name="note" rows={3} {...register('note')} />
          <span className="worklistform-error-text">
            {errors.note?.message}
          </span>
        </div>

        <div>
          <label>Documents</label>
          <input name="documents" {...register('documents')} />
          <span className="worklistform-error-text">
            {errors.documents?.message}
          </span>
        </div>

        <p>
          Field Marked with <sup>*</sup> are Required
        </p>
        <div className="worklist-submit-div">
          <button
            className="worklist-cancel-button"
            onClick={handelClose}
            type="button"
          >
            Cancel
          </button>
          <Button
            className="create-project-submit-button"
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

WorklistForm.propTypes = {
  isEdit: PropTypes.isRequired,
  handelClose: PropTypes.func.isRequired,
  workId: PropTypes.isRequired,
};

const mapStateToProps = (state) => ({
  authToken: state.user.userData.accessToken,
});

export default connect(mapStateToProps)(WorklistForm);
