import PageHeader from "../components/PageHeader/PageHeader";
import WarehouseForm from "../components/WarehouseForm/WarehouseForm";

function EditWarehouse() {
  const headerConfig = {
    backButton: {
      show: true,
      path: "/warehouses/:id",
    },
    searchBar: false,
    actionButton: {
      show: false,
    },
    editButton: {
      show: false,
    },
  };
  return (
    <>
      <PageHeader title="Edit Warehouse" config={headerConfig} />
      <WarehouseForm action="edit" apiData={{}} />
    </>
  );
}

export default EditWarehouse;
