import React from "react";
import "./item.css";
import { NavLink } from "react-router-dom";

const Item = ({ data }) => {
  const { nombre, img, precio } = data;
  return (
    <NavLink to={`/item/${data.id}`} className="mates-indiv" key={data.name}>
      {" "}
      <img src={img} alt=""></img>
      <h5>{nombre}<br></br>${precio}</h5>

    </NavLink>
  );
};

export default Item;
