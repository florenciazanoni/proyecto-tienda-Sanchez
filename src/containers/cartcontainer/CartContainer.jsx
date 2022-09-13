import { React, useContext } from "react";
import "./cartcontainer.css";
import { CartContext } from "../../context/CartContext.jsx";
import { CartItem } from "../../components";


const CartContainer = () => {
  const { cart, clear } = useContext(CartContext);
  return (
    <div>
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
          <p>No has agregado productos</p>
        }
      </div>
    </div>
  );
};

export default CartContainer;
