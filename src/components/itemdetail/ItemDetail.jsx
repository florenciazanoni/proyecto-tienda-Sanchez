import { useEffect, useState } from "react";
import getFetch from "../../helper/helper.js";
import { useParams } from "react-router-dom";
import DropDown from "../dropdown/DropDown.jsx";
import ItemCount from "../itemcount/ItemCount.jsx";
import { Link } from "react-router-dom";
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
            <h2 className="underline">{data.nombre}</h2>
            <div className="detalle">
              <h3>${data.precio}</h3>
              <DropDown></DropDown>
              <ItemCount initial={1} stock={100}></ItemCount>
              <Link to="/cart"><button className="buttonStyle">Terminar compra</button></Link>
              <h4 className="stockStyle">Stock disponible: {data.cant}</h4>
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
