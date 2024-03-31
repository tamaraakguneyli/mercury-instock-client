import React from "react";

export default function WarehouseDetailsList({ warehouse }) {
  return (
    <>
      <div className="entity">
        <div className="entity__block">
          <p className="entity__title">Warehouse Address:</p>
          <p className="entity__data">{warehouse.address}</p>
        </div>
        <div className="entity__block">
          <div className="entity__details">
            <p className="entity__title">Contact Name:</p>
            <p className="entity__data">{warehouse.contact_phone}</p>
            <p className="entity__data">{warehouse.contact_position}</p>
          </div>
          <div className="entity__details">
            <p className="entity__title">Contact Information:</p>
            <p className="entity__data">{warehouse.contact_phone}</p>
            <p className="entity__data">{warehouse.contact_email}</p>
          </div>
        </div>
      </div>
      <div className="list__thread">
        <h4 className="list__title list__title--header">inventory item</h4>
        <h4 className="list__title list__title--header">category</h4>
        <h4 className="list__title list__title--warehouse-status">status</h4>
        <h4 className="list__title list__title--header">quantity</h4>
        <h4 className="list__title list__title--warehouse-action">actions</h4>
      </div>
    </>
  );
}
