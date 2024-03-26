import { Link } from "react-router-dom";

/*
  Type can be:
  - back => for back buttons
  - add => for add a new item (warehouse, inventory, etc)
  - edit => for editing an item
*/

function ActionButton({ label, path, type }) {
	const buttonTypes = {
		back: "label__back",
		add: "label__button",
		edit: "label__button--edit",
	};

	return (
		<>
			<Link className="label__tag" to={path || "/"}>
				<button className={buttonTypes[type]}>
					{type !== "back" ? label : ""}
				</button>
			</Link>
		</>
	);
}

export default ActionButton;
