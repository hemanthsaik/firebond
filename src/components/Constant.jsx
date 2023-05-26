import React, { useEffect, useState } from "react";

const Constant = ({ setIsSelected, setConastantResult }) => {
  const [constantValue, setConstantValue] = useState(false);
  const handleConstantValueChange = () => {
    setConstantValue((value) => !value);
  };
  useEffect(() => {
    setConastantResult(constantValue);
  }, [constantValue]);

  return (
    <div>
      <select
        value={constantValue ? "true" : "false"}
        onChange={handleConstantValueChange}
      >
        <option value="false">false</option>
        <option value="true">true</option>
      </select>
      <button onClick={() => setIsSelected("select")}>x</button>
    </div>
  );
};

export default Constant;
