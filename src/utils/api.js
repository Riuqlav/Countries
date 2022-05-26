import React from "react";

const api = () => {
  //fetch country and population from "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population.json" divided into two parts

  const fetchCountryName = async () => {
    const countryNameData = await fetch(
      "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-name.json"
    );
    const countryNameJson = await countryNameData.json();
    return countryNameJson;
  };

  const fetchCountryPopulation = async () => {
    const populationData = await fetch(
      "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population.json"
    );
    const populationJson = await populationData.json();
    return populationJson;
  };

  // bring back 2 const one with 10 hightest population and one with 10 lowest population
  const getTopTenPopulation = async () => {
    const populationJson = await fetchCountryPopulation();
    const populationJsonSorted = populationJson.sort((a, b) =>
      a.population > b.population ? -1 : 1
    );
    const topTenPopulation = populationJsonSorted.slice(0, 10);
    return topTenPopulation;
  };
  const getBottomTenPopulation = async () => {
    const populationJson = await fetchCountryPopulation();
    const populationJsonSorted = populationJson.sort((a, b) =>
      a.population > b.population ? 1 : -1
    );
    const bottomTenPopulation = populationJsonSorted.slice(0, 10);
    return bottomTenPopulation;
  };
};
console.log(bottomTenPopulation);

export default api;
