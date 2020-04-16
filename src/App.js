import React, { useState, createContext, useMemo } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./app.scss";
import UI from "./UI";
import Product from "./Product";

export const ProductContext = createContext();
function App() {
  const [productList, setProductList] = useState([]);
  const [product, setProduct] = useState([]);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [filter, setFilter] = useState(false);
  const [dd, setDD] = useState("");
  const [mm, setMM] = useState("");
  const [yy, setYY] = useState("");
  const [calendar, setCalendar] = useState(false);

  useMemo(async () => {
    try {
      const fetchData = await fetch(
        calendar
          ? `https://api.producthunt.com/v1/posts?day=${yy}-${mm}-${dd}`
          : `https://api.producthunt.com/v1/posts`,
        {
          headers: {
            Authorization: "Bearer hrymAI1xGzKtlgPDtbXldVm9NHf60wVHmiKxWUdozJo",
          },
        }
      );
      const response = await fetchData.json();
      const result = await response;
      setProductList(result.posts);
    } catch (err) {
      console.log(err);
    }
  }, [calendar,dd,mm,yy]);

  useMemo(async () => {
    try {
      const fetchData = await fetch(
        "https://api.producthunt.com/v1/comments?per_page=5",
        {
          headers: {
            Authorization: "Bearer hrymAI1xGzKtlgPDtbXldVm9NHf60wVHmiKxWUdozJo",
          },
        }
      );
      const response = await fetchData.json();
      const result = await response;
      setComments(result.comments);
    } catch (err) {
      console.log(err);
    }
  },[]);

  const handleFilter = (e) => {
    e.preventDefault();
    if (dd && mm && yy) {
      setCalendar(true);
    }
  };

  return (
    <HashRouter basename='/'>
      <Switch>
        <ProductContext.Provider
          value={{
            handleFilter,
            setCalendar,
            productList,
            setProduct,
            product,
            comments,
            likes,
            setLikes,
            filter,
            setFilter,
            dd,
            setDD,
            mm,
            setMM,
            yy,
            setYY,
          }}
        >
          <Route exact path="/" component={UI} />
          <Route exact path="/product" component={Product} />
        </ProductContext.Provider>
      </Switch>
    </HashRouter>
  );
}

export default App;
