import './AssignTaskModal.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import EditModalHeaders from '../../../../components/shared/FieldUpdates/components/EditMenu/components/EditModalHeaders/EditModalHeaders';
import { getSelectedTaskList } from '../../../../redux/assign-worklist/assign-work-list.selector';
import { assingTask } from '../../../../redux/assign-worklist/assign-worklist.action';
import { getAllCompany } from '../../../../redux/company-redux/company.actions';
import { getCompaniesList } from '../../../../redux/company-redux/company.selectors';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';

const AssignTaskModal = ({ handleCancel }) => {
  const dispatch = useDispatch();
  const authToken = useSelector(getUserAuthToken);
  const companiesList = useSelector(getCompaniesList);
  const selectedTask = useSelector(getSelectedTaskList);
  const [companyId, setCompanyId] = React.useState('');
  const { t } = useTranslation();

  const handleAssignTask = () => {
    if (!companyId) {
      toast.error('Please Select A Company!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const data = { authToken, taskIdList: selectedTask, companyId };
      dispatch(assingTask(data));
    }
  };

  const handleCompanySelection = (e) => {
    setCompanyId(e.target.value);
  };

  React.useEffect(() => {
    dispatch(getAllCompany(authToken));
  }, []);

  return (
    <div className="assign-task-modal-base-div">
      <EditModalHeaders headerName="Assign Task" />
      {console.log(companiesList)}
      <div className="assign-form-base-div">
        <div>
          <label>{t('company')}</label>
          <select onChange={handleCompanySelection}>
            <option value="">{t('pleaseSelectACompany')}</option>
            {companiesList &&
              companiesList.map((vals) => (
                <option key={vals?.id} value={vals?.id}>
                  {vals.name}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="assign-task-modal-control-div">
        <span
          className="assign-task-modal-cancel-button"
          onClick={handleCancel}
        >
          {t('cancel')}
        </span>
        <span
          className="assign-task-modal-submit-button"
          onClick={handleAssignTask}
        >
          {t('submit')}
        </span>
      </div>
    </div>
  );
};

AssignTaskModal.propTypes = {
  handleCancel: PropTypes.func.isRequired,
};

export default AssignTaskModal;
