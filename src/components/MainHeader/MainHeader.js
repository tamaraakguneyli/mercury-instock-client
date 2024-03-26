import "./MainHeader.scss";

function MainHeader() {
	return (
		<section className="label">
			<h2 className="label__title">Warehouses</h2>
			<div className="label__wrapper">
				<input
					className="label__search"
					placeholder="Search..."
					name="search"
				></input>
				<button className="label__button"> + Add New Warehouse</button>
			</div>
		</section>
	);
}

export default MainHeader;
