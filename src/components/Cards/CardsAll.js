import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import "./cards-style.css";

//I know I should make a "Cards" component to serve all the cards, but it is working fine without it.
//So I'll leave it as is for now maybe I come back on it end of the project.

const CardsAll = () => {
  const apiCountries = useContext(GlobalContext);

  return (
    <>
      {/* display one h1 tag with the sum of all the countries population */}

      <h1>
        The sum of all the countries population is:{" "}
        {apiCountries.reduce(
          (accumulator, currentValue) => accumulator + currentValue.population,
          0
        )}
      </h1>

      <div className="container ">
        <main role="main">
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                {/* ////////////////////////////////////implement single card /////////////////////////////////////////////////////////// */}
                {/* display one h1 tag with the sum of all the countries population */}

                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <p className="card-text">
                        {" "}
                        The population number of Brazil, <br />
                        is 17.5
                      </p>
                    </div>
                  </div>
                </div>
                {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default CardsAll;
