import React from "react";
import { Item } from "../index.js";
import "./itemlist.css";


const ItemList = ({data}) => {
  return(
  
    data.map(producto=>(
        <Item key={producto.id} item={producto}/>
    ))

  )
}

export default ItemList;
