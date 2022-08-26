import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import "./cartwidget.css";

const CartWidget = ({numeroCarrito}) => {
  return (
    <div className="cart">
      <BsFillCartFill />
    </div>
  );
};

export default CartWidget;
