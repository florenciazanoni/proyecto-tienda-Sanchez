import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cartitem.css";


const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="cart-item-container">
      <div className="cart-img-container">
        <img src={item.img} alt={item.nombre} />
      </div>
      <div className="cart-info-container">
        <p>Mate {item.nombre}</p>
        <p>Precio unitario: {item.precio}</p>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio total: {item.totalPrice}</p>
        <button className="buttonStyle" onClick={() => removeItem(item.id)}>
          Eliminar producto
        </button>
      </div>
    </div>
  );
};

export default CartItem;