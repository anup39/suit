/*eslint-disable */
import React from 'react';
import './user-form-styles.scss';

import { FormHeader } from './styles/form-styles';

const UserRolesForms = ({ addUser = true }) => {
  return (
    <div className="base_div">
      <div className="right-div">
        <div className="form-div">
          {addUser ? (
            <FormHeader>Add User Role</FormHeader>
          ) : (
            <FormHeader>Edit User Role</FormHeader>
          )}
          <form className="form">
            <label className="form_label">UserName</label>
            {addUser ? (
              <select className="form_inputs"></select>
            ) : (
              <select className="form_inputs" disabled={true}></select>
            )}

            <label className="form_label">Role</label>
            <select className="form_inputs">
              <option>Hello</option>
              <option>Hello</option>
              <option>Hello</option>
              <option>Hello</option>
              <option>Hello</option>
            </select>
          </form>

          <div className="form-submit">
            <p className="cancel">Cancel</p>
            <span className="submit-button">Save</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserRolesForms;
