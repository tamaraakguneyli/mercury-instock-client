import "./InventoryDetailsCard.scss";

function InventoryDetailsCard({ data }) {
  return (
    <main className="page">
      <article className="page__content">
        {!data ? (
          <div className="layout">
            <div className="page__top-divider">
              <p>Inventory details missing.</p>
            </div>
          </div>
        ) : (
          <>
            <div className="layout">
              <div className="page__top-divider">
                <div className="layout__block layout__block--middle-border">
                  <article className="inventory-item">
                    <p className="inventory-item__label">Item Description</p>
                    <p className="inventory-item__data">{data.description}</p>
                  </article>
                  <article className="inventory-item">
                    <p className="inventory-item__label">Category</p>
                    <p className="inventory-item__data">{data.category}</p>
                  </article>
                </div>
              </div>
              <div className="page__top-divider">
                <div className="layout__block">
                  <section className="item-container">
                    <article className="inventory-item">
                      <p className="inventory-item__label">Status</p>
                      <p
                        className={`inventory-item__data list__status ${
                          data.status === "In Stock" ? "" : "list__status--out"
                        }`}
                      >
                        {data.status}
                      </p>
                    </article>
                    <article className="inventory-item--left">
                      <p className="inventory-item__label">Quantity</p>
                      <p className="inventory-item__data">{data.quantity}</p>
                    </article>
                  </section>
                  <article className="inventory-item">
                    <p className="inventory-item__label">Warehouse</p>
                    <p className="inventory-item__data">
                      {data.warehouse_name}
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </>
        )}
      </article>
    </main>
  );
}

export default InventoryDetailsCard;
