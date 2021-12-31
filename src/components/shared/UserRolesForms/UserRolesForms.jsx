/*eslint-disable */
import React, { useEffect } from 'react';
import './user-form-styles.scss';

import { FormHeader } from './styles/form-styles';

import FormModal from '../FormModal/FormModal';
import {
  closeEditForm,
  closeAddForm,
} from '../../../redux/User-Role/role.actions';
import { connect, useDispatch } from 'react-redux';

const UserRolesForms = ({ userData, addUserRole }) => {
  const dispatch = useDispatch();

  const handelCancel = () => {
    dispatch(closeEditForm());
  };

  const handelAddCancel = () => {
    dispatch(closeAddForm());
  };

  return (
    <FormModal>
      <div className="form-div">
        {addUserRole ? (
          <FormHeader>Add User Role</FormHeader>
        ) : (
          <FormHeader>Edit User Role</FormHeader>
        )}
        <form className="form">
          <label className="form_label">UserName</label>
          {addUserRole ? (
            <select className="form_inputs">
              {userData && <option>{userData?.username}</option>}
            </select>
          ) : (
            <select className="form_inputs" disabled={true}>
              {userData && <option>{userData?.username}</option>}
            </select>
          )}

          <label className="form_label">Role</label>
          {!addUserRole
            ? userData && (
                <select
                  className="form_inputs"
                  defaultValue={userData?.role.idRole}
                >
                  <option>Engineer</option>
                  <option>Marketer</option>
                  <option value={6}>Public</option>
                </select>
              )
            : userData && (
                <select
                  className="form_inputs"
                  defaultValue={userData?.role.idRole}
                >
                  <option>Engineer</option>
                  <option>Marketer</option>
                  <option value={6}>Public</option>
                </select>
              )}
        </form>

        {!addUserRole ? (
          <div className="form-submit">
            <p className="cancel" onClick={handelCancel}>
              Cancel
            </p>
            <span className="submit-button">Save</span>
          </div>
        ) : (
          <div className="form-submit">
            <p className="cancel" onClick={handelAddCancel}>
              Cancel
            </p>
            <span className="submit-button">Save</span>
          </div>
        )}
      </div>
    </FormModal>
  );
};

const mapStateToProps = (state) => ({
  userData: state.role.userData,
});
export default connect(mapStateToProps)(UserRolesForms);
