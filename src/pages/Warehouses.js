import { useState } from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import WarehouseList from "../components/WarehouseList/WarehouseList";
import "./Warehouses.scss";
import Modal from "react-modal";

function Warehouses() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);
  const headerConfig = {
    backButton: {
      show: false,
    },
    searchBar: true,
    actionButton: {
      label: "+ add to warehouse",
      type: "add",
      show: true,
      path: "/warehouses/add",
    },
    editButton: {
      show: false,
    },
  };

  return (
    <>
      <PageHeader title="Warehouses" config={headerConfig} />
      <WarehouseList />
      <button className="trigger" onClick={handleOpenModal}>
        Trigger Modal
      </button>

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
            Please confirm that you’d like to delete the Washington from the
            list of warehouses. You won’t be able to undo this action.
          </p>
          <div className="modal__wrap">
            <button className="modal__cancel" onClick={handleCloseModal}>
              cancel
            </button>
            <button className="modal__delete">delete</button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Warehouses;
