import React, { useContext } from "react";
import { GlobalContext } from "../App";

//I know I should make a "Cards" component to serve all the cards, but the project asked to store an obj, but it is working fine without it.
//So I'll leave it as is for now maybe I come back on it end of the project.

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
