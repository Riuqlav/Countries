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
            </a>
          </div>
        </div>
      </header>
      <section className="jumbotron text-center">
        <div className="container mt-4">
          <h1>Country : Population</h1>
          <p className="lead text-muted">
            This is a awesome application to display in order countries and
            population.
            <br /> You can even make it up your own country, if your country
            exists, you can even get a flag of it. <br />
            Try it out!
          </p>
          <p>
            {/* Ideally the form should be in utils folder but since the code is not that big I put it here. */}
            <Formik
              initialValues={{ country: "", population: "" }}
              onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                //unshift instead push to show on top the new country to the array apiCountries
                apiCountries.unshift(values);
                console.table(apiCountries);
              }}
            >
              <Form>
                <Field class="m-1" name="country" type="text" />
                <Field class="m-1" name="population" type="number" />

                <button
                  onClick={() => setActive("all")}
                  className="btn btn-primary my-2 m-1 "
                >
                  Add
                </button>
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
