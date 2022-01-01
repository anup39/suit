import './user-form-styles.scss';

import PropTypes from 'prop-types';
import React from 'react';

import { FormHeader } from './styles/form-styles';

const UserRolesForms = ({ editUser, handelCancel }) => {
  return (
    <div className="form-div">
      {!editUser ? (
        <FormHeader>Add User Role</FormHeader>
      ) : (
        <FormHeader>Edit User Role</FormHeader>
      )}
      {editUser ? (
        <form className="form">
          <label className="form_label">Username</label>
          <input className="form_inputs_disabled" disabled value="User1" />

          <label className="form_label"> Company</label>
          <select className="form_inputs_disabled" disabled>
            <option>Company 1</option>
            <option>Company 2</option>
            <option>Company 3</option>
          </select>

          <label className="form_label"> Role</label>
          <select className="form_inputs">
            <option>Role 1</option>
            <option>Role 2</option>
            <option>Role 3</option>
          </select>
        </form>
      ) : (
        <form className="form">
          <label className="form_label">Username</label>
          <input className="form_inputs_disabled" disabled value="User1" />

          <label className="form_label"> Company</label>
          <select className="form_inputs">
            <option>Company 1</option>
            <option>Company 2</option>
            <option>Company 3</option>
          </select>

          <label className="form_label"> Role</label>
          <select className="form_inputs">
            <option>Role 1</option>
            <option>Role 2</option>
            <option>Role 3</option>
          </select>
        </form>
      )}

      {!editUser ? (
        <div className="form-submit">
          <p className="cancel" onClick={handelCancel}>
            Cancel
          </p>
          <span className="submit-button">Save</span>
        </div>
      ) : (
        <div className="form-submit">
          <p className="cancel" onClick={handelCancel}>
            Cancel
          </p>
          <span className="submit-button">Save</span>
        </div>
      )}
    </div>
  );
};

UserRolesForms.propTypes = {
  editUser: PropTypes.isRequired,
  handelCancel: PropTypes.isRequired,
};

export default UserRolesForms;
