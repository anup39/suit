import './ChangeTaskStatus.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProjectStatus from '../../../../constants/ProjectStatus';
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
            <option>{taskStatus}</option>
            {ProjectStatus[taskStatus].map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
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
