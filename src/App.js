import "./App.css";
import Api from "./utils/Api";
import React from "react";
import Header from "./components/Cards/Header";
// import CardsAll from "./components/Cards/CardsAll";
import Footer from "./components/Cards/Footer";

export const GlobalContext = React.createContext();

function App() {
  return (
    <GlobalContext.Provider value={Api}>
      <div className="App">
        <Header />
        {/* <CardsAll /> */}
        <Footer />
      </div>
    </GlobalContext.Provider>
  );
}
export default App;
