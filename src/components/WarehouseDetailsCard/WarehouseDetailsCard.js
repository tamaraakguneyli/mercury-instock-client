import WarehouseDetailsList from "../WarehouseDetailsList/WarehouseDetailsList";
import InventoryDetailsList from "../inventoryDetailsList/InventoryDetailsList";

function WarehouseDetailsCard({
  warehouse,
  inventory,
  setInventoryInWarehouse,
}) {
  const isLastRecord = (index) => index === inventory.length - 1;
  return (
    <div className="page page--warehouse">
      <div className="list page__content">
        {warehouse && (
          <WarehouseDetailsList key={warehouse.id} warehouse={warehouse} />
        )}
        {inventory && (
          <>
            {inventory.map((item, index) => (
              <InventoryDetailsList
                setInventoryInWarehouse={setInventoryInWarehouse}
                key={item.id}
                lastRecord={isLastRecord(index)}
                item={item}
              />
            ))}
          </>
        )}
        {!inventory && (
          <div className="list__empty">
            <p>There are no items in this warehouse</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WarehouseDetailsCard;
