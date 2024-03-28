import PageHeader from "../components/PageHeader/PageHeader";
import WarehouseList from "../components/WarehouseList/WarehouseList";
import axios from "axios";
import { useEffect, useState } from "react";
import apiConfig from "../apiConfig.json";
import DeleteModal from "../components/DeleteModal/DeleteModal";

function Warehouses() {
  const [warehouses, setWarehouses] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => setModalIsOpen(true);

  const handleCloseModal = () => setModalIsOpen(false);

  const getWarehouses = async () => {
    try {
      console.log(`${apiConfig.baseUrl}/warehouse${apiConfig.urlParam}`);
      const { data } = await axios.get(
        `${apiConfig.baseUrl}/warehouse${apiConfig.urlParam}`
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
      <DeleteModal
        modalIsOpen={modalIsOpen}
        handleCloseModal={handleCloseModal}
      />
      <WarehouseList
        handleOpenModal={handleOpenModal}
        warehouses={warehouses}
      />
    </>
  );
}

export default Warehouses;
