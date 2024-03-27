import PageHeader from "../components/PageHeader/PageHeader";
import WarehouseDetailsCard from "../components/WarehouseDetailsCard/WarehouseDetailsCard";

function WarehouseDetails() {
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
			path: "/warehouses/:id/edit",
		},
		editButton: {
			show: true,
			path: "/warehouses/:id/edit",
		},
	};
	return (
		<>
			<PageHeader title=".." config={headerConfig} />
			<WarehouseDetailsCard />
		</>
	);
}

export default WarehouseDetails;
