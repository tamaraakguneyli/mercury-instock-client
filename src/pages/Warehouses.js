import PageHeader from "../components/PageHeader/PageHeader";
import WarehouseList from "../components/WarehouseList/WarehouseList";

function Warehouses() {
  return (
    <>
      <PageHeader
        title="Warehouses"
        showSearch={true}
        ctaLabel="+ add new warehouse"
        path="/warehouses/add"
        type="add"
      />
      <WarehouseList />
    </>
  );
}

export default Warehouses;
