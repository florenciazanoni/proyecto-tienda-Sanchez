import React from "react";
import "./btncarrito.css";
import ItemCount from "../itemcount/ItemCount.jsx";
import { Link } from "react-router-dom";

const BtnCarrito = () => {
  const onAdd = (count)=>{
    console.log("onAdd", count)
}
  return (
    <div>
      <Link to="/cart"><button className="buttonStyle">Terminar compra</button></Link>
      <ItemCount initial={1} stock={100} onAdd={onAdd}></ItemCount>
    </div>
  );
};

export default BtnCarrito;
