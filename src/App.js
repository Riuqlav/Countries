import "./App.css";
import Api from "./utils/Api";
import React from "react";
import Header from "./components/Cards/Header";
import Footer from "./components/Cards/Footer";

export const GlobalContext = React.createContext();
//set up the sandwich of global context in here

function App() {
  return (
    <GlobalContext.Provider value={Api()}>
      <div className="App">
        <Header />
        <Footer />
      </div>
    </GlobalContext.Provider>
  );
}
export default App;
