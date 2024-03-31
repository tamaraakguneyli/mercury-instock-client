import React from "react";
import { Hourglass } from "react-loader-spinner";
import PageHeader from "../PageHeader/PageHeader";
import "./Loader.scss";
import variables from "./Loader.scss";

function Loader() {
  const headerConfig = {
    backButton: {
      show: false,
    },
    searchBar: false,
    actionButton: {
      show: false,
    },
    editButton: {
      show: false,
    },
  };

  return (
    <>
      <PageHeader title="Loading..." config={headerConfig} />
      <main className="page">
        <article className="page__content">
          <div className="custom-loader">
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              colors={[variables.hourGlassColor1, variables.hourGlassColor2]}
            />
          </div>
        </article>
      </main>
    </>
  );
}

export default Loader;
