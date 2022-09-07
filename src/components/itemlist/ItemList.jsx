import React from "react";
import { useState, useEffect } from "react";
import getFetch from "../../helper/helper.js";
import Item from "../item/Item";
import "./itemlist.css";
import { Link, useParams } from "react-router-dom";

const ItemList = () => {
  const { categoria } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch.then((data) => {
      if (!categoria) {

        setData(data);
      } else {
        const nuevaLista = data.filter((mates) => categoria === mates.categoria);

        setData(nuevaLista);

      }
      setLoading(false);
    });
  }, [categoria]);
  return (
    <div className="contenedor">
      <p className="titulo">
        Elegí el mate que más te guste, ¡y esperalo en tu casa!
      </p>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="mates">
          {data.map(
            (data) => (

              (
               // <Link key={data.id} to={`/item/${data.id}`}>
                  <Item data={data} />
              //  </Link>
              )
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ItemList;
