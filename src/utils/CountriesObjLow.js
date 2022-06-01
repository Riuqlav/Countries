import React, { useContext } from "react";
import { GlobalContext } from "../App";

const CountriesObjLow = () => {
  const { apiCountries, setApiCountries } = useContext(GlobalContext);

  //get the top 10 countries with the lowest population
  const low10Countries = apiCountries
    .sort((a, b) => a.population - b.population)
    .slice(0, 10);

  return low10Countries;
};

export default CountriesObjLow;
