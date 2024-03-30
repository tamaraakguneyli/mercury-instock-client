import "./WarehouseList.scss";
import WarehouseCard from "../WarehouseCard/WarehouseCard";

function WarehouseList({ warehouses, getWarehouses }) {
  return (
    <>
      <div className="page page--margin">
        <div className="list page__content">
          <div className="list__thread">
            <h4 className="list__title list__title--top list__title--warehouse">
              Warehouse
            </h4>
            <h4 className="list__title list__title--top list__title--warehouse">
              Address
            </h4>
            <h4 className="list__title list__title--top list__title--warehouse">
              Contact Name
            </h4>
            <h4 className="list__title list__title--top list__title--warehouse">
              Contact Information
            </h4>
            <h4 className="list__title list__title--top list__title--actions">
              actions
            </h4>
          </div>
          {warehouses.map((item, index) => (
            <WarehouseCard
              getWarehouses={getWarehouses}
              item={item}
              index={index}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default WarehouseList;
