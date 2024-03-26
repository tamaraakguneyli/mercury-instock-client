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
      label: string,
      type: string,
      show: boolean,
      path: string
    }
  }
*/

function PageHeader({ title, config }) {
	return title && config ? (
		<section className="label">
			<div className="label__background">
				<div className="label__container">
					<div className="label__left">
						{config.backButton.show && (
							<ActionButton
								label=""
								path={config.backButton.path}
								type="back"
							/>
						)}
						<h2 className="label__title">{title || "..."}</h2>
					</div>
					{config.searchBar || config.actionButton.show ? (
						<div className="label__wrapper">
							{config.searchBar && <SearchBar />}
							{config.actionButton.show && (
								<ActionButton
									label={config.actionButton.label}
									path={config.actionButton.path}
									type={config.actionButton.type}
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
