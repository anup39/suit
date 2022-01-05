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
      <div className="worklist-form-container">
        <form onSubmit={handleSubmit}>
          <span>
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
          </span>

          <span>
            <label>Task ID</label>
            <input
              name="taskId"
              onChange={(e) => handleFormDataChange(e)}
              value={workListFormData.taskId}
            />
          </span>

          <span>
            <label>Task Name</label>
            <input
              name="taskName"
              onChange={(e) => handleFormDataChange(e)}
              value={workListFormData.taskName}
            />
          </span>

          <span>
            <label>Task Description</label>
            <textarea
              name="taskDescription"
              onChange={(e) => handleFormDataChange(e)}
              value={workListFormData.taskDescription}
            />
          </span>

          <span>
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
          </span>

          <span>
            <label>Type</label>
            <input
              name="type"
              onChange={(e) => handleFormDataChange(e)}
              value={workListFormData.type}
            />
          </span>

          <span>
            <label>Priority</label>
            <input
              name="priority"
              onChange={(e) => handleFormDataChange(e)}
              value={workListFormData.priority}
            />
          </span>

          <div className="worklist-management-gird">
            <span>
              <label>Start Date</label>
              <input
                name="start"
                onChange={(e) => handleFormDataChange(e)}
                type="date"
                value={workListFormData.start}
              />
            </span>

            <span>
              <label>End Date</label>
              <input
                name="end"
                onChange={(e) => handleFormDataChange(e)}
                type="date"
                value={workListFormData.end}
              />
            </span>
          </div>

          <span>
            <label>Street</label>
            <input
              name="street"
              onChange={(e) => handleFormDataChange(e)}
              value={workListFormData.street}
            />
          </span>

          <span>
            <label>Zip Code</label>
            <input
              name="zipCode"
              onChange={(e) => handleFormDataChange(e)}
              value={workListFormData.zipCode}
            />
          </span>

          <span>
            <label>City</label>
            <input
              name="city"
              onChange={(e) => handleFormDataChange(e)}
              value={workListFormData.city}
            />
          </span>

          <span>
            <label>Country</label>
            <input
              name="country"
              onChange={(e) => handleFormDataChange(e)}
              value={workListFormData.country}
            />
          </span>
          <div className="worklist-management-gird">
            <span>
              <label>Latitude</label>
              <input
                name="latitude"
                onChange={(e) => handleFormDataChange(e)}
                value={workListFormData.latitude}
              />
            </span>

            <span>
              <label>Longitude</label>
              <input
                name="longitude"
                onChange={(e) => handleFormDataChange(e)}
                value={workListFormData.longitude}
              />
            </span>
          </div>

          <span>
            <label>Geofence</label>

            <input
              name="geoFence"
              onChange={(e) => handleFormDataChange(e)}
              value={workListFormData.geoFence}
            />
          </span>

          <span>
            <label>Note</label>

            <textarea
              name="note"
              onChange={(e) => handleFormDataChange(e)}
              value={workListFormData.note}
            />
          </span>

          <span>
            <label>Documents</label>
            <input
              name="documents"
              onChange={(e) => handleFormDataChange(e)}
              value={workListFormData.documents}
            />
          </span>

          <span>
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
          </span>
        </form>
      </div>
      <div className="worklist-submit-div">
        <span className="worklist-cancel-button" onClick={handelClose}>
          Cancel
        </span>
        <span className="worklist-submit-button" onClick={handleSubmit}>
          Submit
        </span>
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
