import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteModal from "../DeleteModal/DeleteModal";
import axios from "axios";
import apiConfig from "../../apiConfig.json";

export default function InventoryDetailsList({
  item,
  lastRecord,
  getInventoryInWarehouse,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => setModalIsOpen(true);

  const handleCloseModal = () => setModalIsOpen(false);

  const InventoryId = item.id;

  const handleDelete = async () => {
    try {
      await axios.delete(
        ` ${apiConfig.baseUrl}/inventory/${InventoryId}${apiConfig.urlParam}`
      );
      getInventoryInWarehouse();
    } catch (error) {
      console.log("Error while trying to remove the inventory", error);
    }
  };
  return (
    <>
      <div
        className={`list__main ${lastRecord ? "list__main--last" : ""}`}
        key={item.id}
      >
        <div className="list__details">
          <div className="list__first list__first--warehouse-details">
            <h4 className="list__title list__title-header">inventory item</h4>
            <Link
              to={`/inventory/${item.id}`}
              className="list__data list__link list__link--warehouse"
            >
              {item.item_name}
              <div className="list__chevron"></div>
            </Link>
            <h4 className="list__title">category</h4>
            <p className="list__data list__data--category">{item.category}</p>
          </div>
          <div className="list__second list__second--warehouse-details">
            <h4 className="list__title">status</h4>
            <div className="list__status-container list__status-container--warehouse-details ">
              <p
                className={`list__data list__status ${
                  item.status === "In Stock" ? "" : "list__status--out"
                }`}
              >
                {`${item.status}`}
              </p>
            </div>
            <h4 className="list__title">qty</h4>
            <p className="list__data list__data--qty-warehouse-details">
              {item.quantity}
            </p>
          </div>
        </div>
        <div className="list__buttons list__buttons--warehouse-details">
          <button onClick={handleOpenModal} className="list__delete"></button>
          <Link to={`/inventory/${item.id}/edit`} className="list__edit"></Link>
        </div>
      </div>
      <DeleteModal
        type="inventory"
        name={item.item_name}
        handleOpenModal={handleOpenModal}
        handleDelete={handleDelete}
        modalIsOpen={modalIsOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
}
