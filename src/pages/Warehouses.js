import PageHeader from "../components/PageHeader/PageHeader";
import WarehouseList from "../components/WarehouseList/WarehouseList";

function Warehouses() {
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
			<WarehouseList />
		</>
	);
}

export default Warehouses;
