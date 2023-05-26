import React from "react";

const SelectOptions = ({ setIsSelected, isSelected }) => {
  const handleSelectDropdownChange = (event) => {
    setIsSelected(event.target.value);
  };

  return (
    <div>
      <select value={isSelected} onChange={handleSelectDropdownChange}>
        <option value="select">Select</option>
        <option value="constant">Constant</option>
        <option value="argument">Argument</option>
        <option value="and">and</option>
        <option value="or">or</option>
      </select>
      <button onClick={() => setIsSelected("select")}>x</button>
    </div>
  );
};

export default SelectOptions;
