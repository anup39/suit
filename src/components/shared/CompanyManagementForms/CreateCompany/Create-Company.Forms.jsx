/*eslint-disable */

import React from 'react';
import FormModal from '../../FormModal/FormModal';
import './create-company-form.scss';
import FormButton from '../../FormComponents/Buttons/FormButton.styles';
import { useDispatch } from 'react-redux';
import { cancelCompanyCreation } from '../../../../redux/Company-Management/company.actions';

const CreateCompanyForm = () => {
  const dispatch = useDispatch();

  const handelCancel = () => {
    dispatch(cancelCompanyCreation());
  };

  return (
    <FormModal>
      <div className="form-div">
        <p className="form-header">Create Company</p>
        <form className="form">
          <label>Name</label>
          <input className="create-company-inputs" type="text" />

          <label>Address</label>
          <textarea className="create-company-textarea" rows="4" cols="400" />

          <label>City</label>
          <input className="create-company-inputs" type="text" />

          <label>Reference Contact Number </label>
          <input className="create-company-inputs" type="text" />

          <div className="form-submit">
            <FormButton className="submit-button">Submit</FormButton>
            <span className="cancel" onClick={handelCancel}>
              Cancel
            </span>
          </div>
        </form>
      </div>
    </FormModal>
  );
};

export default CreateCompanyForm;
