
import React, { useState } from "react";
import './../styles/App.css';
// import React { useState } from "react";

const App = () => {
  let [change, setChange] = useState("");
  function handleInput(e) {
    setChange(e.target.value)
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <p>Enter your name:</p>
      <input type="text" onChange={handleInput}></input>
      <p>{change}</p>
    </div>
  )
}

export default App
