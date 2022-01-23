import './ChangeTaskStatus.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';
import { changeTaskStatus } from '../../../../redux/worklist-management-redux/worklist.actions';

const ChangeTaskStatus = ({ handleClose, taskName, taskId, taskStatus }) => {
  const [status, setStatus] = React.useState(taskStatus);

  const authToken = useSelector(getUserAuthToken);
  const dispatch = useDispatch();

  const handleChangeTaskStatus = (e) => {
    e.preventDefault();

    const data = {
      authToken,
      data: {
        taskIdValue: taskId,
        taskStatus: status,
      },
    };
    dispatch(changeTaskStatus(data));
  };

  return (
    <div className="change-task-status-form-base-div">
      <h2>Change Status</h2>

      <form>
        <div>
          <label>Worklist Name</label>
          <input disabled value={taskName} />
        </div>

        <div>
          <label>Status</label>
          <select onChange={(e) => setStatus(e.target.value)} value={status}>
            <option>Not assigned</option>
            <option>Not started</option>
            <option>In progress/started</option>
            <option>Waiting for feedback</option>
            <option>Approved</option>
            <option>Canceled</option>
            <option>Completed</option>
            <option>Suspended</option>
          </select>
        </div>

        <div className="change-task-status-form-submit-div">
          <span onClick={handleClose}>Cancel</span>
          <button onClick={handleChangeTaskStatus} type="submit">
            Change
          </button>
        </div>
      </form>
    </div>
  );
};

/* eslint-disable */
ChangeTaskStatus.propTypes = {
  handleClose: PropTypes.func.isRequired,
  taskName: PropTypes.string.isRequired,
  taskId: PropTypes.number.isRequired,
  taskStatus: PropTypes.any,
};

export default ChangeTaskStatus;
