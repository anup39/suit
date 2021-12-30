import './WorklistForm.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { connect, useDispatch } from 'react-redux';

import {
  addWorkList,
  getTaskByID,
} from '../../../../redux/worklist-management-redux/worklist.actions';
// import schema from './work.list.schema';

const WorklistForm = ({
  isEdit = false,
  handelClose,
  authToken,
  workId,
  worklistData,
}) => {
  const dispatch = useDispatch();

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
  });

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
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
      {console.log(worklistData)}
      {!isEdit ? <h2>Add Worklist</h2> : <h2>Edit Worklist</h2>}
      <div className="worklist-form-container">
        <form onSubmit={handleSubmit}>
          <span>
            <label>Project Name</label>
            {isEdit ? (
              <input disabled />
            ) : (
              <input
                name="projectsId"
                onChange={(e) => handleFormDataChange(e)}
                value={workListFormData.projectsId}
              />
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
            <input
              name="isMilestone"
              onChange={(e) => handleFormDataChange(e)}
              value={workListFormData.isMilestone}
            />
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
                value={workListFormData.start}
              />
            </span>

            <span>
              <label>End Date</label>
              <input
                name="end"
                onChange={(e) => handleFormDataChange(e)}
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
  worklistData: PropTypes.isRequired,
};

const mapStateToProps = (state) => ({
  authToken: state.user.userData.accessToken,
  worklistData: state.workListManagement.taskByIdData,
});

export default connect(mapStateToProps)(WorklistForm);
