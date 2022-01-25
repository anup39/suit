import './Pagination.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactPaginate from 'react-paginate';

import AssignWorkActivity from './components/AssignWorkActivity';
import ManagementOfFieldActivity from './components/ManagementOfFieldActivity';
import MilestoneManagement from './components/MilestoneManagement';
import ProjectDocuments from './components/ProjectDocuments';
import ProjectManangement from './components/ProjectManangement';
import PublicFeedback from './components/PublicFeedback';
import UserRoles from './components/UserRoles';
import ViewUserFeedback from './components/ViewUserFeedback';
import WorklistManagement from './components/WorklistManagement';
import WorkListTasks from './components/WorkListTasks';

const CustomPagination = ({
  itemsPerPage,
  itemData,
  handleClose,
  componentNo,
}) => {
  const items = itemData;

  const [currentItems, setCurrentItems] = React.useState(null);
  const [pageCount, setPageCount] = React.useState(0);

  const [itemOffset, setItemOffset] = React.useState(0);

  React.useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, itemData]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };
  const { t } = useTranslation();

  const renderComponents = (value) => {
    const components = [
      <ProjectManangement
        key="projectManageemnt"
        currentItems={currentItems}
        handelShowProjectPannel={handleClose}
      />,
      <WorklistManagement
        key="WorklistManagement"
        currentItems={currentItems}
      />,
      <AssignWorkActivity key="workActivity" currentItems={currentItems} />,
      <MilestoneManagement
        key="milestoneManagement"
        currentItems={currentItems}
      />,
      <UserRoles key="UserRoles" currentItems={currentItems} />,
      <PublicFeedback key="Public Feedback" currentItems={currentItems} />,
      <ViewUserFeedback key="View User Feedback" currentItems={currentItems} />,
      <WorkListTasks key="Worklist Tasks" currentItems={currentItems} />,
      <ProjectDocuments key="Project Documents" currentItems={currentItems} />,
      <ManagementOfFieldActivity
        key="Management Of Field Activity"
        currentItems={currentItems}
      />,
    ];

    return components[value];
  };
  return (
    <>
      {renderComponents(componentNo)}
      <div className="table-slider">
        <ReactPaginate
          activeClassName="active"
          breakClassName="page-item"
          breakLabel="..."
          breakLinkClassName="page-link"
          containerClassName="pagination"
          marginPagesDisplayed={2}
          nextClassName="page-item"
          nextLabel={t('next')}
          nextLinkClassName="page-link"
          // eslint-disable-next-line react/jsx-no-bind
          onPageChange={handlePageClick}
          pageClassName="page-item"
          pageCount={pageCount}
          pageLinkClassName="page-link"
          pageRangeDisplayed={5}
          previousClassName="page-item"
          previousLabel="<<Previous"
          previousLinkClassName="page-link"
        />
      </div>
    </>
  );
};

/* eslint-disable */
CustomPagination.propTypes = {
  itemsPerPage: PropTypes.isRequired,
  itemData: PropTypes.isRequired,
  handleClose: PropTypes.func,
  componentNo: PropTypes.number.isRequired,
};

export default CustomPagination;
