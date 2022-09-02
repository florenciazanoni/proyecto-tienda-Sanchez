import React from "react";
import { useState, useEffect } from "react";
import getFetch from "../../helper/helper.js";
import Item from "../item/Item";
import "./itemlist.css";

const ItemList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch.then((data) => {
      console.log(data);
      setData(data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="contenedor">
      <p className="titulo">Elegí el mate que más te guste, ¡y esperalo en tu casa!</p>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="mates">
          {data.map((data) => (
            <Item key={data.name} data={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemList;
