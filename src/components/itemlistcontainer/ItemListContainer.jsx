import React from "react";
import "./itemlistcontainer.css";
import ItemList from "../itemlist/ItemList";

const ItemListContainer = () => {
  return (
    <div className="contenedor-prov">
      <p><ItemList/></p>
    </div>
  );
};

export default ItemListContainer;
