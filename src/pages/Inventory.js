import InventoryList from "../components/InventoryList/InventoryList";
import PageHeader from "../components/PageHeader/PageHeader";

function Inventory() {
  const headerConfig = {
    backButton: {
      show: false,
    },
    searchBar: true,
    actionButton: {
      label: "+ add new item",
      type: "add",
      show: true,
      path: "/inventory/add",
    },
    editButton: {
      show: false,
    },
  };
  return (
    <>
      <PageHeader title="invenotry" config={headerConfig} />
      <InventoryList />
    </>
  );
}

export default Inventory;
