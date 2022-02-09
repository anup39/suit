import AddIcon from '@mui/icons-material/Add';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import RestrictedPages from '../../components/shared/RestrictedPages/RestrictedPages';
import { getAllCompany } from '../../redux/company-redux/company.actions';
import {
  getIfAuthenticated,
  getUserAuthToken,
} from '../../redux/user-redux/user.selectors';
import AuthenticatedRoute from '../../routes/AuthenticatedRoute';
import CreateCompany from './components/create-company/companyCreate';
import CompanyManagementDataGrid from './components/managmenet.datagrid';
import classes from './styles/styles.managment.module.scss';

const PAGE_ACCESSABLE_BY = ['planA_admin'];

// const PAGE_ACCESSABLE_BY = ["planA_Engg", "planA_admin" , "ext_engg", "ext_worker", "public" ]

const CompanyManagementView = () => {
  const [openCreateCompanyDrawer, setOpenCreateCompanyDrawer] =
    React.useState(false);

  const handleCreateCompanyDrawer = () => {
    setOpenCreateCompanyDrawer(true);
  };
  const handleCloseCompanyDrawer = () => {
    setOpenCreateCompanyDrawer(false);
  };

  const navigate = useNavigate();

  const isAuthenticated = useSelector(getIfAuthenticated);

  const userAccessToken = useSelector(getUserAuthToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      if (userAccessToken) {
        dispatch(getAllCompany(userAccessToken));
      }
    } else {
      navigate('/asuiteweb/signin');
    }
  }, [isAuthenticated]);
  const { t } = useTranslation();

  return (
    <RestrictedPages accessibleBy={PAGE_ACCESSABLE_BY}>
      <AuthenticatedRoute isAuthenticated={isAuthenticated}>
        <div className={classes.dfc}>
          <div className={classes.company_container}>
            <div className={classes.company_header}>
              <CreateCompany
                isClose={handleCloseCompanyDrawer}
                isOpen={openCreateCompanyDrawer}
              />

              <h3>{t('companyManagement')}</h3>
              <button
                ButtonUnstyled
                onClick={handleCreateCompanyDrawer}
                type="button"
              >
                <AddIcon /> {t('createCompany')}
              </button>
            </div>
            <CompanyManagementDataGrid />
          </div>
          <p className={classes.footer}>{t('poweredBy')} Negentis</p>
        </div>
      </AuthenticatedRoute>
    </RestrictedPages>
  );
};

export default CompanyManagementView;
