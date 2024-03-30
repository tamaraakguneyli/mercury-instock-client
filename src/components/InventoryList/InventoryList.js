import React from "react";
import InventoryCard from "../InventoryCard/InventoryCard";

function InventoryList({ inventories, getInventories }) {
  return (
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
          <InventoryCard
            getInventories={getInventories}
            item={item}
            key={item.id}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default InventoryList;
