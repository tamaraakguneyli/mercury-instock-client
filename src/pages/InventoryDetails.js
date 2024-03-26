import InventoryDetailsCard from "../components/InventoryDetailsCard/InventoryDetailsCard";
import PageHeader from "../components/PageHeader/PageHeader";

function InventoryDetails() {
	const headerConfig = {
		backButton: {
			show: true,
			path: "/inventory",
		},
		searchBar: false,
		actionButton: {
			show: true,
			label: "Edit",
			type: "edit",
			path: "/inventory/:id/edit",
		},
	};
	return (
		<>
			<PageHeader title=".." config={headerConfig} />
			<InventoryDetailsCard />
		</>
	);
}

export default InventoryDetails;
