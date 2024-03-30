import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import apiConfig from "../../apiConfig.json";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function InventoryCard({
  getInventories,
  item,
  lastRecord,
  index,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => setModalIsOpen(true);

  const handleCloseModal = () => setModalIsOpen(false);

  const title = `Delete ${item.item_name} inventory Item?`;
  const text = `Please confirm that you’d like to delete ${item.item_name} from the inventory list.
  You won’t be able to undo this action.`;
  const InventoryId = item.id;

  const handleDelete = async () => {
    try {
      await axios.delete(
        ` ${apiConfig.baseUrl}/inventory/${InventoryId}${apiConfig.urlParam}`
      );
      getInventories();
    } catch (error) {
      console.log("error removing Inventory", error);
    }
  };
  return (
    <>
      <div className="list__main" key={item.id}>
        <div className="list__details list__details--row">
          <div className="list__first">
            <h4 className="list__title">inventory item</h4>
            <Link
              to={`/inventory/${item.id}`}
              className="list__data list__link"
            >
              {item.item_name}
              <div className="list__chevron"></div>
            </Link>
            <h4 className="list__title">category</h4>
            <p className="list__data list__data--category list__category">
              {item.category}
            </p>
          </div>
          <div className="list__second">
            <h4 className="list__title">status</h4>
            <div className="list__status-container">
              <p
                className={`list__data list__status ${
                  item.status === "In Stock" ? "" : "list__status--out"
                }`}
              >
                {`${item.status}`}
              </p>
            </div>
            <h4 className="list__title">qty</h4>
            <p className="list__data list__data--qty list__qty">
              {item.quantity}
            </p>
            <h4 className="list__title">warehouse</h4>
            <p className="list__data list__data--warehouse list__warehouse">
              {item.warehouse_name}
            </p>
          </div>
        </div>
        <div className="list__buttons">
          <button onClick={handleOpenModal} className="list__delete"></button>
          <Link to={`/inventory/${item.id}/edit`} className="list__edit"></Link>
        </div>
      </div>

      <DeleteModal
        title={title}
        text={text}
        handleOpenModal={handleOpenModal}
        handleDelete={handleDelete}
        modalIsOpen={modalIsOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
}
