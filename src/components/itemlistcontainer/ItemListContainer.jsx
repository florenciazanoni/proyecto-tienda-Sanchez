import React from "react";
import "./itemlistcontainer.css";
import {ItemList} from "../index.js";

const ItemListContainer = () => {
  return (
    <span className="contenedor-prov">
      <p><ItemList/></p>
    </span>
  );
};

export default ItemListContainer;
