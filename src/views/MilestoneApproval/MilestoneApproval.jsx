import './MilestoneApproval.scss';

import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import DatagridBase from '../../components/shared/DatagridBase/DatagridBase';
import LoadingSpinner from '../../components/shared/LoadingSpinner/LoadingSpinner';
import Pagination from '../../components/shared/Pagination/Pagination';
import RestrictedPages from '../../components/shared/RestrictedPages/RestrictedPages';
import {
  getAllMilestone,
  getIsAllMilestoneLoading,
  getIsSelctAll,
} from '../../redux/milestone-management/milestone.selector';
import {
  deselectAllMilestone,
  getAllMilestones,
  selectAllMilestone,
} from '../../redux/milestone-management/milestone-management.action';
import {
  getIfAuthenticated,
  getUserAuthToken,
} from '../../redux/user-redux/user.selectors';
import AuthenticatedRoute from '../../routes/AuthenticatedRoute';
import MobileDataRow from './mobile.data.row';

const PAGE_ACCESSABLE_BY = ['planA_admin'];

const MilestoneApproval = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const authToken = useSelector(getUserAuthToken);
  const milestoneData = useSelector(getAllMilestone);
  const isAllMilestoneLoading = useSelector(getIsAllMilestoneLoading);
  const [companyText, setCompanyText] = React.useState('');
  const [projectText, setProjectText] = React.useState('');
  const [checkbox, setCheckbox] = React.useState(false);

  const isSelectAll = useSelector(getIsSelctAll);
  const isAuthenticated = useSelector(getIfAuthenticated);

  const [resultsToShow, setResultsToShow] = React.useState('');

  const handleCompanyTextChange = (e) => {
    const searchTerm = e.target.value;
    setCompanyText(searchTerm);
    const filteredList = resultsToShow.filter((item) =>
      item?.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResultsToShow(filteredList);
  };

  const handleProjectTextChange = (e) => {
    const searchTerm = e.target.value;
    setProjectText(searchTerm);
    const filteredList = resultsToShow.filter((item) =>
      item?.projectName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResultsToShow(filteredList);
  };

  const handleCheckbox = (e) => {
    setCheckbox(e.target.checked);

    if (e.target.checked) {
      dispatch(selectAllMilestone());
    } else {
      dispatch(deselectAllMilestone());
    }
  };

  React.useEffect(() => {
    if (!milestoneData) {
      dispatch(getAllMilestones(authToken));
    } else if (!companyText && !projectText) {
      setResultsToShow(milestoneData);
    }

    if (isSelectAll) {
      setCheckbox(true);
    } else {
      setCheckbox(false);
    }
  }, [milestoneData, companyText, projectText]);
  return (
    <RestrictedPages accessibleBy={PAGE_ACCESSABLE_BY}>
      <AuthenticatedRoute isAuthenticated={isAuthenticated}>
        <BaseTemplate title={t('milestoneapproval')}>
          <DatagridBase>
            {milestoneData && milestoneData.length === 0 ? (
              ''
            ) : (
              <div className="milestone-search-bar">
                <div className="milestone-search-div">
                  <SearchIcon className="milestone-search-icon" />
                  <input
                    className="milestone-search-input"
                    onChange={(e) => handleProjectTextChange(e)}
                    placeholder={t('searchProject')}
                    value={projectText}
                  />
                </div>

                <div className="milestone-search-div">
                  <SearchIcon className="milestone-search-icon" />
                  <input
                    className="milestone-search-input"
                    onChange={(e) => handleCompanyTextChange(e)}
                    placeholder={t('searchCompany')}
                    value={companyText}
                  />
                </div>
              </div>
            )}
            <div className="milestone-table-tbody">
              {milestoneData && milestoneData.length === 0 ? (
                <p className="no-data-to-display">{t('noDataFound')}</p>
              ) : (
                <>
                  <div className="milestone-table">
                    <div className="milestone-header">
                      <span className="milestone-approval-checkInput">
                        <input
                          checked={checkbox}
                          onChange={(e) => handleCheckbox(e)}
                          type="checkbox"
                        />
                      </span>

                      <span className="milestone-approval-company">
                        <p> {t('company')} </p>
                      </span>

                      <span className="milestone-approval-projectName">
                        {' '}
                        <p>{t('projectName')}</p>
                      </span>

                      <span className="milestone-approval-date">
                        <p>{t('date')}</p>
                      </span>

                      <span className="milestone-approval-milestoneNr">
                        <p>{t('milestonenr')}</p>
                      </span>

                      <span className="milestone-approval-description">
                        <p>{t('description')}</p>
                      </span>

                      <span className="milestone-approval-status">
                        <p>{t('status')}</p>
                      </span>

                      <span className="milestone-approval-action">
                        <p>{t('actions')} </p>
                      </span>
                    </div>
                  </div>

                  {isAllMilestoneLoading ? (
                    <LoadingSpinner />
                  ) : (
                    <Pagination
                      componentNo={3}
                      itemData={!milestoneData ? '' : resultsToShow}
                      itemsPerPage={10}
                    />
                  )}
                  <div className="mobile_table_milestone">
                    <MobileDataRow />
                    <MobileDataRow />
                    <MobileDataRow />
                    <MobileDataRow />
                    <MobileDataRow />
                    <MobileDataRow />
                  </div>
                </>
              )}
            </div>
          </DatagridBase>
        </BaseTemplate>
      </AuthenticatedRoute>
    </RestrictedPages>
  );
};

export default MilestoneApproval;

// TODO: Improve the search
