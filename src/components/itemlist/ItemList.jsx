import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getFetch from "../../helper/helper.js";
import { Item } from "../index.js";
import "./itemlist.css";

const ItemList = () => {
  const { categoria } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch.then((data) => {
      if (!categoria) {
        setData(data);
      } else {
        const nuevaLista = data.filter(
          (mates) => categoria === mates.categoria
        );

        setData(nuevaLista);
      }
      setLoading(false);
    });
  }, [categoria]);
  return (
    <div className="contenedor">
      <p className="titulo">
        Elegí el mate que más te guste,{" "}
      </p>
        <p className="underline"> ¡y esperalo en tu casa!</p>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="mates">
          {data.map((data) => (
            <Item data={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemList;
