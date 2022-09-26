import { collection, addDoc } from "firebase/firestore";
import { useContext, React } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { db } from "../../utils/firebase";
import { useState } from "react";

export const FormCompra = () => {
  const { cart, getTotalPrice } = useContext(CartContext);
  const [idOrder, setIdOrder] = useState("");

  const sendOrder = (e) => {
    e.preventDefault();
    const order = {
      buyer: {
        name: e.target[0].value,
        email: e.target[1].value,
        email_conf: e.target[2].value,
        phone: e.target[3].value
      },
      items: cart,
      total: getTotalPrice(),
      date: new Date(),
    };
    const queryRef = collection(db, "orders");

    if (order.buyer.email_conf === order.buyer.email) {
      addDoc(queryRef, order).then(respuesta=>setIdOrder(respuesta.id));
      alert('Exito!');
    } else {
      alert('Por favor ingrese un email válido');
    };
  };

  return (
    <div>
      <form onSubmit={sendOrder}>
        <input type="text" placeholder="nombre" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="confirme email" />
        <input type="number" placeholder="telefono" />
        <button type="submit" className="buttonStyle">
          Enviar orden
        </button>

      </form>
    </div>
  );
};
