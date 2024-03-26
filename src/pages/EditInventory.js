import PageHeader from "../components/PageHeader/PageHeader";
import InventoryForm from "../components/InventoryForm/InventoryForm";

function EditInventory() {
	const headerConfig = {
		backButton: {
			show: true,
			path: "/inventory",
		},
		searchBar: false,
		actionButton: {
			show: false,
		},
	};
	return (
		<>
			<PageHeader title="Edit Inventory" config={headerConfig} />
			<InventoryForm />
		</>
	);
}

export default EditInventory;
