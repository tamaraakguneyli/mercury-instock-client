import { useState, React } from "react";
import Select from "react-select";
import { useFormContext, Controller } from "react-hook-form";
import "./SelectBox.scss";
import variables from "./SelectBox.scss";

function SelectBox({ options, name, selectedOption }) {
  const methods = useFormContext();
  const [currentSelectedOption, setCurrentSelectedOption] =
    useState(selectedOption);

  const handleChange = (selected) => {
    setCurrentSelectedOption(selected);
  };

  return !name ? (
    <>
      <strong>SelectBox</strong>: Please provide a name prop for your select.
    </>
  ) : (
    <>
      <Controller
        name={name}
        control={methods.control}
        render={({ field: { onChange, value } }) => (
          <Select
            className="custom-select__container"
            classNamePrefix="custom-select"
            components={{
              IndicatorSeparator: () => null,
            }}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: `${
                  methods.formState.errors[name]?.type === "required" &&
                  !currentSelectedOption
                    ? variables.errorStateBorderColor
                    : variables.regularBorderColor
                } !important`,
              }),
            }}
            options={options}
            value={
              currentSelectedOption ||
              options.find((option) => option.value === currentSelectedOption)
            }
            onChange={(val) => {
              handleChange(val);
              onChange(val.value);
            }}
          />
        )}
        rules={{ required: true }}
      />
    </>
  );
}

export default SelectBox;
