import "./App.css";
import Cards from "./components/Cards/Cards";
import CardsHeader from "./components/Cards/CardsHeader";
import Api from "./utils/Api";
import React from "react";

export const GlobalContext = React.createContext();

function App() {
  return (
    <GlobalContext.Provider value={Api()}>
      <div className="App">
        <CardsHeader />
        <Cards />
      </div>
    </GlobalContext.Provider>
  );
}
export default App;
