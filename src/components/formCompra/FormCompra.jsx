import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
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
      },
      items: cart,
      total: getTotalPrice(),
      date: new Date(),
    };
    const queryRef = collection(db, "orders");
    console.log(order)
    addDoc(queryRef, order).then(respuesta=>setIdOrder(respuesta.id));

  };

  return (
    <div>
      <form onSubmit={sendOrder}>
        <input type="text" placeholder="nombre" />
        <input type="text" placeholder="email" />
        <button type="submit" className="buttonStyle">
          Enviar orden
        </button>

      </form>
    </div>
  );
};
