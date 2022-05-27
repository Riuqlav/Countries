import { useState, useEffect, useContext } from "react";
import React from "react";

// const GlobalContext = React.createContext();

const Api = () => {
  const [pllNumber, setPllNumber] = useState([]);

  //useEffect to fetch data and make sure it only runs once with [] empty array
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setPllNumber(data);
      });
  }, []);

  //sorts all data by population
  const sortByPopulation = [...pllNumber].sort(
    (a, b) => a.population - b.population
  );

  //slice the 10 highest population countries
  const top10 = [...sortByPopulation].slice(-11);
  //slice the 10 lowest population countries
  const low10 = [...sortByPopulation].slice(0, 11);

  console.table(top10);
  console.table(low10);
};

// return <GlobalContext value={Api}></GlobalContext>
export default Api;
