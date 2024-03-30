import React from "react";
import Modal from "react-modal";
import "./DeleteModal.scss";
import Delete from "../../assets/icons/close-24px.svg";

export default function DeleteModal({
  warehouseName,
  modalIsOpen,
  handleCloseModal,
  handleDelete,
  warehouseId,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      contentLabel="onRequestClose Example"
      onRequestClose={handleCloseModal}
      className="modal"
      overlayClassName="Overlay"
    >
      <div className="modal__icon">
        <img
          onClick={handleCloseModal}
          src={Delete}
          alt=""
          className="modal__close"
        />
      </div>
      <div className="modal__container">
        <h3 className="modal__title">Delete {warehouseName} warehouse?</h3>
        <p className="modal__text">
          Please confirm that you’d like to delete the Washington from the list
          of warehouses. You won’t be able to undo this action.
        </p>
        <div className="modal__wrap">
          <button className="modal__cancel" onClick={handleCloseModal}>
            cancel
          </button>
          <button
            onClick={() => handleDelete(warehouseId)}
            className="modal__delete"
          >
            delete
          </button>
        </div>
      </div>
    </Modal>
  );
}
