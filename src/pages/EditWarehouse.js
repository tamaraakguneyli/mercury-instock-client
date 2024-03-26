import PageHeader from "../components/PageHeader/PageHeader";
import WarehouseForm from "../components/WarehouseForm/WarehouseForm";

function EditWarehouse() {
	const headerConfig = {
		backButton: {
			show: true,
			path: "/warehouses",
		},
		searchBar: false,
		actionButton: {
			show: false,
		},
	};
	return (
		<>
			<PageHeader title="Edit Warehouse" config={headerConfig} />
			<WarehouseForm />
		</>
	);
}

export default EditWarehouse;
