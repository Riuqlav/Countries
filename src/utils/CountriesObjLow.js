// useState when I need to change the state of a component in this I don't need yet, save for the input
import Api from "./Api";

const CountriesObjLow = () => {
  //get the top 10 countries with the lowest population
  const low10Countries = Api()
    .sort((a, b) => a.population - b.population)
    .slice(0, 10);

  return low10Countries;
};

export default CountriesObjLow;
