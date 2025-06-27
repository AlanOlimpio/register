import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import FormRegister from '../FormRegister';

function ModalRegister() {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    navigate(-1);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormRegister />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalRegister;
