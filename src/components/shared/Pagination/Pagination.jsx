import './Pagination.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactPaginate from 'react-paginate';

import AssignWorkActivity from './components/AssignWorkActivity';
import MilestoneManagement from './components/MilestoneManagement';
import ProjectManangement from './components/ProjectManangement';
import PublicFeedback from './components/PublicFeedback';
import UserRoles from './components/UserRoles';
import ViewUserFeedback from './components/ViewUserFeedback';
import WorklistManagement from './components/WorklistManagement';

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
    ];

    return components[value];
  };
  return (
    <>
      {renderComponents(componentNo)}
      <ReactPaginate
        activeLinkClassName="pagination-active-div"
        breakLabel="..."
        className="pagination-base"
        disabledLinkClassName="pagination-disabled-div"
        marginPagesDisplayed={2}
        nextLabel={t('next')}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        pageRangeDisplayed={0}
        previousLabel={t('prev')}
        renderOnZeroPageCount={null}
      />
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
