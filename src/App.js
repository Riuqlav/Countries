import React from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import CardsHeader from "./components/Cards/CardsHeader";
// import Api from "./utils/Api";

function App() {
  return (
    <div className="App">
      {/* <Api /> */}
      <CardsHeader />
      <Cards />
    </div>
  );
}

export default App;
