import { BrowserRouter, Route, Routes } from "react-router-dom";
import Warehouses from "./pages/Warehouses";
import AddWarehouse from "./pages/AddWarehouse";
import WarehouseDetails from "./pages/WarehouseDetails";
import EditWarehouse from "./pages/EditWarehouse";
import Inventory from "./pages/Inventory";
import AddInventory from "./pages/AddInventory";
import InventoryDetails from "./pages/InventoryDetails";
import EditInventory from "./pages/EditInventory";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";

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
