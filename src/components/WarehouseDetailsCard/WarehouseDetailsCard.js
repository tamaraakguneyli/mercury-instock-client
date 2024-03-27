import { Link } from "react-router-dom";

function WarehouseDetailsCard() {
  const dataSet = [
    {
      id: 1,
      name: "Television",
      category: "Electronics",
      qty: 500,
      warehouse: "Washington",
    },
    {
      id: 2,
      name: "Gym Back",
      category: "Gear",
      qty: 0,
      warehouse: "Manhattan",
    },
    {
      id: 3,
      name: "Hoodie",
      category: "Apparel",
      qty: 0,
      warehouse: "Manhattan",
    },
  ];

  const isLastComment = (index) => index === dataSet.length - 1;
  return (
    <div className="page page--warehouse">
      <div className="list page__content">
        <div className="entity">
          <div className="entity__block">
            <p className="entity__title">Warehouse Address:</p>
            <p className="entity__data">33 Pearl Street SW, Washington, USA</p>
          </div>
          <div className="entity__block">
            <div className="entity__details">
              <p className="entity__title">Contact Name:</p>
              <p className="entity__data">Graeme Lyon</p>
              <p className="entity__data">Warehouse Manager</p>
            </div>
            <div className="entity__details">
              <p className="entity__title">Contact Information:</p>
              <p className="entity__data">+1 (647) 504-0911</p>
              <p className="entity__data">glyon@instock.com</p>
            </div>
          </div>
        </div>
        <div className="list__thread">
          <h4 className="list__title list__title--header">inventory item</h4>
          <h4 className="list__title list__title--header">category</h4>
          <h4 className="list__title list__title--header">status</h4>
          <h4 className="list__title list__title--header">qty</h4>
          <h4 className="list__title list__title--header list__title--actions">
            actions
          </h4>
        </div>
        {dataSet.map((item, index) => (
          <div
            className={`list__main list__main--record ${
              isLastComment(index) ? "list__main--last" : ""
            }
            }`}
            key={item.id}
          >
            <Link
              to={`/warehouses/${item.id}`}
              className="list__data list__link list__data--record"
            >
              {item.name}
            </Link>
            <p className="list__data list__category list__data--record">
              {item.category}
            </p>
            <div className="list__status-container">
              <p
                className={`list__data list__status ${
                  item.qty > 0 ? "" : "list__status--out"
                } list__data--row`}
              >
                {item.qty > 0 ? "in stock" : "out of stock"}
              </p>
            </div>
            <p className="list__data list__qty list__data--record">
              {item.qty}
            </p>
            {/* <p className="list__data list__warehouse list__data--row">
              {item.warehouse}
            </p> */}
            <div className="list__buttons list__buttons--record">
              <button className="list__delete"></button>
              <Link to={`/warehouses/${item.id}/edit`} className="list__edit">
                <button></button>
              </Link>
            </div>
          </div>
        ))}

        {dataSet.map((item) => (
          <div className="list__main" key={item.id}>
            <div className="list__details">
              <div className="list__first">
                <h4 className="list__title">inventory item</h4>
                <Link
                  to={`/warehouses/${item.id}`}
                  className="list__data list__link"
                >
                  {item.name}
                </Link>
                <h4 className="list__title">category</h4>
                <p className="list__data list__category">{item.category}</p>
              </div>
              <div className="list__second">
                <h4 className="list__title">status</h4>
                <p
                  className={`list__data list__status ${
                    item.qty > 0 ? "" : "list__status--out"
                  }`}
                >
                  {`${item.qty > 0 ? "in stock" : "out of stock"}`}
                </p>
                <h4 className="list__title">qty</h4>
                <p className="list__data list__qty">{item.qty}</p>
                {/* <h4 className="list__title">warehouse</h4>
                <p className="list__data list__warehouse">{item.warehouse}</p> */}
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

export default WarehouseDetailsCard;
