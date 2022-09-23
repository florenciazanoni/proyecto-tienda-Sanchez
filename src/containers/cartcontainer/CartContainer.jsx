import { React, useContext } from "react";
import "./cartcontainer.css";
import { CartContext } from "../../context/CartContext.jsx";
import { CartItem } from "../../components";
import { NavLink } from "react-router-dom";
import { FormCompra } from "../../components/formCompra/FormCompra";


const CartContainer = () => {
  const { cart, clear , getTotalPrice} = useContext(CartContext);

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
            <p>Precio total: {getTotalPrice()}</p>
            <button className="buttonStyle" onClick={clear}>Vaciar el carrito</button>
            <FormCompra/>
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
