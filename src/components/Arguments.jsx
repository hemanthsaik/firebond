import React, { useEffect, useState } from "react";

const Arguments = ({ argumentArray, setIsSelected, setArgumentResult }) => {
  const [selectedArg, setSelectedArg] = useState(argumentArray[0]);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const selectedArgObject = argumentArray.find(
      (arg) => arg.name === selectedValue
    );
    setSelectedArg(selectedArgObject);
  };
  useEffect(() => {
    setArgumentResult(() => selectedArg.isTrue);
  }, [selectedArg, argumentArray]);
  return (
    <div>
      <select value={selectedArg.name} onChange={handleChange}>
        {argumentArray.map(({ name, id }) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </select>
      <button onClick={() => setIsSelected("select")}>x</button>
    </div>
  );
};

export default Arguments;
