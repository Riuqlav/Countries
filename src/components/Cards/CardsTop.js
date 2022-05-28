import React from "react";
import "./cards-style.css";
import CardsAll from "./CardsAll";

const CardsTop = (props) => {
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
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAB5CAMAAACjkCtXAAAAFVBMVEX///8AI5XtKTl1e7fzfYTtFisADJAUEbSdAAAAeElEQVR4nO3OOQEAIAwEsOP1L7kOGMqaKEhG3135sM/si7a2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tvZTAaLOXCyoPt13AAAAAElFTkSuQmCC"
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default CardsTop;
