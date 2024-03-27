import React from "react";
import "../WarehouseForm/WarehouseForm.scss";

function WarehouseForm() {
  return (
    <main className="page">
      <article className="page__content">
        <form>
          <div className="layout">
            <div className="page__top-divider">
              <div className="layout__block layout__block--middle-border">
                <h1 className="layout__headers">Warehouse Details</h1>
                <label className="layout__form-labels">Warehouse Name</label>
                <input
                  type="text"
                  id="warehouse-name"
                  className="layout__form-inputs"
                  placeholder="API"
                />
                <label className="layout__form-labels">Street Address</label>
                <input
                  type="text"
                  id="address"
                  className="layout__form-inputs"
                  placeholder="API"
                />
                <label className="layout__form-labels">City</label>
                <input
                  type="text"
                  id="city"
                  className="layout__form-inputs"
                  placeholder="API"
                />
                <label className="layout__form-labels">Country</label>
                <input
                  type="text"
                  id="country"
                  className="layout__form-inputs"
                  placeholder="API"
                />
              </div>
            </div>
            <div className="page__top-divider">
              <div className="layout__block">
                <h1 className="layout__headers">Contact Details</h1>
                <label className="layout__form-labels">Contact Name</label>
                <input
                  type="text"
                  id="contact-name"
                  className="layout__form-inputs"
                  placeholder="API"
                />
                <label className="layout__form-labels">Position</label>
                <input
                  type="text"
                  id="position"
                  className="layout__form-inputs"
                  placeholder="API"
                />
                <label className="layout__form-labels">Phone Number</label>
                <input
                  type="text"
                  id="number"
                  className="layout__form-inputs"
                  placeholder="API"
                />
                <label className="layout__form-labels">Email</label>
                <input
                  type="text"
                  id="email"
                  className="layout__form-inputs"
                  placeholder="API"
                />
              </div>
            </div>
          </div>
          <div className="buttons-block">
            <button
              type="submit"
              className="buttons-block__single-button buttons-block__single-button--cancel"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="buttons-block__single-button buttons-block__single-button--save"
            >
              Save
            </button>
          </div>
        </form>
      </article>
    </main>
  );
}

export default WarehouseForm;
