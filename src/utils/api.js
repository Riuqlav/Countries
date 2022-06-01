import { useState, useEffect } from "react";

const Api = () => {
  const [apiCountries, setApiCountries] = useState([]);
  //useEffect to fetch data and make sure it only runs once with [] empty array
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setApiCountries(data.filter((x) => x.population > 0));
      });
  }, []);
  // I found that removing the ones with 0 ppl with filter(), then sort() before slice() later was the best option

  return { apiCountries, setApiCountries };
};

export default Api;
