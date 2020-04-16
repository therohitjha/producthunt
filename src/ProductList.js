import React, { useContext } from "react";
import { ProductContext } from "./App";
import { NavLink } from "react-router-dom";
function ProductList() {
  const { productList, setProduct } = useContext(ProductContext);
  
  return (
    <>
      {productList ?
        productList.map((item) => (
          <NavLink to="/product" key={item.thumbnail.id}>
            <img
              src={item.thumbnail.image_url}
              alt=""
              onClick={() => setProduct([item])}
            />
          </NavLink>
        )):"Something Went Wrong..."}
    </>
  );
}

export default ProductList;
