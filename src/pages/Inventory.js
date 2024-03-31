import InventoryList from "../components/InventoryList/InventoryList";
import PageHeader from "../components/PageHeader/PageHeader";
import axios from "axios";
import { useEffect, useState } from "react";
import apiConfig from "../apiConfig.json";
import Loader from "../components/Loader/Loader";

function Inventory() {
  const [inventories, setinventories] = useState(null);

  const getInventories = async () => {
    try {
      const { data } = await axios.get(
        `${apiConfig.baseUrl}/inventories${apiConfig.urlParam}`
      );
      setinventories(data);
    } catch (error) {
      console.log("Error while fetching inventories:", error);
    }
  };

  useEffect(() => {
    getInventories();
  }, []);

  if (!inventories) {
    return <Loader />;
  }
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
      <PageHeader title="Inventory" config={headerConfig} />
      <InventoryList
        getInventories={getInventories}
        inventories={inventories}
      />
    </>
  );
}

export default Inventory;
