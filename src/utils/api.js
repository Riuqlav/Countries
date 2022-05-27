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
  // I found that removing the ones with 0 ppl with filter(), then sort() before slice() was the best option
  const countriesWithPopulation = pllNumber.filter((x) => x.population > 0);

  const low10Countries = countriesWithPopulation
    .sort((a, b) => a.population - b.population)
    .slice(0, 10);

  const top10Countries = countriesWithPopulation
    .sort((a, b) => b.population - a.population)
    .slice(0, 10)
    .reverse(); //reverse to get the top 10 in the same order as the low10Countries

  console.table(top10Countries);
  console.table(low10Countries);
};

export default Api;
