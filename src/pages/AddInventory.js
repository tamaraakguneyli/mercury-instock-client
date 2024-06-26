import PageHeader from "../components/PageHeader/PageHeader";
import InventoryForm from "../components/InventoryForm/InventoryForm";

function AddInventory() {
  const headerConfig = {
    backButton: {
      show: true,
      path: "/inventory",
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
      <PageHeader title="add new inventory item" config={headerConfig} />
      <InventoryForm action="add" />
    </>
  );
}

export default AddInventory;
