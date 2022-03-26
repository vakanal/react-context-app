import React from "react";
import PropTypes from "prop-types";
import { useAppContext } from "../hooks";
import { closeModal } from "../contexts/actions";
import Modal from "react-bootstrap/Modal";

export default function Modals({ children, title }) {
  const { getState, dispatch } = useAppContext();
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

Modals.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
