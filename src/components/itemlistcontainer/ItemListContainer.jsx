import React from "react";
import "./itemlistcontainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../index.js";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebase";

const ItemListContainer = () => {
  const { categoria } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let queryRef = ""
          if(!categoria){
            queryRef = query(collection(db, "items"));
          }else{
            queryRef = query(collection(db, "items"), where("categoria", "==", categoria));
          } 
        const response = await getDocs(queryRef);
        const datos = response.docs.map(doc => {
          const newDoc = {
            ...doc.data(),
            id: doc.id,
          };
          return newDoc;
        });
        setData(datos);
      } catch (error) {
      }
    };
    getData();

  }, [categoria]);
  return (
    <div className="contenedor">
      <p className="titulo">Elegí el mate que más te guste, </p>
      <p className="underline"> ¡y esperalo en tu casa!</p>

      <div className="mates">
        <ItemList data={data} />
      </div>
    </div>
  );
};
export default ItemListContainer;
