import React from "react";
const Api = () => {
  //fetch population number from the link "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population.json" and return an array with 10 countries with the highest population number.

  const fetchHighPopulation = async () => {
    const responseTop10 = await fetch(
      "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population.json"
    );
    const data = await responseTop10.json();
    const population = data.slice(0, 10);
    return population;
  };

  //fetch population number from the link "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population.json" and return an array with 10 countries with the lowest population number.

  const fetchLowPopulation = async () => {
    const responseBottom10 = await fetch(
      "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population.json"
    );
    const data = await responseBottom10.json();
    const population = data.slice(-10);
    return population;
  };
};

export default Api;
