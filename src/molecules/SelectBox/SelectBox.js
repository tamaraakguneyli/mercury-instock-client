import React from "react";
import Select from "react-select";

function SelectBox({ options }) {
  return (
    <>
      <Select
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
