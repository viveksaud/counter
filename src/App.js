import React,{useState} from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext();
function App() {
  //console.log("render App Component")
  const [theme,setTheme]= useState("Red");
  
  return (
    <ThemeContext.Provider value={{backgroundColor: theme}}>
    <p>Class counter</p>
    <Counter initialCount={0} />
    <p>Counter Hook</p>
    <CounterHooks initialCount={0} />
    
    <br />
    <button onClick={() => setTheme( prevTheme => prevTheme==="red"? prevTheme="green":prevTheme="red" )}>Toggle Theme</button>
    </ThemeContext.Provider>
    );
}

export default App;

