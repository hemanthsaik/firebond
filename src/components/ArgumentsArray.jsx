import React, { useState } from "react";

const ArgumentsArray = ({ argumentArray, setArgumentArray }) => {
  const handleChange = (event, index) => {
    const updatedArray = [...argumentArray];
    updatedArray[index].isTrue = event.target.value === "true";
    setArgumentArray(updatedArray);
  };

  const handleNameChange = (event, index) => {
    const updatedArray = [...argumentArray];
    updatedArray[index].name = event.target.value;
    setArgumentArray(updatedArray);
  };

  const addArgument = () => {
    const newArgument = { id: Date.now(), name: "New Arg", isTrue: false };
    setArgumentArray([...argumentArray, newArgument]);
  };

  return (
    <div>
      {argumentArray.map((arg, index) => (
        <div key={arg.id}>
          <input
            type="text"
            value={arg.name}
            onChange={(e) => handleNameChange(e, index)}
          />
          <select
            value={arg.isTrue ? "true" : "false"}
            onChange={(e) => handleChange(e, index)}
          >
            <option value="false">false</option>
            <option value="true">true</option>
          </select>
        </div>
      ))}
      <button onClick={addArgument}>+ add arg</button>
    </div>
  );
};

export default ArgumentsArray;
