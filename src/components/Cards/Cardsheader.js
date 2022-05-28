import React from "react";
import { useContext } from "react";
import App, { GlobalContext } from "../../App";

const CardsHeader = () => {
  const Api = useContext(GlobalContext);
  //test works bringing all countries that don't have 0 population globally
  console.table(Api);

  return (
    <>
      <header>
        <h1> </h1>
        <div className="collapse bg-dark" id="navbarHeader">
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
              <svg
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
              </svg>
              <strong>Album</strong>
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
    </>
  );
};

export default CardsHeader;
