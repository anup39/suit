import './WorklistForm.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { connect, useDispatch } from 'react-redux';

// useSelector
import {
  addWorkList,
  getTaskByID,
} from '../../../../redux/worklist-management-redux/worklist.actions';
// import { getCurrentTaskData } from '../../../../redux/worklist-management-redux/worklist.selector';
// import schema from './work.list.schema';

const WorklistForm = ({ isEdit = false, handelClose, authToken, workId }) => {
  const dispatch = useDispatch();
  // const currentTaskData = useSelector(getCurrentTaskData);

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
    setWorkListFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const populateFormData = (name, value) => {
  //   setWorkListFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // if (currentTaskData) {
  //   const keys = Object.keys(currentTaskData);
  //   keys.map((val) => populateFormData(val, currentTaskData[val]));
  // }
  const handleSubmit = () => {
    const data = { authToken, workListFormData };
    dispatch(addWorkList(data));
  };

  if (isEdit) {
    React.useEffect(() => {
      const data = {
        authToken,
        taskId: workId,
      };
      dispatch(getTaskByID(data));
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
                <option>Poject 1</option>
                <option>Poject 2</option>
                <option>Poject 3</option>
                <option>Poject 4</option>
              </select>
            ) : (
              <select
                className="select-company-field"
                name="projectsId"
                onChange={(e) => handleFormDataChange(e)}
                value={workListFormData.projectsId}
              >
                <option>Poject 1</option>
                <option>Poject 2</option>
                <option>Poject 3</option>
                <option>Poject 4</option>
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
              <option>Yes</option>
              <option>No</option>
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
            <input
              name="taskStatus"
              onChange={(e) => handleFormDataChange(e)}
              value={workListFormData.taskStatus}
            />
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
  authToken: PropTypes.isRequired,
  workId: PropTypes.isRequired,
};

const mapStateToProps = (state) => ({
  authToken: state.user.userData.accessToken,
});

export default connect(mapStateToProps)(WorklistForm);
