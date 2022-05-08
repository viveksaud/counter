import React from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";


function App() {
  //console.log("render App Component")
  return (
    <>
    <p>Class counter</p>
    <Counter initialCount={0} />
    <p>Counter Hook</p>
    <CounterHooks initialCount={0} />
    </>
    );
}

export default App;

