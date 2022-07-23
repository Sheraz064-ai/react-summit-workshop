import { useState } from "react";
import "./App.css";

function App() {
  const [additionCount, setAdditionCount] = useState(0);
  const [subtractionCount, setSubtractionCount] = useState(0);
  const [loading, setLoading] = useState(false);

  console.log("Component Rendering");

  // const handleOnClick = () => {
  //   setAdditionCount(additionCount + 1);
  //   setSubtractionCount(subtractionCount - 1);
  // };

  const handleOnClickAsync = async () => {
    setLoading(true);
    console.log("set loading");
    await fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
      setAdditionCount(additionCount + 1);
      setSubtractionCount(subtractionCount - 1);
      console.log("callback fetch");
    });
    // setLoading(false);
    // console.log("unset loading");
    setTimeout(() => {
      setLoading(false);
      console.log("unset loading");
    });
  };

  return (
    <div>
      <button
        style={{ width: "50%", height: "30%" }}
        onClick={() => {
          // handleOnClick();
          handleOnClickAsync();
        }}
      >
        Click Me!
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {" "}
          <div>Add Count: {additionCount}</div>﻿
          <div>Substraction Count: {subtractionCount}</div>
        </>
      )}
    </div>
  );
}

export default App;
