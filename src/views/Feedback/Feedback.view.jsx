import './styles/styles.feedback.scss';

import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import RestrictedPages from '../../components/shared/RestrictedPages/RestrictedPages';
import {
  getCurrentUserRole,
  getIfAuthenticated,
} from '../../redux/user-redux/user.selectors';
import AuthenticatedRoute from '../../routes/AuthenticatedRoute';
import AddFeedback from './components/addfeedback/addfeedback';
import PublicUserFeedback from './components/Public.user.feedback';
import ViewUserFeedback from './components/View.user.feedback';
// import TabPanel from './TabPanel';

const PAGE_ACCESSABLE_BY = ['planA_Engg', 'planA_admin', 'public'];
const FeedbackView = () => {
  const { t } = useTranslation();
  const currentUserRole = useSelector(getCurrentUserRole);

  // const [value, setValue] = React.useState(0);
  const [create, setCreate] = React.useState(false);

  const isAuthenticated = useSelector(getIfAuthenticated);
  const navigate = useNavigate();

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  const openCreate = () => {
    setCreate(true);
  };

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/asuiteweb/signin');
    }
  }, [isAuthenticated]);

  return (
    <RestrictedPages accessibleBy={PAGE_ACCESSABLE_BY}>
      <AuthenticatedRoute isAuthenticated={isAuthenticated}>
        <div className="dfc">
          <div className="fb_container flex1">
            <AddFeedback isClose={setCreate} isOpen={create} />

            <div className="fb_head">
              <h3>{t('feedback')}</h3>
              {currentUserRole === 'public' && (
                <span
                  className="add_new_feedback_button"
                  onClick={openCreate}
                  type="button"
                >
                  <AddIcon /> {t('addFeedback')}
                </span>
              )}
            </div>
            {/* <div className="breadcrumbs">
          <div>Feedback</div>
          <div>Public User Feedback</div>
        </div> */}
            <Box sx={{ width: '100%' }}>
              {currentUserRole === 'public' ? (
                <PublicUserFeedback />
              ) : (
                <ViewUserFeedback />
              )}
            </Box>
          </div>
          <div className="copy-right-txt">{t('poweredBy')} Negentis</div>
        </div>
      </AuthenticatedRoute>
    </RestrictedPages>
  );
};

export default FeedbackView;
