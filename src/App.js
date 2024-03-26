import { BrowserRouter, Route, Routes } from "react-router-dom";
import Warehouses from "./components/pages/Warehouses";
import WarehouseDetails from "./components/pages/WarehouseDetails";
import EditWarehouse from "./components/pages/EditWarehouse";
import AddWarehouse from "./components/pages/AddWarehouse";
import Inventory from "./components/pages/Inventory";
import InventoryDetails from "./components/pages/InventoryDetails";
import AddInventory from "./components/pages/AddInventory";
import EditInventory from "./components/pages/EditInventory";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Warehouses />} />
        <Route path="/warehouses">
          <Route index element={<Warehouses />} />
          <Route path="add" element={<AddWarehouse />} />
          <Route path=":id">
            <Route index element={<WarehouseDetails />} />
            <Route path="edit" element={<EditWarehouse />} />
            <Route path="inventory">
              <Route index element={<Inventory />} />
              <Route path="add" element={<AddInventory />} />
              <Route path=":inventoryId">
                <Route index element={<InventoryDetails />} />
                <Route path="edit" element={<EditInventory />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
