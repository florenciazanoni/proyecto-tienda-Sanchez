import React from "react";
import "./item.css";
import { NavLink } from "react-router-dom";

const Item = ({ item }) => {
  const { nombre, img, precio } = item;
  return (
   
    <NavLink to={`/item/${item.id}`} className="mates-indiv" key={item.name}>
      {" "}
      <img src={img} alt="" className="imagen-mate"></img>
      <h5>{nombre}<br></br>${precio}</h5>

    </NavLink>
  );
};

export default Item;
