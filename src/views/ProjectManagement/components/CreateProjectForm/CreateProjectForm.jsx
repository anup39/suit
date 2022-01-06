import './CreateProjectForm.scss';
import '../../../../theme/ButtonColors.scss';

import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createNewProject } from '../../../../redux/project-management-redux/project-management.actions';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';

const CreateProjectForm = ({ handelClose }) => {
  const [name, setName] = useState('');
  const [client, setClient] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const dispatch = useDispatch();
  const authToken = useSelector(getUserAuthToken);

  const handelSubmit = () => {
    const startDateConverted = moment(startDate).format('DD MMMM YYYY');
    const endDateConverted = moment(endDate).format('DD MMMM YYYY');

    const data = {
      authToken,
      newCompanyData: {
        name,
        clientName: client,
        description,
        startDate: startDateConverted,
        completionDate: endDateConverted,
      },
    };
    dispatch(createNewProject(data));
  };

  return (
    <div className="create-project-form-base-div">
      <h2>Create Project</h2>
      <form className="create-project-form" onSubmit={handelSubmit}>
        <label>Project Name</label>
        <input onChange={(e) => setName(e.target.value)} value={name} />
        {/* <span className="form-error-text">{errors.name?.message}</span> */}

        <label>Client</label>
        <input onChange={(e) => setClient(e.target.value)} value={client} />
        {/* <span className="form-error-text">{errors.clientName?.message}</span> */}

        <label>Description</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          rows={6}
          type="text"
          value={description}
        />
        {/* <span className="form-error-text">{errors.description?.message}</span> */}

        <label>Start Date</label>
        <input
          onChange={(e) => setStartDate(e.target.value)}
          type="date"
          value={startDate}
        />
        {/* <span className="form-error-text">{errors.startDate?.message}</span> */}

        <label>Completion Date</label>
        <input
          onChange={(e) => setEndDate(e.target.value)}
          type="date"
          value={endDate}
        />
        <span className="form-error-text">
          {/* {errors.completionDate?.message} */}
        </span>
      </form>

      <div className="create-project-form-submit-div">
        <span className="cancel-button" onClick={handelClose}>
          Cancel
        </span>
        <span className="submit_button_colors" onClick={() => handelSubmit()}>
          Submit
        </span>
      </div>
    </div>
  );
};

CreateProjectForm.propTypes = {
  handelClose: PropTypes.isRequired,
};

export default CreateProjectForm;

// TODO: FORM VALIDATION AND SUBMITTION
