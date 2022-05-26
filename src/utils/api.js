import React from "react";
//fetch all data from the API "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population.json"

const Api = () => {
  fetch(
    "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population.json"
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

  //sortByPopulation Array.sort() method sorts by population number.
};

export default Api;

// const sortByPopulation = [...Api].sort((a, b) => a.population - b.population);
// console.log(sortByPopulation);
