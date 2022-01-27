import Modal from '@mui/material/Modal';
import React from 'react';

const AreYouSure = () => {
  const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      aria-describedby="modal-modal-description"
      aria-labelledby="modal-modal-title"
      onClose={handleClose}
      open={open}
    >
      <div>Hello</div>
    </Modal>
  );
};

export default AreYouSure;
