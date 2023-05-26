import React, { useEffect, useState } from "react";
import Arguments from "./Arguments";
import Constant from "./Constant";
import SelectOptions from "./SelectOptions";
import AndOROperation from "./AndOperation";

const FunctionBody = ({ argumentArray, setResult }) => {
  const [isSelected, setIsSelected] = useState("select");
  const [conastantResult, setConastantResult] = useState(undefined);
  const [argumentResult, setArgumentResult] = useState(undefined);
  const [andtResult, setAndResult] = useState(undefined);

  useEffect(() => {
    switch (isSelected) {
      case "select":
        setResult(() => undefined);
        break;
      case "constant":
        setResult(() => conastantResult);
        break;
      case "argument":
        setResult(() => argumentResult);
        break;
      case "and":
        setResult(() => andtResult);
        break;
      case "or":
        setResult(() => andtResult);
        break;

      default:
        break;
    }
  }, [isSelected, conastantResult, argumentResult, andtResult]);

  return (
    <div>
      {isSelected === "select" && (
        <SelectOptions setIsSelected={setIsSelected} />
      )}
      {isSelected === "constant" && (
        <Constant
          setConastantResult={setConastantResult}
          setIsSelected={setIsSelected}
        />
      )}
      {isSelected === "argument" && (
        <Arguments
          argumentArray={argumentArray}
          setIsSelected={setIsSelected}
          argumentResult={argumentResult}
          setArgumentResult={setArgumentResult}
        />
      )}
      {isSelected === "and" && (
        <AndOROperation
          setIsSelected={setIsSelected}
          argumentArray={argumentArray}
          isSelected={isSelected}
          setAndResult={setAndResult}
          andtResult={andtResult}
        />
      )}
      {isSelected === "or" && (
        <AndOROperation
          setIsSelected={setIsSelected}
          argumentArray={argumentArray}
          isSelected={isSelected}
          setAndResult={setAndResult}
          andResult={andtResult}
        />
      )}
    </div>
  );
};

export default FunctionBody;
