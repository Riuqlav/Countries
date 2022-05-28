import React from "react";
import "./cards-style.css";

const CardsLow = (props) => {
  return (
    <div className="container ">
      <main role="main">
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {/* ////////////////////////////////////implement single card /////////////////////////////////////////////////////////// */}
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img
                    className="bd-img card-img-top"
                    width="100%"
                    height="225"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAB5CAMAAACjkCtXAAAAGFBMVEX////VKx4AOaZ6fb8AMaQAOahsNYrfKgDVyLDSAAAAe0lEQVR4nO3OgQmEAAwAsfrqu//GTuFBIZkgMwAAAAAAAAAfO1eaa6X5raRd0i5pl7RL2iXtknZJu6Rd0i5pl7RL2iXtknZJu6Rd0i7NvdL8V5pnpTlW0i5pl7RL2iXtknZJu6Rd0i5pl7RL2iXtknZJu6Rd0i5pl7RLL6djYh2fM9n8AAAAAElFTkSuQmCC"
                    alt="never gonna give you up"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      {" "}
                      The population number of Brazil, <br />
                      is 17.5
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="container mt-2">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary "
                        >
                          View Population
                        </button>
                      </div>
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

export default CardsLow;
