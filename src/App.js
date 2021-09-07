import React, {useState} from "react"
import Calculator from './Calculator';
import Motivation from "./Motivation";
import Mode from "./Mode";
function App() {
  const [equation,setEquation]=useState("")   // for calculator input field
  const [mode,setMode]=useState(true)       // for dark and light modes

  return (
    <div>
      <Mode mode={mode}
            setMode={setMode}/>
      <Calculator equation={equation}
                setEquation={setEquation}
                mode={mode}/>
      <Motivation mode={mode}/>
    </div>
  );
}

export default App;
