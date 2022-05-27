import "./App.css";
import Cards from "./components/Cards/Cards";
import CardsHeader from "./components/Cards/CardsHeader";
import Api from "./utils/Api";
//import { GlobalContext } from "./utils/Api";

function App() {
  return (
    <>
      {/* globalContext sandwich the app to pass down state of Api to all components  */}
      {/* <GlobalContext.Provider value={Api}> */}
      <Api />
      <div className="App">
        <CardsHeader />
        <Cards />
      </div>
      {/* </GlobalContext.Provider> */}
    </>
  );
}

export default App;
