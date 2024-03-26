import React from "react";
import "../WarehouseForm/WarehouseForm.scss";

function WarehouseForm() {
  return (
    <div className="forms">
      <form>
        <div className="forms__form">
          <h1 className="forms__header">Warehouse Details</h1>
          <label className="forms__label">Warehouse Name</label>
          <input
            type="text"
            id="warehouse-name"
            className="forms__input"
            placeholder="API"
          />
          <label className="forms__label">Street Address</label>
          <input
            type="text"
            id="address"
            className="forms__input"
            placeholder="API"
          />
          <label className="forms__label">City</label>
          <input
            type="text"
            id="city"
            className="forms__input"
            placeholder="API"
          />
          <label className="forms__label">Country</label>
          <input
            type="text"
            id="country"
            className="forms__input"
            placeholder="API"
          />
        </div>
        <div className="forms__form">
          <h1 className="forms__header">Contact Details</h1>
          <label className="forms__label">Contact Name</label>
          <input
            type="text"
            id="contact-name"
            className="forms__input"
            placeholder="API"
          />
          <label>Position</label>
          <input
            type="text"
            id="position"
            className="forms__input"
            placeholder="API"
          />
          <label className="forms__label">Phone Number</label>
          <input
            type="text"
            id="number"
            className="forms__input"
            placeholder="API"
          />
          <label className="forms__label">Email</label>
          <input
            type="text"
            id="email"
            className="forms__input"
            placeholder="API"
          />
        </div>
        <div className="forms__buttons">
          <button type="submit" className="forms__button forms__button--cancel">
            Cancel
          </button>
          <button type="submit" className="forms__button forms__button--save">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default WarehouseForm;
