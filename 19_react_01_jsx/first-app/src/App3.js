import "./App.css";
import React from "react";
import grass from "./grass.png";

function App() {
  return (
    <div className="App">
      <div className="whiteeye"></div>
      <div className="blackeye"></div>
      <div className="ball1" id="circle"></div>
      <div className="ball2" id="circle"></div>
      <div className="ball3" id="circle"></div>
      <div className="ball4" id="circle"></div>
      <div className="ball5" id="circle"></div>
      <img src={grass} className="grass" alt="grass" />
    </div>
  );
}

export default App;
