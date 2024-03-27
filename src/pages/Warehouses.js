import PageHeader from "../components/PageHeader/PageHeader";
import WarehouseList from "../components/WarehouseList/WarehouseList";
import axios from "axios";
import { useEffect, useState } from "react";

function Warehouses() {
  const [warehouses, setWarehouses] = useState(null);
  const apiUrl = "http://localhost:8080";
  const apiKey = "9b7d01e2-fbc7-4361-a460-11aa938e1c68";

  const getWarehouses = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/warehouse?api_key=${apiKey}`);
      setWarehouses(data);
    } catch (error) {
      console.log("error fetching warehouses", error);
    }
  };

  useEffect(() => {
    getWarehouses();
  }, []);

  if (!warehouses) {
    return <p>Loading...</p>;
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
      <WarehouseList warehouses={warehouses} />
    </>
  );
}

export default Warehouses;
