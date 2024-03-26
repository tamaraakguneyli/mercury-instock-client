import "./PageHeader.scss";

function PageHeader() {
	return (
		<section className="label">
			<div className="label__container">
				<h2 className="label__title">Warehouses</h2>
				<div className="label__wrapper">
					<input
						className="label__search"
						placeholder="Search..."
						name="search"
					></input>
					<button className="label__button"> + Add New Warehouse</button>
				</div>
			</div>
		</section>
	);
}

export default PageHeader;
