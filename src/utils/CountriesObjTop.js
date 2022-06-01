import React, { useContext } from "react";
import { GlobalContext } from "../App";

const CountriesObjTop = () => {
  // const apiCountries = useContext(GlobalContext);
  const { apiCountries, setApiCountries } = useContext(GlobalContext);

  //get the top 10 countries with the highest population
  const top10Countries = apiCountries
    .sort((a, b) => b.population - a.population)
    .slice(0, 10)
    .reverse(); //reverse to get the top 10 in the same order as the low10Countries

  return top10Countries;
};

export default CountriesObjTop;
