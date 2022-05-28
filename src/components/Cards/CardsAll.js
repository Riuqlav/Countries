import React from "react";
import "./cards-style.css";

//I know I should make a "Cards" component to serve all the cards, but it is working fine without it.
//So I'll leave it as is for now maybe I come back on it end of the project.

const CardsAll = (props) => {
  return (
    <div className="container ">
      <main role="main">
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {/* ////////////////////////////////////implement single card/////////////////////////////////////////////////////////// */}
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img
                    className="bd-img card-img-top"
                    width="100%"
                    height="225"
                    src="https://media.istockphoto.com/vectors/vector-flag-of-brazil-proportion-710-brazilian-national-flag-vector-id967321044?s=612x612"
                    alt="never gonna give you up"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      {" "}
                      The population number of Brazil, <br />
                      is 17.5
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
              {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img
                    className="bd-img card-img-top"
                    width="100%"
                    height="225"
                    src="https://media.istockphoto.com/vectors/vector-flag-of-brazil-proportion-710-brazilian-national-flag-vector-id967321044?s=612x612"
                    alt="never gonna give you up"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      The population number of Brazil, <br />
                      is 17.5
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
              {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img
                    className="bd-img card-img-top"
                    width="100%"
                    height="225"
                    src="https://media.istockphoto.com/vectors/vector-flag-of-brazil-proportion-710-brazilian-national-flag-vector-id967321044?s=612x612"
                    alt="never gonna give you up"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      The population number of Brazil, <br />
                      is 17.5
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CardsAll;
