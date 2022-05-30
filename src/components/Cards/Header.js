import React, { useState, useContext } from "react";
import { GlobalContext } from "../../App";
import CardsAll from "./CardsAll";
import CardsTop from "./CardsTop";
import CardsLow from "./CardsLow";

const Header = () => {
  const [active, setActive] = useState("");
  const apiCountries = useContext(GlobalContext);

  return (
    <>
      <header>
        <div className="collapse bg-dark " id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">About</h4>
                <p className="text-muted">
                  kfjazlkfnalkzejfnlkazjenflkanzefklnazelkfnalzkejnfaklzejnflkazneflkazneflkajzneflkaznefklaznefklazneflkazjenf
                </p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">Contact</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" class="text-white">
                      Follow on Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Like on Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Email me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex align-items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                aria-hidden="true"
                class="mr-2"
                viewBox="0 0 24 24"
                focusable="false"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg> */}

              <img
                width="40"
                height="40"
                className="bd-img card-img-top"
                src="ABlogo.svg"
                alt="LOGO"
              />
              {/* <strong>Alsdfsdfsdsdfbum</strong> */}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>
      <section className="jumbotron text-center">
        <div className="container mt-4">
          <h1>Country : Population</h1>
          <p className="lead text-muted">
            This is a awesome application to display in order countries and
            population.
            <br /> You can even make it up your own country, you have to type in
            this format: <b>Country : Population</b> and a flag <b>URL</b>
          </p>
          <p>
            <input
              id="inputCountry"
              type="text"
              placeholder="ABkistan : 1000000"
              className="my-2 m-1"
            />
            <input
              id="inputFlag"
              type="text"
              placeholder="Paste a URL of a flag"
              className="my-2 m-1"
            />
            <br />
            <button
              onClick={() => setActive("all")}
              className="btn btn-primary my-2 m-1 "
            >
              Countries by Population
            </button>
            <button
              onClick={() => setActive("top")}
              className="btn btn-secondary my-2 m-1"
            >
              Biggest 10 Countries
            </button>
            <button
              onClick={() => setActive("low")}
              className="btn btn-secondary my-2 m-1"
            >
              Smallest 10 Countries
            </button>
          </p>
        </div>
      </section>
      <div>
        {active === "all" && <CardsAll />}
        {active === "top" && <CardsTop />}
        {active === "low" && <CardsLow />}
      </div>
    </>
  );
};

export default Header;
