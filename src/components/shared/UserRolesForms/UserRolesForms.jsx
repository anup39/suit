import './user-form-styles.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { getAllCompany } from '../../../redux/company-redux/company.actions';
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
  userCompanyId,
  role,
}) => {
  const dispatch = useDispatch();
  const userAuthToken = useSelector(getUserAuthToken);
  const roles = useSelector(getUserRoles);
  const companyList = useSelector(getCompaniesList);

  const [roleId, setRoleId] = React.useState(role);
  const [companyId, setCompanyId] = React.useState(userCompanyId);

  const { t } = useTranslation();

  const handelAddUserRole = (e) => {
    e.preventDefault();

    if (!companyId || !roleId) {
      toast.warn('Please Select All Fields!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const data = {
        authToken: userAuthToken,
        userData: {
          username: userName,
          roles_id: roleId,
          companies_id: companyId,
        },
      };
      dispatch(updateUserRoleAndCompany(data));
      handelCancel();
    }
  };

  const handelEditUser = (e) => {
    e.preventDefault();
    if (!roleId) {
      toast.warn('Please Select Valid Field!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const data = {
        authToken: userAuthToken,
        userData: {
          username: userName,
          roles_id: roleId,
        },
      };
      dispatch(updateUserRoleAndCompany(data));
      handelCancel();
    }
  };

  React.useEffect(() => {
    dispatch(userRoles(userAuthToken));
    dispatch(getAllCompany(userAuthToken));
  }, []);

  return (
    <div className="userroles-form-base-div">
      {!editUser ? (
        <FormHeader>{t('addUserRole')}</FormHeader>
      ) : (
        <FormHeader>{t('editUserRole')}</FormHeader>
      )}
      {editUser ? (
        <form className="userroles-form-container" onSubmit={handelEditUser}>
          <label className="form_label">{t('username')}</label>
          <input className="form_inputs_disabled" disabled value={userName} />

          <label className="form_label"> {t('company')}</label>
          <select className="form_inputs_disabled" disabled value={companyId}>
            <option value="">No Company Is Assigned To The User</option>
            {companyList &&
              companyList.map((comp) => (
                <option key={comp.id} value={comp.id}>
                  {comp.name}
                </option>
              ))}
          </select>

          <label className="form_label"> {t('roles')}</label>
          <select
            className="form_inputs"
            onChange={(e) => setRoleId(e.target.value)}
            value={roleId}
          >
            <option value="">Please Select A Role</option>

            {roles.map((val) => (
              <option key="roles" value={val.idRole}>
                {val.name}
              </option>
            ))}
          </select>

          <div className="form-submit">
            <button className="cancel" onClick={handelCancel} type="button">
              {t('cancel')}
            </button>
            <button
              className="submit-button"
              onClick={handelEditUser}
              type="submit"
            >
              {t('save')}
            </button>
          </div>
        </form>
      ) : (
        <form className="form" onSubmit={handelAddUserRole}>
          <label className="form_label">{t('username')}</label>
          <input className="form_inputs_disabled" disabled value={userName} />

          <label className="form_label"> {t('company')}</label>
          <select
            className="form_inputs"
            onChange={(e) => setCompanyId(e.target.value)}
            value={companyId}
          >
            <option value="">Please Select A Company</option>

            {companyList &&
              companyList.map((comp) => (
                <option key={comp.id} value={comp.id}>
                  {comp.name}
                </option>
              ))}
          </select>

          <label className="form_label"> {t('roles')}</label>
          <select
            className="form_inputs"
            onChange={(e) => setRoleId(e.target.value)}
            value={roleId}
            // defaultChecked={}
          >
            <option value="">Please Select A Role</option>

            {roles.map((val) => (
              <option key="roles" value={val.idRole}>
                {val.name}
              </option>
            ))}
          </select>

          <div className="form-submit">
            <button className="cancel" onClick={handelCancel} type="button">
              {t('cancel')}
            </button>
            <button
              className="submit-button"
              onClick={handelAddUserRole}
              type="submit"
            >
              {t('save')}
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
  userName: PropTypes.isRequired,
  role: PropTypes.isRequired,
  userCompanyId: PropTypes.isRequired,
};

export default UserRolesForms;

// TODO: Check for the response.
