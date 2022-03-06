import { useContext } from "react";
import { AppContext } from "../contexts";
import { closeModal } from "../contexts/actions";
import Modal from "react-bootstrap/Modal";

export default function Modals({ children, title }) {
  const { getState, dispatch } = useContext(AppContext);
  const { modals: show } = getState();
  const handleOnHide = () => dispatch(closeModal());

  return (
    <Modal
      show={show}
      onHide={handleOnHide}
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
