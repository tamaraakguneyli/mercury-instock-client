import { Link } from "react-router-dom";
import "./WarehouseList.scss";
import axios from "axios";
import { useEffect, useState } from "react";

export default function WarehouseList() {
  const apiUrl = "http://localhost:8080";
  const apiKey = "9b7d01e2-fbc7-4361-a460-11aa938e1c68";

  const [warehouses, setWarehouses] = useState(null);

  const getWarehouses = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/warehouse?api_key=9b7d01e2-fbc7-4361-a460-11aa938e1c68"
      );
      setWarehouses(data);
    } catch (error) {
      console.log("error fetching warehouses", error);
    }
  };

  useEffect(() => {
    getWarehouses();
  }, []);

  if (!warehouses) {
    return <p>Loading...</p>;
  }

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
