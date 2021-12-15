/*eslint-disable */
import React from 'react';
import FormModal from '../../FormModal/FormModal';
import './create-company-form.scss';
import FormButton from '../../FormComponents/Buttons/FormButton.styles';
import { connect, useDispatch } from 'react-redux';
import { cancelCompanyCreation } from '../../../../redux/Company-Management/company.actions';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import { createCompany } from '../../../../redux/Company-Management/company.actions';
const CreateCompanyForm = ({ currentUserToken }) => {
  const dispatch = useDispatch();

  const handelCancel = () => {
    dispatch(cancelCompanyCreation());
  };

  const handelCreate = (data) => {
    const sentData = {
      payload: data,
      token: currentUserToken,
    };
    dispatch(createCompany(sentData));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <FormModal>
      <div className="form-div">
        <p className="form-header">Create Company</p>
        <form className="form" onSubmit={handleSubmit(handelCreate)}>
          <label>Name</label>
          <input
            className="create-company-inputs"
            type="text"
            {...register('name')}
          />
          <span className="error-message">{errors.name?.message}</span>

          <label>Address</label>
          <textarea
            className="create-company-textarea"
            rows="4"
            cols="400"
            {...register('address')}
          />
          <span className="error-message">{errors.address?.message}</span>

          <label>City</label>
          <input
            className="create-company-inputs"
            type="text"
            {...register('city')}
          />
          <span className="error-message">{errors.city?.message}</span>

          <label>Reference Contact Number </label>
          <input
            className="create-company-inputs"
            type="text"
            {...register('reference_contact')}
          />
          <span className="error-message">
            {errors.reference_contact?.message}
          </span>

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

const mapStateToProps = (state) => ({
  currentUserToken: state.user.userData.accessToken,
});

export default connect(mapStateToProps)(CreateCompanyForm);
