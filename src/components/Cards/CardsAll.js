import React from "react";
import "./cards-style.css";
import Api from "../../utils/Api";

//I know I should make a "Cards" component to serve all the cards, but it is working fine without it.
//So I'll leave it as is for now maybe I come back on it end of the project.

const CardsAll = () => {
  return (
    <>
      <h1>
        All Countries :{" "}
        {Api().reduce(() => (
          <h1> {Api().population} </h1>
        ))}{" "}
      </h1>
      {/* make it dynamic */}

      <div className="container ">
        <main role="main">
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                {/* ////////////////////////////////////implement single card /////////////////////////////////////////////////////////// */}
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
