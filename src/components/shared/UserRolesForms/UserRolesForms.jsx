import './user-form-styles.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCompaniesList } from '../../../redux/company-redux/company.selectors';
import { getUserAuthToken } from '../../../redux/user-redux/user.selectors';
import {
  updateUserRoleAndCompany,
  userRoles,
} from '../../../redux/User-Role/role.actions';
import { getUserRoles } from '../../../redux/User-Role/User-Role.selectors';
import { FormHeader } from './styles/form-styles';

const UserRolesForms = ({
  editUser,
  handelCancel,
  userName,
  userCompany,
  role,
}) => {
  const [companyName, setCompanyName] = React.useState('');
  const [userRole, setUserRole] = React.useState(role);

  const dispatch = useDispatch();
  const userAuthToken = useSelector(getUserAuthToken);
  const roles = useSelector(getUserRoles);
  const companyList = useSelector(getCompaniesList);

  const handelAddUserRole = () => {
    const data = {
      authToken: userAuthToken,
      userData: {
        username: userName,
        roles_id: userRole,
        companies_id: companyName,
      },
    };

    dispatch(updateUserRoleAndCompany(data));
    handelCancel();
  };
  const handelEditUser = () => {
    const data = {
      authToken: userAuthToken,
      userData: {
        username: userName,
        roles_id: userRole,
      },
    };

    dispatch(updateUserRoleAndCompany(data));
    handelCancel();
  };

  React.useEffect(() => {
    dispatch(userRoles(userAuthToken));

    if (editUser) {
      setCompanyName(userCompany);
    }
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
            <option>0</option>
          </select>

          <label className="form_label"> Role</label>
          <select
            className="form_inputs"
            onChange={(e) => setUserRole(e.target.value)}
            value={userRole}
          >
            {roles.map((val) => (
              <option key="roles" value={val.idRole}>
                {val.name}
              </option>
            ))}
          </select>
        </form>
      ) : (
        <form className="form">
          <label className="form_label">Username</label>
          <input className="form_inputs_disabled" disabled value={userName} />

          <label className="form_label"> Company</label>
          <select
            className="form_inputs"
            onChange={(e) => setCompanyName(e.target.value)}
            value={companyName}
          >
            {console.log(companyList)}

            <option value={1}>Test Company</option>
            <option value={2}>Company2 </option>
            <option value={3}>Mango</option>
            <option value={4}>MS </option>
            <option value={5}>Companyyy </option>
          </select>

          <label className="form_label"> Role</label>
          <select
            className="form_inputs"
            onChange={(e) => setUserRole(e.target.value)}
            value={userRole}
          >
            {roles.map((val) => (
              <option key="roles" value={val.idRole}>
                {val.name}
              </option>
            ))}
          </select>
        </form>
      )}

      {!editUser ? (
        <div className="form-submit">
          <button className="cancel" onClick={handelCancel} type="button">
            Cancel
          </button>
          <button
            className="submit-button"
            onClick={handelAddUserRole}
            type="button"
          >
            Save
          </button>
        </div>
      ) : (
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
