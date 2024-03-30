import React from "react";
import Modal from "react-modal";
import "./DeleteModal.scss";
import Delete from "../../assets/icons/close-24px.svg";

export default function DeleteModal({
  modalIsOpen,
  handleCloseModal,
  handleDelete,
  warehouseId,
  type,
  name,
}) {
  const title =
    type === "warehouse" ? `${name} Warehouse?` : `${name} Inventory Item?`;
  const text =
    type === "warehouse"
      ? `${name} from the list of warehouses`
      : `${name} from the inventory`;
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
        <h3 className="modal__title">{`Delete ${title}`}</h3>
        <p className="modal__text">{`Please confirm that you’d like to delete ${text}. You won’t be able to undo this action.`}</p>
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
