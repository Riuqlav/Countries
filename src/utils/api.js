import React from "react";
import { useState } from "react";

//fetch all data from the API "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population.json"

const Api = () => {
  const [pllNumber, setPllNumber] = useState([]);

  fetch(
    "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population.json"
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      pllNumber(json);
    });

  const sortByPopulation = [...setPllNumber].sort(
    (a, b) => a.population - b.population
  );
  console.log(sortByPopulation);
};

export default Api;

///I did not find out how to  sort the data by population in the API.
