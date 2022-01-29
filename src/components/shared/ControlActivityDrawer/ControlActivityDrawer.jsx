import './ControlActivityDrawer.scss';

import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getAllControlActivity,
  getControlActivityParam,
} from '../../../redux/Management-of-field-activities/management-field-activities.action';
import { allControlActivity } from '../../../redux/Management-of-field-activities/management-field-activities.selectors';
import { getUserAuthToken } from '../../../redux/user-redux/user.selectors';
import ControlActivityFields from './components/ControlActivityFields/ControlActivityFields';

const ControlActivityDrawer = ({ handleClose, taskId }) => {
  const [totalComponents, setTotalComponents] = React.useState(1);
  const [controlActivityType, setControlActivityType] = React.useState('');
  const authToken = useSelector(getUserAuthToken);
  const controlActivityList = useSelector(allControlActivity);
  const dispatch = useDispatch();

  const handleAddComponent = () => {
    setTotalComponents(totalComponents + 1);
  };

  const handleControlActivityTypeChange = (e) => {
    setControlActivityType(e.target.value);
    const data = {
      authToken,
      typeId: e.target.value,
    };

    dispatch(getControlActivityParam(data));
  };

  React.useEffect(() => {
    const data = { authToken };
    dispatch(getAllControlActivity(data));
  }, []);

  return (
    <div className="control-activity-base-div">
      <h2>Control Activity</h2>
      <span>
        {' '}
        <AddIcon
          className="add-activity-icon"
          onClick={handleAddComponent}
        />{' '}
      </span>
      <form className="form-base-div">
        <label>Control Activity Type</label>
        <select
          onChange={handleControlActivityTypeChange}
          value={controlActivityType}
        >
          <option value="">Select A Option</option>
          {controlActivityList &&
            controlActivityList.map((val) => (
              <option key={val?.id} value={val?.id}>
                {val?.name}
              </option>
            ))}
        </select>

        {Array.apply(0, Array(totalComponents)).map((v, i) => (
          <ControlActivityFields
            key={v}
            componentNo={i}
            selectedControlActivityType={controlActivityType}
            taskId={taskId}
          />
        ))}
      </form>
      <div className="submit-div">
        <span className="control-activity-cancel-button" onClick={handleClose}>
          Cancel
        </span>
        <span className="control-activity-submit-button">Submit</span>
      </div>
    </div>
  );
};

ControlActivityDrawer.propTypes = {
  handleClose: PropTypes.func.isRequired,
  taskId: PropTypes.isRequired,
};

export default ControlActivityDrawer;
