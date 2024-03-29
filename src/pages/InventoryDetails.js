import { useNavigate, useParams } from "react-router-dom";
import InventoryDetailsCard from "../components/InventoryDetailsCard/InventoryDetailsCard";
import PageHeader from "../components/PageHeader/PageHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import apiConfig from "../apiConfig.json";

function InventoryDetails() {
  const { inventoryId } = useParams();
  const [inventoryData, setInventoryData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getInventoryData = async () => {
      try {
        const { data } = await axios.get(
          `${apiConfig.baseUrl}/inventory/${inventoryId}${apiConfig.urlParam}`
        );
        setInventoryData(data);
      } catch (error) {
        console.log("Error while fetching inventory information:", error);
      }
    };

    if (!inventoryId) {
      return navigate("/inventory");
    }

    getInventoryData();
  }, [inventoryId, navigate]);

  if (!inventoryData) {
    return <p>Loading...</p>;
  }

  const headerConfig = {
    backButton: {
      show: true,
      path: "/inventory",
    },
    searchBar: false,
    actionButton: {
      show: true,
      path: `/inventory/${inventoryId}/edit`,
      label: "Edit",
      type: "editTablet",
    },
    editButton: {
      show: true,
      path: `/inventory/${inventoryId}/edit`,
    },
  };

  return (
    <>
      <PageHeader title={inventoryData.item_name} config={headerConfig} />
      <InventoryDetailsCard data={inventoryData} />
    </>
  );
}

export default InventoryDetails;
