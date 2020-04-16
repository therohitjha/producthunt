import React,{useContext} from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "./App";

function Header() {
  const { setFilter } = useContext(ProductContext);
  return (
    <div className="header">
      <NavLink exact to="/">
        <h5 className="logo"> Product Hunt </h5>
      </NavLink>
      <h4 onClick={() => setFilter((prevData) => !prevData)} className='filterBtn'>Filter</h4>
    </div>
  );
}

export default Header;
