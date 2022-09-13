import { React, useContext } from "react";
import "./cartcontainer.css";
import { CartContext } from "../../context/CartContext.jsx";
import { CartItem } from "../../components";
import { NavLink } from "react-router-dom";

const CartContainer = () => {
  const { cart, clear } = useContext(CartContext);
  return (
    <div className="contenedor-cart">
      <div>
        {
          cart.length>0 ?
          <>
            {
              cart.map(item=>(
                <CartItem key={item.id} item={item}/>
              ))
            }
            <hr/>
            <button className="buttonStyle" onClick={clear}>Vaciar el carrito</button>
          </>
          :
          <span>
          <p>No has agregado productos</p>
          <NavLink to={"/"}><button className="buttonStyle">Ir a ver mates</button>
          </NavLink>
          </span>
        }
      </div>
    </div>
  );
};

export default CartContainer;
