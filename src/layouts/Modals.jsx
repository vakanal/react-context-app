import Modal from "react-bootstrap/Modal";

export default function Modals({ children, show, handleClose, title }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      animation={false}
      backdrop="static"
      keyboard={false}
      size="lg"
      fullscreen="md-down"
      scrollable
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      {children}
    </Modal>
  );
}
