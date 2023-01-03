import React, {Component, useState} from "react";
import '../styles/App.css';
import Description from "./Description";
import Name from "./Name";

const App = () => {
  return (
    <div id="main">
      <Name />
      <Description />
    </div>
  )
}


export default App;
