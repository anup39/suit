import './ControlActivityFields.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addControlActivityData,
  editControlActivityData,
} from '../../../../../redux/Management-of-field-activities/management-field-activities.action';
import { getControlActivityParams } from '../../../../../redux/Management-of-field-activities/management-field-activities.selectors';

const ControlActivityFields = ({
  componentNo,
  selectedControlActivityType,
  taskId,
}) => {
  const [controlActivityParam, setControlActivityParam] = React.useState('');
  const [controlActivityValue, setControlActivityValue] = React.useState('');
  const dispatch = useDispatch();
  const controlActivityParamList = useSelector(getControlActivityParams);

  const handleParamChange = (e) => {
    setControlActivityParam(e.target.value);
    const data = {
      componentId: componentNo,
      data: {
        paramName: selectedControlActivityType,
        paramType: e.target.value,
        taskId,
        value: controlActivityValue,
      },
    };
    dispatch(editControlActivityData(data));
  };

  const handleValueChange = (e) => {
    setControlActivityValue(e.target.value);
    const data = {
      componentId: componentNo,
      data: {
        paramName: selectedControlActivityType,
        paramType: controlActivityParam,
        taskId,
        value: e.target.value,
      },
    };
    dispatch(editControlActivityData(data));
  };

  React.useEffect(() => {
    const data = {
      paramName: selectedControlActivityType,
      paramType: controlActivityParam,
      taskId,
      value: controlActivityValue,
    };

    dispatch(addControlActivityData(data));
  }, []);

  return (
    <div className="control-activity-fields-base">
      <label>Control Activity Parameter</label>
      <select
        onChange={(e) => handleParamChange(e)}
        value={controlActivityParam}
      >
        {controlActivityParamList ? (
          <>
            <option value="">Please Select A Value</option>
            {controlActivityParamList.map((vals) => (
              <option key={vals.id}> {vals.parameterName}</option>
            ))}
          </>
        ) : (
          <option>Please Select A Type First</option>
        )}
      </select>
      <label>Control Activity Value</label>
      <input
        onChange={(e) => handleValueChange(e)}
        value={controlActivityValue}
      />
    </div>
  );
};

ControlActivityFields.propTypes = {
  componentNo: PropTypes.isRequired,
  taskId: PropTypes.isRequired,
  selectedControlActivityType: PropTypes.isRequired,
};

export default ControlActivityFields;
