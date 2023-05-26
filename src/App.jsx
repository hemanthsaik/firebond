import React, { useState, useEffect } from "react";
import "./App.css";
import ArgumentsArray from "./components/ArgumentsArray";
import FunctionBody from "./components/functionBody";

function App() {
  const [argumentArray, setArgumentArray] = useState([
    { id: 1, name: "My Arg", isTrue: false },
  ]);
  const [result, setResult] = useState();

  const handleArgumentArrayChange = (newArgumentArray) => {
    setArgumentArray(newArgumentArray);
  };

  return (
    <>
      <ArgumentsArray
        argumentArray={argumentArray}
        setArgumentArray={handleArgumentArrayChange}
      />
      <FunctionBody
        argumentArray={argumentArray}
        setArgumentArray={setArgumentArray}
        setResult={setResult}
      />
      <p>
        Result :
        {result !== undefined ? (result ? "true" : "false") : typeof result}
      </p>
    </>
  );
}

export default App;
