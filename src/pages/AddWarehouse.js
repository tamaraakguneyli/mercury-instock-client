import PageHeader from "../components/PageHeader/PageHeader";
import WarehouseForm from "../components/WarehouseForm/WarehouseForm";

function AddWarehouse() {
	const headerConfig = {
		backButton: {
			show: true,
			path: "/warehouses",
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
			<PageHeader title="add new warehouse" config={headerConfig} />
			<WarehouseForm />
		</>
	);
}

export default AddWarehouse;
