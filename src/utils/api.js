import React from "react";
import { useState, useEffect } from "react";

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

  const top10 = [...sortByPopulation].slice(0, 11);

  //slice the 10 lowest population countries

  const low10 = [...sortByPopulation].slice(-11);
};

export default Api;
