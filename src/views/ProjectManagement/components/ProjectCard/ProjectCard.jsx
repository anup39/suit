import './ProjectCard.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Modal } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import AreYouSure from '../../../../components/shared/AreYouSure/AreYouSure';
import GlobalSpinner from '../../../../components/shared/Spinners/GlobalSpinner';
import { getIsGetProjectDataLoading } from '../../../../redux/project-management-redux/project.selector';
import { deleteProjectData } from '../../../../redux/project-management-redux/project-management.actions';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';

const ProjectCard = ({
  handelView,
  projetName,
  client,
  desc,
  startDate,
  compDate,
  lastUpdate,
  userLastUpdate,
  projectId,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [deleteModal, setDeleteModal] = React.useState(false);

  const open = Boolean(anchorEl);
  const { t } = useTranslation();

  const authToken = useSelector(getUserAuthToken);
  const isGetProjectDataLoading = useSelector(getIsGetProjectDataLoading);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handelProjectDataView = () => {
    handleClose();
    handelView(projectId);
  };

  const handleDeleteModalClose = () => {
    setDeleteModal(false);
  };
  const handleDeleteModalOpen = () => {
    handleClose();
    setDeleteModal(true);
  };

  const handelProjectDelete = () => {
    handleClose();
    const data = {
      authToken,
      projectId,
    };

    dispatch(deleteProjectData(data));
    handleDeleteModalClose();
  };

  return (
    <>
      <Modal onClose={handleDeleteModalClose} open={deleteModal}>
        <AreYouSure
          handleClose={handleDeleteModalClose}
          handleDelete={handelProjectDelete}
          headline="Are you sure you want to Delete the Project?"
        />
      </Modal>
      <GlobalSpinner isOpen={isGetProjectDataLoading} />
      <div className="project-card-base-div">
        {/* <span className="project-card-check-input">
        <input type="checkbox" />
      </span> */}

        <span className="project-card-project-name">
          <p>{projetName}</p>
        </span>

        <span className="project-card-client">
          <p>{client}</p>
        </span>

        <span className="project-card-description">{desc}</span>

        <span className="project-card-start-date">
          <p>{startDate}</p>
        </span>

        <span className="project-card-end-date">
          <p>{compDate}</p>
        </span>

        <span className="project-card-last-update">
          <p>{lastUpdate}</p>
        </span>

        <span className="project-card-user-last-update">
          <p>{userLastUpdate}</p>
        </span>

        <span className="project-card-user-actions">
          <MoreHorizIcon className="project-menu-icon" onClick={handleClick} />
          <Menu
            anchorEl={anchorEl}
            id="basic-menu"
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            onClose={handleClose}
            open={open}
          >
            <MenuItem onClick={handelProjectDataView}>{t('view')} </MenuItem>
            <MenuItem onClick={handleDeleteModalOpen}>{t('delete')}</MenuItem>
          </Menu>
        </span>
      </div>
    </>
  );
};
ProjectCard.propTypes = {
  handelView: PropTypes.func.isRequired,
  projetName: PropTypes.isRequired,
  client: PropTypes.isRequired,
  desc: PropTypes.isRequired,
  startDate: PropTypes.isRequired,
  compDate: PropTypes.isRequired,
  lastUpdate: PropTypes.isRequired,
  userLastUpdate: PropTypes.isRequired,
  projectId: PropTypes.isRequired,
};
export default ProjectCard;
