import React from "react";
import Modal from "react-modal";
import "./DeleteModal.scss";

export default function DeleteModal({ modalIsOpen, handleCloseModal }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      contentLabel="onRequestClose Example"
      onRequestClose={handleCloseModal}
      className="modal"
      overlayClassName="Overlay"
    >
      <div className="modal__container">
        <h3 className="modal__title">Delete Washington warehouse? </h3>
        <p className="modal__text">
          Please confirm that you’d like to delete the Washington from the list
          of warehouses. You won’t be able to undo this action.
        </p>
        <div className="modal__wrap">
          <button className="modal__cancel" onClick={handleCloseModal}>
            cancel
          </button>
          <button className="modal__delete">delete</button>
        </div>
      </div>
    </Modal>
  );
}
