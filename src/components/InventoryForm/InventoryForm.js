import React from "react";
import SelectBox from "../../molecules/SelectBox/SelectBox";

const options = [
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
];

function InventoryForm() {
  return (
    <main className="page">
      <article className="page__content">
        <form>
          <div className="layout">
            <div className="page__top-divider">
              <div className="layout__block layout__block--middle-border">
                <h1 className="layout__headers">Item Details</h1>
                <label className="layout__form-labels">Item Name</label>
                <input
                  type="text"
                  id="warehouse-name"
                  className="layout__form-inputs"
                  placeholder=""
                />
                <label className="layout__form-labels">Description</label>
                <textarea
                  className="layout__form-textarea"
                  placeholder="Please enter a brief item description..."
                ></textarea>
                <label className="layout__form-labels">Catorgory</label>
                <SelectBox options={options} />
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
                      id="inStock"
                      name="status"
                      value="inStock"
                    />
                    <label for="inStock">In Stock</label>
                  </div>
                  <div className="layout__form-radio-button">
                    <input
                      type="radio"
                      id="outOfStock"
                      name="status"
                      value="outOfStock"
                    />
                    <label for="outOfStock">Out of Stock</label>
                  </div>
                </div>
                <label className="layout__form-labels">Quantity</label>
                <input
                  type="text"
                  id="quantity"
                  className="layout__form-inputs layout__form-inputs--desktop"
                  placeholder="0"
                />
                <label className="layout__form-labels">Warehouse</label>
                <SelectBox options={options} />
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
              +Add Item
            </button>
          </div>
        </form>
      </article>
    </main>
  );
}

export default InventoryForm;
