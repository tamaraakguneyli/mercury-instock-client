import PageHeader from "../components/PageHeader/PageHeader";
import WarehouseDetailsCard from "../components/WarehouseDetailsCard/WarehouseDetailsCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../apiConfig.json";
import Loader from "../components/Loader/Loader";

function WarehouseDetails() {
  const { id: warehouseId } = useParams();
  const [warehouseContactDetails, setWarehouseContactDetails] = useState(null);
  const [inventoryInWarehouse, setInventoryInWarehouse] = useState(null);

  useEffect(() => {
    const getWarehouseContactDetails = async () => {
      try {
        const { data } = await axios.get(
          `${apiConfig.baseUrl}/warehouse/${warehouseId}${apiConfig.urlParam}`
        );
        setWarehouseContactDetails(data);
      } catch (error) {
        console.log("Error while fetching warehouse:", error);
      }
    };

    const getInventoryInWarehouse = async () => {
      try {
        const { data } = await axios.get(
          `${apiConfig.baseUrl}/warehouse/${warehouseId}/inventory${apiConfig.urlParam}`
        );
        setInventoryInWarehouse(data);
      } catch (error) {
        console.log("Error while fetching inventory:", error);
      }
    };

    getWarehouseContactDetails();
    getInventoryInWarehouse();
  }, [warehouseId]);

  if (!warehouseContactDetails) {
    return <Loader />;
  }

  console.log(inventoryInWarehouse);
  const headerConfig = {
    backButton: {
      show: true,
      path: "/warehouses/",
    },
    searchBar: false,
    actionButton: {
      show: true,
      type: "editTablet",
      label: "Edit",
      path: `/warehouses/${warehouseId}/edit`,
    },
    editButton: {
      show: true,
      path: `/warehouses/${warehouseId}/edit`,
    },
  };
  return (
    <>
      <PageHeader
        title={warehouseContactDetails.warehouse_name}
        config={headerConfig}
      />
      <WarehouseDetailsCard
        warehouse={warehouseContactDetails}
        inventory={inventoryInWarehouse}
      />
    </>
  );
}

export default WarehouseDetails;
