import React from "react";
import "./btncarrito.css";
import ItemCount from "../itemcount/ItemCount.jsx";

const BtnCarrito = () => {
  const onAdd = (count)=>{
    console.log("onAdd", count)
}
  return (
    <div>
      <button className="buttonStyle">Comprar</button>
      <ItemCount initial={1} stock={100} onAdd={onAdd}></ItemCount>
    </div>
  );
};

export default BtnCarrito;
