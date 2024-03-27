import React from "react";
import "../WarehouseForm/WarehouseForm.scss";

/*
  action: edit, add
  apiData: expects the same properties as the MySQL attributes
  ie: Warehouse name is 'warehouse_name' in the database 'warehouses' table
*/

function WarehouseForm({ action, apiData }) {
  return (
    <main className="page">
      <article className="page__content">
        <form method="post" name={`warehouse-${action}`}>
          {!action ? (
            <div className="layout">
              <div className="page__top-divider">
                <p>Provide a form action (edit or add)</p>
              </div>
            </div>
          ) : (
            <>
              <div className="layout">
                <div className="page__top-divider">
                  <div className="layout__block layout__block--middle-border">
                    <h1 className="layout__headers">Warehouse Details</h1>
                    <label className="layout__form-labels">
                      Warehouse Name
                    </label>
                    <input
                      type="text"
                      name="warehouse_name"
                      className="layout__form-inputs"
                      value={apiData?.warehouse_name || ""}
                      placeholder="Warehouse Name"
                    />
                    <label className="layout__form-labels">
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      className="layout__form-inputs"
                      value={apiData?.address || ""}
                      placeholder="Street Address"
                    />
                    <label className="layout__form-labels">City</label>
                    <input
                      type="text"
                      name="city"
                      className="layout__form-inputs"
                      value={apiData?.city || ""}
                      placeholder="City"
                    />
                    <label className="layout__form-labels">Country</label>
                    <input
                      type="text"
                      name="country"
                      className="layout__form-inputs"
                      value={apiData?.country || ""}
                      placeholder="Country"
                    />
                  </div>
                </div>
                <div className="page__top-divider">
                  <div className="layout__block">
                    <h1 className="layout__headers">Contact Details</h1>
                    <label className="layout__form-labels">Contact Name</label>
                    <input
                      type="text"
                      name="contact_name"
                      className="layout__form-inputs"
                      value={apiData?.contact_name || ""}
                      placeholder="Contact Name"
                    />
                    <label className="layout__form-labels">Position</label>
                    <input
                      type="text"
                      name="contact_position"
                      className="layout__form-inputs"
                      value={apiData?.contact_position || ""}
                      placeholder="Position"
                    />
                    <label className="layout__form-labels">Phone Number</label>
                    <input
                      type="text"
                      name="contact_phone"
                      className="layout__form-inputs"
                      value={apiData?.contact_phone || ""}
                      placeholder="Phone Number"
                    />
                    <label className="layout__form-labels">Email</label>
                    <input
                      type="text"
                      name="contact_email"
                      className="layout__form-inputs"
                      value={apiData?.contact_email || ""}
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="buttons-block">
                <button
                  type="reset"
                  className="buttons-block__single-button buttons-block__single-button--cancel"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="buttons-block__single-button buttons-block__single-button--save"
                >
                  {action === "edit" ? "Save" : "+ Add Warehouse"}
                </button>
              </div>
            </>
          )}
        </form>
      </article>
    </main>
  );
}

export default WarehouseForm;
