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
		<section className="page-header">
			<div className="page-header__background">
				<div className="page-header__container">
					<div className="page-header__mobile">
						<div className="page-header__left">
							{config.backButton.show && (
								<ActionButton
									label=""
									path={config.backButton.path}
									type="back"
									className="page-header__tag page-header__tag--back"
								/>
							)}

							<h2 className="page-header__title">{title || "..."}</h2>
						</div>
						{config.editButton.show && (
							<div className="page-header__right">
								<ActionButton
									label=""
									path={config.editButton.path}
									type="edit"
									className="page-header__tag page-header__tag--edit"
								/>
							</div>
						)}
					</div>

					{config.searchBar || config.actionButton.show ? (
						<div className="page-header__wrapper">
							{config.searchBar && <SearchBar />}
							{config.actionButton.show && (
								<ActionButton
									label={config.actionButton.label}
									path={config.actionButton.path}
									type={config.actionButton.type}
									className="page-header__tag "
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
