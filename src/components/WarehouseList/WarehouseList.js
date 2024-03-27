import { Link } from "react-router-dom";
import "./WarehouseList.scss";

export default function WarehouseList({ warehouses }) {
  const isLastComment = (index) => index === warehouses.length - 1;
  return (
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
          <div
            className={`list__main list__main--row ${
              isLastComment(index) ? "list__main--last" : ""
            }
            }`}
            key={item.id}
          >
            <Link
              to={`/warehouses/${item.id}`}
              className="list__data  list__link list__data--row list__data--warehouse"
            >
              {item.warehouse_name}
            </Link>
            <p className="list__data  list__data--row list__data--warehouse">
              {`${item.address} ${item.city}  ${item.country}`}
            </p>
            <p className="list__data list__data--row list__data--warehouse">
              {item.contact_name}
            </p>
            <p className="list__data list__data--row list__data--warehouse ">
              {item.contact_phone}
              {item.contact_email}
            </p>

            <div className="list__buttons list__buttons--row">
              <button className="list__delete"></button>
              <Link to={`/warehouses/${item.id}/edit`} className="list__edit">
                <button></button>
              </Link>
            </div>
          </div>
        ))}

        {warehouses.map((item) => (
          <div className="list__main" key={item.id}>
            <div className="list__details">
              <div className="list__first">
                <h4 className="list__title">Warehouse</h4>
                <Link
                  to={`/warehouses/${item.id}`}
                  className="list__data list__link"
                >
                  {item.warehouse_name}
                </Link>
                <h4 className="list__title">Address</h4>
                <p className="list__data list__data--address">{`${item.address}, ${item.city} , ${item.country}`}</p>
              </div>
              <div className="list__second">
                <h4 className="list__title">Contact Name</h4>
                <p className="list__data ">{item.contact_name}</p>
                <h4 className="list__title">Contact Information</h4>
                <p className="list__data ">{item.contact_phone}</p>
                <p className="list__data ">{item.contact_email}</p>
              </div>
            </div>
            <div className="list__buttons">
              <button className="list__delete"></button>
              <Link to={`/warehouses/${item.id}/edit`} className="list__edit">
                <button></button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
