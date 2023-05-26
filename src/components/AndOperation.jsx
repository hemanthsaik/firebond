import React, { useEffect, useState } from "react";
import SelectOptions from "./SelectOptions";
import FunctionBody from "./functionBody";

const AndOROperation = ({
  setIsSelected,
  argumentArray,
  isSelected,
  setAndResult,
}) => {
  const [resultOne, setResultOne] = useState();
  const [resultTwo, setResultTwo] = useState(undefined);

  useEffect(() => {
    if (isSelected === "and") {
      setAndResult(() => resultOne && resultTwo);
    } else if (isSelected === "or") {
      setAndResult(() => resultOne || resultTwo);
    }
  }, [resultOne, resultTwo, isSelected]);

  return (
    <div>
      <SelectOptions setIsSelected={setIsSelected} isSelected={isSelected} />
      <div>
        <FunctionBody argumentArray={argumentArray} setResult={setResultOne} />
        <FunctionBody argumentArray={argumentArray} setResult={setResultTwo} />
      </div>
      <button>+ add op</button>
    </div>
  );
};
export default AndOROperation;
