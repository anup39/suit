/*eslint-disable */

import React from 'react';
import FormModal from '../../FormModal/FormModal';
import './create-company-form.scss';
import FormButton from '../../FormComponents/Buttons/FormButton.styles';

const CreateCompanyForm = () => {
  return (
    <FormModal>
      <div className="form-div">
        <p className="form-header">Create Company</p>
        <form className="form">
          <label>Name</label>
          <input type="text" />

          <label>Address</label>
          <textarea rows="4" cols="400" />

          <label>City</label>
          <input type="text" />

          <label>Reference Contact Number </label>
          <input type="text" />

          <div className="form-submit">
            <FormButton className="submit-button">Submit</FormButton>
            <span className="cancel">Cancel</span>
          </div>
        </form>
      </div>
    </FormModal>
  );
};

export default CreateCompanyForm;
