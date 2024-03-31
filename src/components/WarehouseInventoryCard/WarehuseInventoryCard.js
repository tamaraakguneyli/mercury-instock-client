import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import apiConfig from "../../apiConfig.json";
import DeleteModal from "../DeleteModal/DeleteModal";

function WarehouseInventoryCard({
  warehouseId,
  inventory,
  handleInventoryState,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => setModalIsOpen(true);

  const handleCloseModal = () => setModalIsOpen(false);

  const handleDelete = async () => {
    try {
      await axios.delete(
        ` ${apiConfig.baseUrl}/inventories/${inventory.id}${apiConfig.urlParam}`
      );

      const { data } = await axios.get(
        `${apiConfig.baseUrl}/warehouses/${warehouseId}/inventory${apiConfig.urlParam}`
      );
      handleInventoryState(data);
    } catch (error) {
      console.log("Error while trying to remove the inventory", error);
    }
  };

  return (
    <>
      <div className="list__details">
        <div className="list__first list__first--warehouse-details">
          <h4 className="list__title list__title-header">inventory item</h4>
          <Link
            to={`/inventory/${inventory.id}`}
            className="list__data list__link list__link--warehouse"
          >
            {inventory.item_name}
            <div className="list__chevron"></div>
          </Link>
          <h4 className="list__title">category</h4>
          <p className="list__data list__data--category">
            {inventory.category}
          </p>
        </div>
        <div className="list__second list__second--warehouse-details">
          <h4 className="list__title">status</h4>
          <div className="list__status-container list__status-container--warehouse-details ">
            <p
              className={`list__data list__status ${
                inventory.status === "In Stock" ? "" : "list__status--out"
              }`}
            >
              {`${inventory.status}`}
            </p>
          </div>
          <h4 className="list__title">qty</h4>
          <p className="list__data list__data--qty-warehouse-details">
            {inventory.quantity}
          </p>
        </div>
      </div>
      <div className="list__buttons list__buttons--warehouse-details">
        <button onClick={handleOpenModal} className="list__delete"></button>
        <Link
          to={`/inventory/${inventory.id}/edit`}
          className="list__edit"
        ></Link>
      </div>
      <DeleteModal
        type="inventory"
        name={inventory.item_name}
        handleOpenModal={handleOpenModal}
        handleDelete={() => handleDelete(inventory.id)}
        modalIsOpen={modalIsOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
}

export default WarehouseInventoryCard;
