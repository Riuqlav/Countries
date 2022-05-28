import { useState, useEffect } from "react";

const Api = () => {
  const [pllNumber, setPllNumber] = useState([]);
  //If only the low10Countries and top10Countries need to be updated I don't need to make countriesPopulation updated.
  //const [updatedCountries, setUpdatedCountries] = useState([]);

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
  const countriesPopulation = pllNumber.filter((x) => x.population > 0);

  return countriesPopulation;
};

export default Api;
