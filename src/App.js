import React from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import CardsHeader from "./components/Cards/CardsHeader";
import Api from "./utils/Api";

function App() {
  return (
    <>
      <globalContext.Provider value={Api}>
        <div className="App">
          <CardsHeader />
          <Cards />
        </div>
      </globalContext.Provider>
    </>
  );
}

export const globalContext = React.createContext();

export default App;
