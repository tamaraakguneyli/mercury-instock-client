import InventoryDetailsCard from "../components/InventoryDetailsCard/InventoryDetailsCard";
import PageHeader from "../components/PageHeader/PageHeader";

function InventoryDetails() {
  const headerConfig = {
    backButton: {
      show: true,
      path: "/inventory/:id",
    },
    searchBar: false,
    actionButton: {
      show: true,
      path: "/inventory/:id/edit",
      label: "Edit",
      type: "editTablet",
    },
    editButton: {
      show: true,
      path: "/inventory/:id/edit",
    },
  };
  return (
    <>
      <PageHeader title=".." config={headerConfig} />
      <InventoryDetailsCard />
    </>
  );
}

export default InventoryDetails;
