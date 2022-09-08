import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import "./cartwidget.css";
import { NavLink } from "react-router-dom";

const CartWidget = ({numeroCarrito}) => {
  return (
    <div className="cart">
      <NavLink  to="/cart">
      <BsFillCartFill /></NavLink>
    </div>
  );
};

export default CartWidget;
