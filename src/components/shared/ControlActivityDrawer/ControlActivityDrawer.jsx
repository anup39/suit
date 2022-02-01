import './ControlActivityDrawer.scss';

import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import {
  controlActivityDataAdd,
  getAllControlActivity,
  getControlActivityParam,
  resetControlActivityData,
} from '../../../redux/Management-of-field-activities/management-field-activities.action';
import {
  allControlActivity,
  getControlActivityData,
  getControlActivityDataAddSuccessful,
  getIfControlActivityDataAddLoading,
} from '../../../redux/Management-of-field-activities/management-field-activities.selectors';
import { getUserAuthToken } from '../../../redux/user-redux/user.selectors';
import GlobalSpinner from '../Spinners/GlobalSpinner';
import ControlActivityFields from './components/ControlActivityFields/ControlActivityFields';

const ControlActivityDrawer = ({ handleClose, taskId }) => {
  const [totalComponents, setTotalComponents] = React.useState(1);
  const [controlActivityType, setControlActivityType] = React.useState('');
  const authToken = useSelector(getUserAuthToken);
  const controlActivityList = useSelector(allControlActivity);
  const controlActivityData = useSelector(getControlActivityData);
  const isControlActivityDataAddLoading = useSelector(
    getIfControlActivityDataAddLoading
  );
  const controlActivityDataAddSuccess = useSelector(
    getControlActivityDataAddSuccessful
  );
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

  const handleCancel = () => {
    handleClose();
    dispatch(resetControlActivityData());
  };

  const handleSubmit = () => {
    const dataToSend = {
      authToken,
      controlActivityData: {
        typeId: controlActivityType,
        valueRequestList: controlActivityData,
      },
    };

    let validData = true;

    // eslint-disable-next-line
    controlActivityData.map((val) => {
      if (!val.paramName || !val.paramType || !val.value) {
        validData = false;
        return toast.warn('Please Select or Enter All Fields!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
    if (!validData) {
      return;
    }
    dispatch(controlActivityDataAdd(dataToSend));
  };

  React.useEffect(() => {
    if (!controlActivityList) {
      const data = { authToken };
      dispatch(getAllControlActivity(data));
    } else if (controlActivityDataAddSuccess) {
      handleClose();
    }
  }, [isControlActivityDataAddLoading]);

  return (
    <div className="control-activity-base-div">
      <GlobalSpinner isOpen={isControlActivityDataAddLoading} />
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
        <span className="control-activity-cancel-button" onClick={handleCancel}>
          Cancel
        </span>
        <span className="control-activity-submit-button" onClick={handleSubmit}>
          Submit
        </span>
      </div>
    </div>
  );
};

ControlActivityDrawer.propTypes = {
  handleClose: PropTypes.func.isRequired,
  taskId: PropTypes.isRequired,
};

export default ControlActivityDrawer;
