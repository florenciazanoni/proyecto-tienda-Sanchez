import React from "react";
import "./item.css";

const Item = ({ data }) => {
  const { nombre, img, descrip } = data;
  return (
    <div className="mates-indiv" key={data.name}>
      {" "}
      <img src={img} alt=""></img>
      <h5>{nombre}</h5>
      <p>{descrip}</p>
    </div>
  );
};

export default Item;
