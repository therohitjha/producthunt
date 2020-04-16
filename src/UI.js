import React, { Suspense, lazy, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ProductContext } from "./App";

const ProductList = lazy(() => import("./ProductList"));

function UI() {
  const {
    filter,
    dd,
    setDD,
    mm,
    setMM,
    yy,
    setYY,
    handleFilter,
    setCalendar,
  } = useContext(ProductContext);

  return (
    <>
      <Header />
      {filter && (
        <div className="filter">
          <h3>Filter By Date :-</h3>
          <form onSubmit={handleFilter}>
            <input
              value={dd}
              onChange={(e) => setDD(e.target.value)}
              autoFocus
              placeholder="Date"
            />
            <input
              value={mm}
              onChange={(e) => setMM(e.target.value)}
              placeholder="Month"
            />
            <input
              value={yy}
              onChange={(e) => setYY(e.target.value)}
              placeholder="Year"
            />
            <button className="submitBtn" type="submit">
              Filter
            </button>
            <button
              className="reset"
              onClick={() => {
                setDD("");
                setMM("");
                setYY("");
                setCalendar(false);
              }}
            >
              Reset
            </button>
          </form>
        </div>
      )}
      <div className="container">
        <Suspense fallback={<h1 className="loading">Loading...</h1>}>
          <ProductList />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

export default UI;
