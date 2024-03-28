import PageHeader from "../components/PageHeader/PageHeader";
import WarehouseForm from "../components/WarehouseForm/WarehouseForm";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../apiConfig.json";

function EditWarehouse() {
  const { id: warehouseId } = useParams();
  const [warehouseDetails, setWarehouseDetails] = useState(null);

  useEffect(() => {
    const getWarehouseDetails = async () => {
      try {
        const { data } = await axios.get(
          `${apiConfig.baseUrl}/warehouse/${warehouseId}${apiConfig.urlParam}`
        );
        setWarehouseDetails(data);
      } catch (error) {
        console.log("Error while fetching warehouse:", error);
      }
    };
    getWarehouseDetails();
  }, [warehouseId]);

  if (!warehouseDetails) {
    return <p>Loading...</p>;
  }
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
      <WarehouseForm action="edit" apiData={warehouseDetails} />
    </>
  );
}

export default EditWarehouse;
