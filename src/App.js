import React from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Cardsheader from "./components/Cards/Cardsheader";

function App() {
  return (
    <div className="App">
      <Cardsheader />
      <Cards />
    </div>
  );
}

export default App;
