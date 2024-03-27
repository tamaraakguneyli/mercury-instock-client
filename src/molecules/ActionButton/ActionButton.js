import { Link } from "react-router-dom";

/*
  Type can be:
  - back => for back buttons
  - add => for add a new item (warehouse, inventory, etc)
  - edit => for editing an item
*/

function ActionButton({ label, path, type, className }) {
  const buttonTypes = {
    back: "page-header__back",
    add: "page-header__button",
    edit: "page-header__edit",
    editTablet: "page-header__edit page-header__edit--tablet",
  };

  return (
    <>
      <Link className={className} to={path || "/"}>
        <button className={buttonTypes[type]}>
          {type !== "back" ? label : ""}
        </button>
      </Link>
    </>
  );
}

export default ActionButton;
