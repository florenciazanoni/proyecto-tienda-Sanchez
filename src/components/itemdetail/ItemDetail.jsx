import { useEffect, useState, useContext } from "react";
import getFetch from "../../helper/helper.js";
import { useParams } from "react-router-dom";
import DropDown from "../dropdown/DropDown.jsx";
import ItemCount from "../itemcount/ItemCount.jsx";
import { Link } from "react-router-dom";
import "./itemdetail.css";
import { CartContext } from "../../context/CartContext.jsx";

const ItemDetail = () => {
  const { addItem } = useContext(CartContext);
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);

  const { nombre, img, descrip, precio, cant } = data;

  useEffect(() => {
    getFetch.then((response) => {
      setData(response.find((prod) => prod.id === parseInt(id)));
      setLoading(false);
    });
  }, [id]);

  const onAdd = (count) => {
    addItem(data, count);
    setQuantity(count);
    console.log("onAdd", count);
  };

  return (
    <div className="contenedor">
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <div className="mates-detalles">
          <div className="contenedor">
            <img src={img} alt="" />
          </div>
          <div className="contenedor-detalles">
            <h2 className="underline">{nombre}</h2>
            <div className="detalle">
              <h3>${precio}</h3>
              <DropDown />
              <ItemCount initial={1} stock={100} onAdd={onAdd} />
              {quantity > 0 && (
                <Link to="/cart">
                  <button className="buttonStyle">Terminar compra</button>
                </Link>
              )}
              <h4 className="stockStyle">Stock disponible: {cant}</h4>
            </div>
            <div className="descrip">
              <p>{descrip}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ItemDetail;
