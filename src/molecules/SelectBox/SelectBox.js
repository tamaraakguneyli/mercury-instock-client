import React from "react";
import Select from "react-select";

function SelectBox({ options, name, selectedOption }) {
  console.log(selectedOption);
  return !name ? (
    <>
      <strong>SelectBox</strong>: Please provide a name prop for your select.
    </>
  ) : (
    <>
      <Select
        name={name}
        defaultValue={selectedOption}
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
