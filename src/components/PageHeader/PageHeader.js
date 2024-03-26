import ActionButton from "../../molecules/ActionButton/ActionButton";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import "./PageHeader.scss";

function PageHeader({ title, ctaLabel, path, type }) {
  return (
    <section className="label">
      <div className="label__container">
        <h2 className="label__title">{title || "..."}</h2>
        <div className="label__wrapper">
          <SearchBar />
          <ActionButton label={ctaLabel} path={path} type={type} />
        </div>
      </div>
    </section>
  );
}

export default PageHeader;
