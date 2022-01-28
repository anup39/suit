import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

// import { deleteFeedback } from '../../../redux/feedback-redux/feedback.actions';
import { getUserAuthToken } from '../../../redux/user-redux/user.selectors';
import AreYouSure from './AreYouSure/AreYouSure';

const Datarow = ({ data }) => {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const dispatch = useDispatch();
  const authToken = useSelector(getUserAuthToken);

  console.log(dispatch);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleDelete = () => {
    handleClose();
    const dataToSend = { authToken, feedbackId: data.id };
    console.log(dataToSend);
    handleModalOpen();
    // dispatch(deleteFeedback(dataToSend));
  };

  return (
    <>
      <Modal
        aria-describedby="modal-modal-description"
        aria-labelledby="modal-modal-title"
        onClose={handleModalClose}
        open={modalOpen}
      >
        <AreYouSure />
      </Modal>
      <tr style={{ borderBottom: '1px solid #d4deea' }}>
        <td>{data.userName}</td>
        <td> {data.createdDate} </td>
        <td style={{ width: '25%' }}>{data.address}</td>
        <td>{data.city} </td>
        <td>{data.satisfactionLevel} </td>
        <td className="blue-text" style={{ width: '15%' }}>
          -
        </td>
        <td>
          <MoreHorizIcon
            aria-controls="basic-menu"
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            id="basic-button"
            onClick={handleClick}
          />
          <Menu
            anchorEl={anchorEl}
            id="basic-menu"
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            onClose={handleClose}
            open={open}
          >
            <MenuItem onClick={handleDelete}>{t('delete')}</MenuItem>
          </Menu>
        </td>
      </tr>
    </>
  );
};

Datarow.propTypes = {
  data: PropTypes.isRequired,
};
export default Datarow;
