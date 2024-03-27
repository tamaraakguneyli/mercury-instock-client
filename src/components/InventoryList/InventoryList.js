import React from "react";
import "./InventoryList.scss";
import { Link } from "react-router-dom";

function InventoryList() {
  const inStock = true;
  const id = 1;
  return (
    <div className="list">
      <div className="list__thread">
        <h4 className="list__title list__title--top">inventory item</h4>
        <h4 className="list__title list__title--top">category</h4>
        <h4 className="list__title list__title--top">status</h4>
        <h4 className="list__title list__title--top">qty</h4>
        <h4 className="list__title list__title--top">warehouse</h4>
        <h4 className="list__title list__title--top list__title--actions">
          actions
        </h4>
      </div>
      <div className="list__main list__main--row">
        <Link
          to={`/inventory/${id}`}
          className="list__data list__link list__data--row"
        >
          Television
        </Link>
        <p className="list__data list__category list__data--row">Electronics</p>
        <div className="list__status--container">
          <p
            className={`list__data list__status ${
              inStock ? "" : "list__status--out"
            } list__data--row`}
          >
            {`${inStock ? "in stock" : "out of stock"}`}
          </p>
        </div>
        <p className="list__data list__qty list__data--row">500</p>
        <p className="list__data list__warehouse list__data--row">Manhattan</p>
        <div className="list__buttons list__buttons--row">
          <button className="list__delete"></button>
          <Link to={`/inventory/${id}/edit`} className="list__edit">
            <button></button>
          </Link>
        </div>
      </div>
      <div className="list__main">
        <div className="list__details">
          <div className="list__first">
            <h4 className="list__title">inventory item</h4>
            <Link to={`/inventory/${id}`} className="list__data list__link">
              Television
            </Link>
            <h4 className="list__title">category</h4>
            <p className="list__data list__category">Electronics</p>
          </div>
          <div className="list__second">
            <h4 className="list__title">status</h4>
            <p
              className={`list__data list__status ${
                inStock ? "" : "list__status--out"
              }`}
            >
              {`${inStock ? "in stock" : "out of stock"}`}
            </p>
            <h4 className="list__title">qty</h4>
            <p className="list__data list__qty">500</p>
            <h4 className="list__title">warehouse</h4>
            <p className="list__data list__warehouse">Manhattan</p>
          </div>
        </div>
        <div className="list__buttons">
          <button className="list__delete"></button>
          <Link to={`/inventory/${id}/edit`} className="list__edit">
            <button></button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InventoryList;
