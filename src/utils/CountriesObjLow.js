import React, { useContext } from "react";
import { GlobalContext } from "../App";

//I know I should make a "Cards" component to serve all the cards, but it is working fine without it.
//So I'll leave it as is for now maybe I come back on it end of the project.

const CountriesObjLow = () => {
  // const apiCountries = useContext(GlobalContext);
  const { apiCountries, setApiCountries } = useContext(GlobalContext);

  //get the top 10 countries with the lowest population
  const low10Countries = apiCountries
    .sort((a, b) => a.population - b.population)
    .slice(0, 10);

  return low10Countries;
};

export default CountriesObjLow;
