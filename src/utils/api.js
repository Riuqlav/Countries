import React from "react";
import { useState, useEffect } from "react";

//fetch all data from the API "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population.json"

const Api = () => {
  const [pllNumber, setPllNumber] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setPllNumber(data);
      });
  }, []);

  const sortByPopulation = [...pllNumber].sort(
    (a, b) => a.population - b.population
  );
};

export default Api;

///I did not find out how to  sort the data by population in the API.
