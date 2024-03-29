import PageHeader from "../components/PageHeader/PageHeader";
import InventoryForm from "../components/InventoryForm/InventoryForm";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../apiConfig.json";

function EditInventory() {
  const { inventoryId } = useParams();
  const [inventoryItemDetails, setInventoryDetails] = useState(null);

  useEffect(() => {
    const getInventoryItemDetails = async () => {
      try {
        const { data } = await axios.get(
          `${apiConfig.baseUrl}/inventory/${inventoryId}${apiConfig.urlParam}`
        );
        setInventoryDetails(data);
      } catch (error) {
        console.log("Error while fetching inventory item:", error);
      }
    };
    getInventoryItemDetails();
  }, [inventoryId]);

  if (!inventoryItemDetails) {
    return <p>Loading...</p>;
  }

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
      <PageHeader title="Edit Inventory Item" config={headerConfig} />
      <InventoryForm action="edit" apiData={inventoryItemDetails} />
    </>
  );
}

export default EditInventory;
