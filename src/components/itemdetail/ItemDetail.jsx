import { useEffect, useState } from "react";
import getFetch from "../../helper/helper.js";
import "./itemdetail.css";

const ItemDetail = () => {
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {nombre, img, descrip, precio} = data;
    useEffect(()=>{
        getFetch.then(response =>{
            setData(response.find(prod => prod.id === 1));
            setLoading(false);
        })
    },  [])
    console.log(data);

    return(
        <div className="contenedor">
        <h1>Mates</h1>
    {
        loading ?  <h2>Cargando...</h2>
        :
        <div className="mates-detalles">

                <img src={data.img} alt="" />
                <h2>{data.nombre}</h2>
                <h3>{data.precio}</h3>

            <div className="detalle">
                    <h4>{data.cant}</h4>
                    <p>{data.color}</p>
            </div>
                <p>{data.descrip}</p>

            </div>

    }
</div>
    )
    }
    export default ItemDetail;