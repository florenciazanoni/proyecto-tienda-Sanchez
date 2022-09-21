import React, { useEffect, useState } from 'react';
import {collection, getDocs, doc, getDoc,query, where,limit} from "firebase/firestore";
import {db} from "../../utils/firebase";

export const PaginaFirebase = () => {

    const [arregloProductos, setArregloProductos] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const query = (collection(db,"items"));
            const response = await getDocs(query);
            const docs = response.docs;
            const data = docs.map(doc=>{return {...doc.data(), id:doc.id} })
            console.log(data)
            setArregloProductos(data);
        }
        getData();
    }, [])

  return (
    <div>PaginaFirebase</div>
  )
}
