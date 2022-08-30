import React from "react";
import "./item.css";

const Item = ({ data }) => {
  const { nombre, img, calificacion } = data;
  return (
    <div className="locales-indiv" key={data.name}>
      {" "}
      <img src={img} alt=""></img>
      <h5>{nombre}</h5>
      <p>{calificacion}★</p>
    </div>
  );
};

export default Item;
