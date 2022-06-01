import CardsAll from "./CardsAll";
import CardsTop from "./CardsTop";
import CardsLow from "./CardsLow";
import { GlobalContext } from "../../App";
import { useState, useContext } from "react";
import { Formik, Field, Form } from "formik";

const Header = () => {
  // GlobalContext coming from App.js, with the array from the API
  const { apiCountries, setApiCountries } = useContext(GlobalContext);
  // Activate cards conditionally (this would've been better with pages)
  const [active, setActive] = useState("");

  return (
    <>
      <header>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <img
                width="40"
                height="40"
                className="bd-img card-img-top"
                src="ABlogo.svg"
                alt="LOGO"
              />
            </a>
          </div>
        </div>
      </header>
      <section className="jumbotron text-center">
        <div className="container mt-4">
          <h1>Country : Population : Flag</h1>
          <p className="lead text-muted">
            This is a awesome application to display Countries and Population
            (sometimes a flag).
            <br /> You can type a country or invent your own, and it will be
            added in order to the list! <br /> <strong>Bonus</strong>: If your
            country exists, you can even get the flag of it.
            <br />
            Try it out!
          </p>
          <p>
            {/* Ideally the form should be in utils folder but since the file is not that big I put it here. */}
            <Formik
              initialValues={{ country: "", population: "" }}
              onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                setApiCountries(
                  [values, ...apiCountries].sort(
                    (a, b) => b.population - a.population
                  )
                );
                setActive("all");
              }}
            >
              <Form>
                <Field
                  placeholder="Country"
                  class="m-1"
                  name="country"
                  type="text"
                />
                <Field
                  placeholder="Population"
                  class="m-1 "
                  name="population"
                  type="number"
                />

                <button
                  className="btn btn-sm btn-primary mb-1 ml-0"
                  type="submit"
                >
                  Add
                </button>
              </Form>
            </Formik>

            <br />

            {/* //display the cards conditionally */}
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
      {/* //display the cards conditionally */}

      <div>
        {active === "all" && <CardsAll />}
        {active === "top" && <CardsTop />}
        {active === "low" && <CardsLow />}
      </div>
    </>
  );
};

export default Header;
