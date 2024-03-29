import React from "react";
import { Link } from "react-router-dom";

function InventoryList({ inventories }) {
  const isLastComment = (index) => index === inventories.length - 1;
  return (
    /*<div className="page page--margin">
      <div className="list page__content">
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
        {inventories.map((item, index) => (
          <div
            className={`list__main list__main--row ${
              isLastComment(index) ? "list__main--last" : ""
            }
            }`}
            key={item.id}
          >
            <Link
              to={`/inventory/${item.id}`}
              className="list__data list__link list__data--row"
            >
              {item.item_name}
            </Link>
            <p className="list__data list__category list__data--row">
              {item.category}
            </p>
            <div className="list__status-container">
              <p
                className={`list__data list__status ${
                  item.status === "In Stock" ? "" : "list__status--out"
                } list__data--row`}
              >
                {item.status}
              </p>
            </div>
            <p className="list__data list__qty list__data--row">
              {item.quantity}
            </p>
            <p className="list__data list__warehouse list__data--row">
              {item.warehouse_name}
            </p>
            <div className="list__buttons list__buttons--row">
              <button className="list__delete"></button>
              <Link to={`/inventory/${item.id}/edit`} className="list__edit">
                <button></button>
              </Link>
            </div>
          </div>
        ))}*/

    <div className="page page--margin">
      <div className="list page__content">
        <div className="list__thread">
          <h4 className="list__title list__title--top">inventory item</h4>
          <h4 className="list__title list__title--top">category</h4>
          <h4 className="list__title list__title--top">status</h4>
          <h4 className="list__title list__title--top">quantity</h4>
          <h4 className="list__title list__title--top">warehouse</h4>
          <h4 className="list__title list__title--top list__title--actions">
            actions
          </h4>
        </div>
        {inventories.map((item, index) => (
          <div
            className={`list__main list__main--row ${
              isLastComment(index) ? "list__main--last" : ""
            }`}
            key={item.id}
          >
            <div className="list__details list__details--row">
              <div className="list__first">
                <h4 className="list__title">inventory item</h4>
                <Link
                  to={`/inventory/${item.id}`}
                  className="list__data list__link"
                >
                  {item.item_name}
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
              <button className="list__delete"></button>
              <Link
                to={`/inventory/${item.id}/edit`}
                className="list__edit"
              ></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InventoryList;
