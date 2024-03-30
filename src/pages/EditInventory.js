import PageHeader from "../components/PageHeader/PageHeader";
import InventoryForm from "../components/InventoryForm/InventoryForm";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import apiConfig from "../apiConfig.json";

function EditInventory() {
  const { inventoryId } = useParams();
  const [inventory, setInventory] = useState(null);

  useEffect(() => {
    const getInventory = async () => {
      try {
        const { data } = await axios.get(
          `${apiConfig.baseUrl}/inventory/${inventoryId}${apiConfig.urlParam}`
        );
        setInventory(data);
      } catch (error) {
        console.log("Error while fetching inventory:", error);
      }
    };

    getInventory();
  }, [inventoryId]);

  if (!inventory) {
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
      <InventoryForm action="edit" apiData={inventory} />
    </>
  );
}

export default EditInventory;
