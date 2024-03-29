import { Link } from "react-router-dom";

function WarehouseDetailsCard({ warehouse, inventory }) {
  const isLastComment = (index) => index === inventory.length - 1;
  return (
    <div className="page page--warehouse">
      <div className="list page__content">
        {warehouse && (
          <>
            <div className="entity">
              <div className="entity__block">
                <p className="entity__title">Warehouse Address:</p>
                <p className="entity__data">{warehouse.address}</p>
              </div>
              <div className="entity__block">
                <div className="entity__details">
                  <p className="entity__title">Contact Name:</p>
                  <p className="entity__data">{warehouse.contact_phone}</p>
                  <p className="entity__data">{warehouse.contact_position}</p>
                </div>
                <div className="entity__details">
                  <p className="entity__title">Contact Information:</p>
                  <p className="entity__data">{warehouse.contact_phone}</p>
                  <p className="entity__data">{warehouse.contact_email}</p>
                </div>
              </div>
            </div>
            <div className="list__thread">
              <h4 className="list__title list__title--header">
                inventory item
              </h4>
              <h4 className="list__title list__title--header">category</h4>
              <h4 className="list__title list__title--warehouse-status">
                status
              </h4>
              <h4 className="list__title list__title--header">quantity</h4>
              <h4 className="list__title list__title--warehouse-action">
                actions
              </h4>
            </div>
          </>
        )}
        {inventory && (
          <>
            {inventory.map((item, index) => (
              <div
                className={`list__main ${
                  isLastComment(index) ? "list__main--last" : ""
                }`}
                key={item.id}
              >
                <div className="list__details">
                  <div className="list__first list__first--warehouse-details">
                    <h4 className="list__title list__title-header">
                      inventory item
                    </h4>
                    <Link
                      to={`/inventory/${item.id}`}
                      className="list__data list__link list__link--warehouse"
                    >
                      {item.item_name}
                      <div className="list__chevron"></div>
                    </Link>
                    <h4 className="list__title">category</h4>
                    <p className="list__data list__data--category">
                      {item.category}
                    </p>
                  </div>
                  <div className="list__second list__second--warehouse-details">
                    <h4 className="list__title">status</h4>
                    <div className="list__status-container list__status-container--warehouse-details ">
                      <p
                        className={`list__data list__status ${
                          item.status === "In Stock" ? "" : "list__status--out"
                        }`}
                      >
                        {`${item.status}`}
                      </p>
                    </div>
                    <h4 className="list__title">qty</h4>
                    <p className="list__data list__data--qty-warehouse-details">
                      {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="list__buttons list__buttons--warehouse-details">
                  <button className="list__delete"></button>
                  <Link
                    to={`/inventory/${item.id}/edit`}
                    className="list__edit"
                  ></Link>
                </div>
              </div>
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
