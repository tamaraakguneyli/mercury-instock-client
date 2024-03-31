import PageHeader from "../components/PageHeader/PageHeader";
import WarehouseList from "../components/WarehouseList/WarehouseList";
import axios from "axios";
import { useEffect, useState } from "react";
import apiConfig from "../apiConfig.json";
import Loader from "../components/Loader/Loader";

function Warehouses() {
  const [warehouses, setWarehouses] = useState(null);

  const getWarehouses = async () => {
    try {
      const { data } = await axios.get(
        `${apiConfig.baseUrl}/warehouses${apiConfig.urlParam}`
      );
      setWarehouses(data);
    } catch (error) {
      console.log("Error while fetching warehouses:", error);
    }
  };

  useEffect(() => {
    getWarehouses();
  }, []);

  if (!warehouses) {
    return <Loader />;
  }

  const headerConfig = {
    backButton: {
      show: false,
    },
    searchBar: true,
    actionButton: {
      label: "+ add to warehouse",
      type: "add",
      show: true,
      path: "/warehouses/add",
    },
    editButton: {
      show: false,
    },
  };

  return (
    <>
      <PageHeader title="Warehouses" config={headerConfig} />
      <WarehouseList getWarehouses={getWarehouses} warehouses={warehouses} />
    </>
  );
}

export default Warehouses;
