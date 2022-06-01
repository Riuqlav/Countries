import React from "react";
import CountriesObjTop from "../../utils/CountriesObjTop";
import "./cards-style.css";

const CardsTop = () => {
  const apiCountries = CountriesObjTop();

  return (
    <>
      <h1>
        {" "}
        The sum the of population of the Top 10 Countries is:{" "}
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
                {/* //////////////////////////////////////////////////////////////////////////////////////// */}
                {/* display one Card containing each country's name and population in the array */}

                {apiCountries.map((countries) => (
                  <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                      <div className="card-body">
                        {/* Fetch from https://countryflagsapi.com/png/ a flag img of each country */}

                        <img
                          className="bd-placeholder-img card-img-top"
                          width="100%"
                          height="200"
                          src={`https://countryflagsapi.com/PNG/${countries.country}`}
                          /* place holder inside of alt I know it did not supposed to have flags since some names are not correct
                          and/or are not in the flag API but I think they look better with flags*/

                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://emojipedia-us.s3.amazonaws.com/social/emoji/person-shrugging.png";
                          }}
                        />
                        <br />
                        <br />

                        <p className="card-text">
                          {countries.country} : {countries.population}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default CardsTop;
