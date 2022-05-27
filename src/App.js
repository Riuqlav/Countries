import "./App.css";
import Cards from "./components/Cards/Cards";
import CardsHeader from "./components/Cards/CardsHeader";
import Api from "./utils/Api";

function App() {
  return (
    <>
      {/* globalContext sandwich the app to pass down state of Api to all components */}
      {/* <globalContext.Provider value={Api}> */}
      <Api />
      <div className="App">
        <CardsHeader />
        <Cards />
      </div>
      {/* </globalContext.Provider> */}
    </>
  );
}

export default App;
