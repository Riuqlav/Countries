import React from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import CardsHeader from "./components/Cards/CardsHeader";

function App() {
  return (
    <div className="App">
      <CardsHeader />
      <Cards />
    </div>
  );
}

export default App;
