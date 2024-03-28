import React, { useState } from "react";
import SelectBox from "../../molecules/SelectBox/SelectBox";

/*
  action: edit, add
  apiData: expects the same properties as the MySQL attributes
  ie: Item name is 'item_name' in the database 'inventories' table
*/

const [warehouses, setWarehouses] = useState(null);
const [catorgories, setCatorgories] = useState(null);

[{ value: "warehouse_id", label: "warehouse_name" }];
[{ value: "", label: "" }];

function InventoryForm({ action, apiData }) {
  return (
    <main className="page">
      <article className="page__content">
        <form method="post" name={`inventory-${action}`}>
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
                    <h1 className="layout__headers">Item Details</h1>
                    <label className="layout__form-labels">Item Name</label>
                    <input
                      type="text"
                      name="item_name"
                      className="layout__form-inputs"
                      defaultValue={apiData?.item_name || ""}
                      placeholder="Item Name"
                    />
                    <label className="layout__form-labels">Description</label>
                    <textarea
                      className="layout__form-textarea"
                      placeholder="Please enter a brief item description..."
                      name="description"
                    >
                      {apiData?.description || ""}
                    </textarea>
                    <label className="layout__form-labels">Catergory</label>
                    <SelectBox
                      name="category"
                      options={catorgories}
                      selectedOption={apiData?.category || ""}
                    />
                  </div>
                </div>
                <div className="page__top-divider">
                  <div className="layout__block">
                    <h1 className="layout__headers">Item Availability</h1>
                    <label className="layout__form-labels">Status</label>
                    <div className="layout__form-radio-section">
                      <div className="layout__form-radio-button">
                        <input
                          type="radio"
                          id="instock"
                          name="status"
                          defaultValue="true"
                          selected={apiData?.status === true || false}
                        />
                        <label for="instock">In Stock</label>
                      </div>
                      <div className="layout__form-radio-button">
                        <input
                          type="radio"
                          id="oostock"
                          name="status"
                          defaultValue="false"
                          selected={apiData?.status === false || false}
                        />
                        <label for="oostock">Out of Stock</label>
                      </div>
                    </div>
                    <label className="layout__form-labels">Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      className="layout__form-inputs layout__form-inputs--desktop"
                      defaultValue={apiData?.quantity || ""}
                      placeholder="0"
                    />
                    <label className="layout__form-labels">Warehouse</label>
                    <SelectBox
                      name="warehouse_id"
                      options={warehouses}
                      selectedOption={apiData?.warehouse_id || ""}
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
                  {action === "edit" ? "Save" : "+ Add Item"}
                </button>
              </div>
            </>
          )}
        </form>
      </article>
    </main>
  );
}

export default InventoryForm;
