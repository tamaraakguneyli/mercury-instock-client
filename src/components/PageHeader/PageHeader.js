import ActionButton from "../../molecules/ActionButton/ActionButton";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import "./PageHeader.scss";

/*
  config structure:
  {
    backButton: {
      show: boolean,
      path: string
    },
    searchBar: boolean,
    actionButton: {
    
      type: string,
      show: boolean,
      path: string
    }
	 editButton: {
      show: boolean,
      path: string
	  type: string,
	  label: string,
    },
  }
*/

function PageHeader({ title, config }) {
	return title && config ? (
		<section className="label">
			<div className="label__background">
				<div className="label__container">
					<div className="label__mobile">
						<div className="label__left">
							{config.backButton.show && (
								<ActionButton
									label=""
									path={config.backButton.path}
									type="back"
									className="label__tag label__tag--back"
								/>
							)}

							<h2 className="label__title">{title || "..."}</h2>
						</div>
						<div className="label__right">
							{config.editButton.show && (
								<ActionButton
									label=""
									path={config.editButton.path}
									type="edit"
									className="label__tag label__tag--edit"
								/>
							)}
						</div>
					</div>

					{config.searchBar || config.actionButton.show ? (
						<div className="label__wrapper">
							{config.searchBar && <SearchBar />}
							{config.actionButton.show && (
								<ActionButton
									label={config.actionButton.label}
									path={config.actionButton.path}
									type={config.actionButton.type}
									className="label__tag "
								/>
							)}
						</div>
					) : (
						""
					)}
				</div>
			</div>
		</section>
	) : (
		"Please add a header configuration for proper rendering."
	);
}

export default PageHeader;
