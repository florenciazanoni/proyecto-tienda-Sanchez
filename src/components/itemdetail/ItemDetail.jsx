import { useEffect, useState } from "react";
import getFetch from "../../helper/helper.js";
import { useParams } from "react-router-dom";
import DropDown from "../dropdown/DropDown.jsx";
import BtnCarrito from "../btncarrito/BtnCarrito.jsx";
/*  import DropDown from "./components/dropdown/DropDown.jsx"; */
/*  import  BtnCarrito from "./components/BtnCarrito"; */
import "./itemdetail.css";

const ItemDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { nombre, img, descrip, precio } = data;

  useEffect(() => {
    getFetch.then((response) => {
      setData(response.find((prod) => prod.id === parseInt(id)));
      setLoading(false);
    });
  }, [id]);

  return (
    <div className="contenedor">
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <div className="mates-detalles">
          <div className="contenedor">
            <img src={data.img} alt="" />
          </div>
          <div className="contenedor-detalles">
            <h2>{data.nombre}</h2>
            <div className="detalle">
              <h3>${data.precio}</h3>
              <h4>Cantidad disponible: {data.cant}</h4>
              <DropDown></DropDown>
{/*               <p>{data.color}</p> */}
              <BtnCarrito></BtnCarrito>
            </div>
            <div className="descrip">
              <p>{data.descrip}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ItemDetail;
