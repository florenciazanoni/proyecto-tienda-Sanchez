import { useContext, react } from "react";
import { BsFillCartFill } from "react-icons/bs";
import "./cartwidget.css";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = ({}) => {
  const { totalItems, cart } = useContext(CartContext);
  return (
    <div className="cart">
      {cart.length > 0 && (
        <>
          <NavLink to="/cart">
            <BsFillCartFill />
          </NavLink>
          <span className="numberStyle">{totalItems()}</span>
        </>
      )}
    </div>
  );
};

export default CartWidget;
