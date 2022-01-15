import './MilestoneApproval.scss';

import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import DatagridBase from '../../components/shared/DatagridBase/DatagridBase';
import LoadingSpinner from '../../components/shared/LoadingSpinner/LoadingSpinner';
import Pagination from '../../components/shared/Pagination/Pagination';
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

const MilestoneApproval = () => {
  const dispatch = useDispatch();

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
    <AuthenticatedRoute isAuthenticated={isAuthenticated}>
      <BaseTemplate title="Milestone Approval">
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
                  placeholder="Search Project"
                  value={projectText}
                />
              </div>

              <div className="milestone-search-div">
                <SearchIcon className="milestone-search-icon" />
                <input
                  className="milestone-search-input"
                  onChange={(e) => handleCompanyTextChange(e)}
                  placeholder="Search Company"
                  value={companyText}
                />
              </div>
            </div>
          )}
          <div className="milestone-table-tbody">
            {milestoneData && milestoneData.length === 0 ? (
              <p className="no-data-to-display">No Data To Display!</p>
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
                      <p> Company </p>
                    </span>

                    <span className="milestone-approval-projectName">
                      {' '}
                      <p>Project Name</p>
                    </span>

                    <span className="milestone-approval-date">
                      <p>Date</p>
                    </span>

                    <span className="milestone-approval-milestoneNr">
                      <p>Milestone Nr</p>
                    </span>

                    <span className="milestone-approval-description">
                      <p>Description</p>
                    </span>

                    <span className="milestone-approval-status">
                      <p>Status</p>
                    </span>

                    <span className="milestone-approval-action">
                      <p>Action </p>
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
  );
};

export default MilestoneApproval;

// TODO: Improve the search
