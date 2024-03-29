import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import apiConfig from "../../apiConfig.json";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function WarehouseCard({
  getWarehouses,
  isLastComment,
  item,
  index,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => setModalIsOpen(true);

  const handleCloseModal = () => setModalIsOpen(false);

  const warehouseId = item.id;

  const handleDelete = async () => {
    console.log("handle delete working");
    try {
      await axios.delete(
        `${apiConfig.baseUrl}/warehouse/${warehouseId}${apiConfig.urlParam}`
      );
      getWarehouses();
    } catch (error) {
      console.log("error removing warehouse", error);
    }
  };
  return (
    <>
      <div className="list__main" key={item.id}>
        <div className="list__details">
          <div className="list__wrap list__wrap--name">
            <div className="list__right">
              <h4 className="list__title">Warehouse</h4>
              <Link
                to={`/warehouses/${item.id}`}
                className="list__data list__link"
              >
                {item.warehouse_name}
              </Link>
            </div>
            <div className="list__left">
              <h4 className="list__title">Address</h4>
              <p className="list__data list__data--address">{`${item.address}, ${item.city} , ${item.country}`}</p>
            </div>
          </div>
          <div className="list__wrap list__wrap--info">
            <h4 className="list__title">Contact Name</h4>
            <p className="list__data  ">{item.contact_name}</p>
            <h4 className="list__title">Contact Information</h4>
            <div className="list__wrap list__wrap--contact">
              <p className="list__data ">{item.contact_phone}</p>
              <p className="list__data ">{item.contact_email}</p>
            </div>
          </div>
        </div>
        <div className="list__wrap list__wrap--buttons">
          <button className="list__delete"></button>
          <Link
            to={`/warehouses/${item.id}/edit`}
            className="list__edit"
          ></Link>
        </div>
      </div>
      <DeleteModal
        handleOpenModal={handleOpenModal}
        handleDelete={{ handleDelete }}
        modalIsOpen={modalIsOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
}