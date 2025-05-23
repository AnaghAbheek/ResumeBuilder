import React from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <p className="moving-text">This is some moving text!</p>
      <Body />
    </div>
  );
}

export default App;
