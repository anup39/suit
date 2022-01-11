import './WorklistForm.scss';

// import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import { getAllProjects } from '../../../../redux/project-management-redux/project.selector';
import { getProjectList } from '../../../../redux/project-management-redux/project-management.actions';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';
import {
  addWorkList,
  getTaskByID,
} from '../../../../redux/worklist-management-redux/worklist.actions';
// import { getCurrentTaskData } from '../../../../redux/worklist-management-redux/worklist.selector';
// import schema from './work.list.schema';

const WorklistForm = ({ isEdit = false, handelClose, workId }) => {
  const dispatch = useDispatch();
  // const currentTaskData = useSelector(getCurrentTaskData);
  const authToken = useSelector(getUserAuthToken);
  const projectList = useSelector(getAllProjects);

  const [workListFormData, setWorkListFormData] = React.useState({
    taskId: '',
    projectsId: '',
    taskName: '',
    taskDescription: '',
    isMilestone: '',
    type: '',
    priority: '',
    start: '',
    end: '',
    street: '',
    zipCode: '',
    city: '',
    country: '',
    latitude: '',
    longitude: '',
    note: '',
    documents: '',
    geoFence: '',
    taskStatus: '',
  });

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;

    // if (name === 'start' && name === 'end') {
    //   value = moment(value).format('DD MMMM YYYY');
    // }

    setWorkListFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const data = { authToken, workListFormData };
    dispatch(addWorkList(data));
  };

  if (isEdit) {
    // setWorkListFormData((prevState) => ({
    // ...prevState,
    // currentTaskData,
    // }));

    React.useEffect(() => {
      const data = {
        authToken,
        taskId: workId,
      };
      dispatch(getTaskByID(data));
    }, []);
  } else {
    React.useEffect(() => {
      dispatch(getProjectList(authToken));
    }, []);
  }

  return (
    <div className="worklist-form-base-div">
      {!isEdit ? <h2>Add Worklist</h2> : <h2>Edit Worklist</h2>}
      <form className="worklist-form-container" onSubmit={handleSubmit}>
        <div>
          <label>Project Name</label>
          {isEdit ? (
            <select
              className="select-company-field-disabled"
              disabled
              name="projectsId"
              onChange={(e) => handleFormDataChange(e)}
              value={workListFormData.projectsId}
            >
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
              onChange={(e) => handleFormDataChange(e)}
              value={workListFormData.projectsId}
            >
              {projectList.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
          )}
        </div>

        <div>
          <label>Task ID</label>
          <input
            name="taskId"
            onChange={(e) => handleFormDataChange(e)}
            value={workListFormData.taskId}
          />
        </div>

        <div>
          <label>Task Name</label>
          <input
            name="taskName"
            onChange={(e) => handleFormDataChange(e)}
            value={workListFormData.taskName}
          />
        </div>

        <div>
          <label>Task Description</label>
          <textarea
            name="taskDescription"
            onChange={(e) => handleFormDataChange(e)}
            rows={3}
            value={workListFormData.taskDescription}
          />
        </div>

        <div>
          <label>Ismilestone</label>
          {/* <input
              name="isMilestone"
              onChange={(e) => handleFormDataChange(e)}
              value={workListFormData.isMilestone}
            /> */}
          <select
            className="select-company-field"
            name="isMilestone"
            onChange={(e) => handleFormDataChange(e)}
            value={workListFormData.isMilestone}
          >
            <option value={0}>Yes</option>
            <option selected value={1}>
              No
            </option>
          </select>
        </div>

        <div>
          <label>Type</label>
          <input
            name="type"
            onChange={(e) => handleFormDataChange(e)}
            value={workListFormData.type}
          />
        </div>

        <div>
          <label>Priority</label>
          <input
            name="priority"
            onChange={(e) => handleFormDataChange(e)}
            value={workListFormData.priority}
          />
        </div>

        <div className="worklist-management-gird">
          <div>
            <label>Start Date</label>
            <input
              name="start"
              onChange={(e) => handleFormDataChange(e)}
              type="date"
              value={workListFormData.start}
            />
          </div>

          <div>
            <label>End Date</label>
            <input
              name="end"
              onChange={(e) => handleFormDataChange(e)}
              type="date"
              value={workListFormData.end}
            />
          </div>
        </div>

        <div>
          <label>Street</label>
          <input
            name="street"
            onChange={(e) => handleFormDataChange(e)}
            value={workListFormData.street}
          />
        </div>

        <div>
          <label>Zip Code</label>
          <input
            name="zipCode"
            onChange={(e) => handleFormDataChange(e)}
            value={workListFormData.zipCode}
          />
        </div>

        <div>
          <label>City</label>
          <input
            name="city"
            onChange={(e) => handleFormDataChange(e)}
            value={workListFormData.city}
          />
        </div>

        <div>
          <label>Country</label>
          <input
            name="country"
            onChange={(e) => handleFormDataChange(e)}
            value={workListFormData.country}
          />
        </div>
        <div className="worklist-management-gird">
          <div>
            <label>Latitude</label>
            <input
              name="latitude"
              onChange={(e) => handleFormDataChange(e)}
              value={workListFormData.latitude}
            />
          </div>

          <div>
            <label>Longitude</label>
            <input
              name="longitude"
              onChange={(e) => handleFormDataChange(e)}
              value={workListFormData.longitude}
            />
          </div>
        </div>

        <div>
          <label>Geofence</label>

          <input
            name="geoFence"
            onChange={(e) => handleFormDataChange(e)}
            value={workListFormData.geoFence}
          />
        </div>

        <div>
          <label>Note</label>

          <textarea
            name="note"
            onChange={(e) => handleFormDataChange(e)}
            rows={3}
            value={workListFormData.note}
          />
        </div>

        <div>
          <label>Documents</label>
          <input
            name="documents"
            onChange={(e) => handleFormDataChange(e)}
            value={workListFormData.documents}
          />
        </div>

        <div>
          <label>Task Status</label>
          {/* <input
            
            /> */}
          <select
            className="select-company-field"
            name="taskStatus"
            onChange={(e) => handleFormDataChange(e)}
            value={workListFormData.taskStatus}
          >
            <option> Not assigned</option>
            <option> Not started</option>
            <option> In progress/started</option>
            <option> Waiting for feedback</option>
            <option> Suspended</option>
            <option> Completed</option>
            <option> Canceled</option>
            <option> Approved</option>
          </select>
        </div>
      </form>
      <div className="worklist-submit-div">
        <button
          className="worklist-cancel-button"
          onClick={handelClose}
          type="button"
        >
          Cancel
        </button>
        <button
          className="worklist-submit-button"
          onClick={handleSubmit}
          type="button"
        >
          Submit
        </button>
      </div>
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

// TODO: Edit Form
