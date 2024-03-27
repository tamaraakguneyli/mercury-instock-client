import React from "react";
import Select from "react-select";

function SelectBox({ options, name }) {
  return !name ? (
    <>
      <strong>SelectBox</strong>: Please provide a name prop for your select.
    </>
  ) : (
    <>
      <Select
        name={name}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: "20px",
          }),
        }}
        options={options}
      />
    </>
  );
}

export default SelectBox;
