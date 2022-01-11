/* eslint-disable*/
import './MilestoneApproval.scss';

import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import React from 'react';
import { connect, useDispatch } from 'react-redux';

import BaseTemplate from '../../components/shared/BaseTemplate/BaseTemplate';
import DatagridBase from '../../components/shared/DatagridBase/DatagridBase';
import { getAllMilestones } from '../../redux/milestone-management/milestone-management.action';
// import MilestoneApprovalCard from './components/MilestoneApprovalCards/MilestoneApprovalCard';
import Pagination from '../../components/shared/Pagination/Pagination';
import MobileDataRow from './mobile.data.row';
const MilestoneApproval = ({ authToken, milestoneData }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log(authToken);
    dispatch(getAllMilestones(authToken));
  }, []);
  return (
    <BaseTemplate title="Milestone Approval">
      <DatagridBase>
        {milestoneData.length === 0 ? (
         ""
        ) : (
          <div className="milestone-search-bar">
          <div className="milestone-search-div">
            <SearchIcon className="milestone-search-icon" />
            <input
              className="milestone-search-input"
              placeholder="Search Project"
            />
          </div>

          <div className="milestone-search-div">
            <SearchIcon className="milestone-search-icon" />
            <input
              className="milestone-search-input"
              placeholder="Search Company"
            />
          </div>

          <div className="milestone-search-div">
            <SearchIcon className="milestone-search-icon" />
            <input
              className="milestone-search-input"
              placeholder="Milestone Name"
            />
          </div>
        </div>        )}
        <div className="milestone-table-tbody">
          {milestoneData.length === 0 ? (
            <p className="no-data-to-display">No Data To Display!</p>
          ) : (
            <>
              <div className="milestone-table">
                <div className="milestone-header">
                  <span className="milestone-approval-checkInput">
                    <input type="checkbox" />
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
              <Pagination
                itemData={milestoneData}
                itemsPerPage={7}
                componentNo={3}
              />
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
  );
};

MilestoneApproval.propTypes = {
  authToken: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authToken: state.user.userData.accessToken,
  milestoneData: state.milestoneManagment.getAllMilestoneData,
});

export default connect(mapStateToProps)(MilestoneApproval);
