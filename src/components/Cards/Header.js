import { Formik, Field, Form } from "formik";
import CardsAll from "./CardsAll";
import CardsTop from "./CardsTop";
import CardsLow from "./CardsLow";
import { GlobalContext } from "../../App";
import { useState, useContext } from "react";

//set up the sandwich of global context in here for the cards with apiCountries instead of app.js

const Header = () => {
  const apiCountries = useContext(GlobalContext);

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
            <Formik
              initialValues={{ country: "", population: "" }}
              onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                apiCountries.push(values);
                console.table(apiCountries);
              }}
            >
              <Form>
                <Field name="country" type="text" />
                <Field name="population" type="number" />
                <button type="submit">Submit</button>
              </Form>
            </Formik>

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
