import React from "react";
import logo from "../assets/logo2.png";
import cart from "../assets/cart1.png";
import "../components/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  // console.log(props.cartCount);
  return (
    <div className="navbar fixed-top bg-light">
      <div className="left">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div>
        <input
          type="text"
          value={props.searchProduct}
          name="searchProduct"
          onChange={props.searchHandleChange}
          placeholder="search for product"
          className="border-0 search"
        />
        <button type="button" onClick={props.getProductCategory} className="search-button">Search</button>
      </div>
      <div className="right mx-3">
        <Link to="/" className=" content" onClick={props.fetchData}>
          Shop
        </Link>
        <Link to="/cart" className=" mx-2">
          <img src={cart} alt="cart" onClick={props.fetchCartData} />
        </Link>
        <span className="count">{props.cartCount}</span>
      </div>
    </div>
  );
}
