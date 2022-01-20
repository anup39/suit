import './user-form-styles.scss';

import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { getAllCompany } from '../../../redux/company-redux/company.actions';
import { getCompaniesList } from '../../../redux/company-redux/company.selectors';
import { getUserAuthToken } from '../../../redux/user-redux/user.selectors';
import {
  updateUserRoleAndCompany,
  userRoles,
} from '../../../redux/User-Role/role.actions';
import { getUserRoles } from '../../../redux/User-Role/User-Role.selectors';
import { FormHeader } from './styles/form-styles';
import schema from './user.roles.schema';

const UserRolesForms = ({
  editUser,
  handelCancel,
  userName,
  userCompany,
  role,
}) => {
  const dispatch = useDispatch();
  const userAuthToken = useSelector(getUserAuthToken);
  const roles = useSelector(getUserRoles);
  const companyList = useSelector(getCompaniesList);

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handelAddUserRole = (userData) => {
    const data = {
      authToken: userAuthToken,
      userData,
    };
    console.log(data);
    dispatch(updateUserRoleAndCompany(data));
    handelCancel();
  };
  const handelEditUser = () => {
    // const data = {
    //   authToken: userAuthToken,
    //   userData: {
    //     username: userName,
    //     roles_id: userRole,
    //   },
    // };

    // dispatch(updateUserRoleAndCompany(data));
    handelCancel();
  };

  React.useEffect(() => {
    dispatch(userRoles(userAuthToken));
    dispatch(getAllCompany(userAuthToken));

    reset({
      username: userName,
      companies_id: userCompany,
      roles_id: role,
    });
  }, []);

  return (
    <div className="userroles-form-base-div">
      {!editUser ? (
        <FormHeader>Add User Role</FormHeader>
      ) : (
        <FormHeader>Edit User Role</FormHeader>
      )}
      {editUser ? (
        <form className="userroles-form-container">
          <label className="form_label">Username</label>
          <input className="form_inputs_disabled" disabled value={userName} />

          <label className="form_label"> Company</label>
          <select className="form_inputs_disabled" disabled value={userCompany}>
            {companyList &&
              companyList.map((comp) => (
                <option key={comp.id} value={comp.id}>
                  {comp.name}
                </option>
              ))}
          </select>

          <label className="form_label"> Role</label>
          <select className="form_inputs">
            {roles.map((val) => (
              <option key="roles" value={val.idRole}>
                {val.name}
              </option>
            ))}
          </select>

          <div className="form-submit">
            <button className="cancel" onClick={handelCancel} type="button">
              Cancel
            </button>
            <button
              className="submit-button"
              onClick={handelEditUser}
              type="button"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <form className="form" onSubmit={handleSubmit(handelAddUserRole)}>
          <label className="form_label">Username</label>
          <input
            className="form_inputs_disabled"
            disabled
            {...register('username')}
          />

          <label className="form_label"> Company</label>
          <select className="form_inputs" {...register('companies_id')}>
            {companyList &&
              companyList.map((comp) => (
                <option key={comp.id} value={comp.id}>
                  {comp.name}
                </option>
              ))}
          </select>

          <label className="form_label"> Role</label>
          <select className="form_inputs" {...register('roles_id')}>
            {roles.map((val) => (
              <option key="roles" value={val.idRole}>
                {val.name}
              </option>
            ))}
          </select>

          <div className="form-submit">
            <button className="cancel" onClick={handelCancel} type="button">
              Cancel
            </button>
            <button
              className="submit-button"
              onClick={handelAddUserRole}
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

UserRolesForms.propTypes = {
  editUser: PropTypes.isRequired,
  handelCancel: PropTypes.isRequired,
  userName: PropTypes.string.isRequired,
  userCompany: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default UserRolesForms;

// TODO: Check for the response.
