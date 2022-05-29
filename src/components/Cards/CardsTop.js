import React from "react";
import "./cards-style.css";
import Api from "../../utils/Api";

const CardsTop = (props) => {
  return (
    <>
      <h1>Top Countries : 345345345345345</h1>
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
export default CardsTop;
