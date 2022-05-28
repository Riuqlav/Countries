import { useState } from "react";
// useState when I need to change the state of a component in this I don't need yet, save for the input
import Api from "./Api";

const Countries = () => {
  //get the top 10 countries with the lowest population
  const low10Countries = Api()
    .sort((a, b) => a.population - b.population)
    .slice(0, 10);

  //get the top 10 countries with the highest population
  const top10Countries = Api()
    .sort((a, b) => b.population - a.population)
    .slice(0, 10)
    .reverse(); //reverse to get the top 10 in the same order as the low10Countries

  return top10Countries, low10Countries;
};

export default Countries;
