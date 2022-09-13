import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    const elementExists = cart.some((element) => element.id === id);
    return elementExists;
  };

  const addItem = (item, quantity) => {
    const newList = [...cart];
    if (isInCart(item.id)) {
      const index = newList.findIndex((element) => element.id === item.id);
      newList[index].quantity = newList[index].quantity + quantity;
      newList[index].totalPrice =
        newList[index].quantity * newList[index].precio;
      setCart(newList);
    } else {
      const newProduct = {
        ...item,
        quantity: quantity,
        totalPrice: quantity * item.precio,
      };
      const newList = [...cart];
      newList.push(newProduct);
      setCart(newList);
    }
  };

  const removeItem = (id) => {
    const copyArray = [...cart];
    const newArray = copyArray.filter((element) => element.id !== id);
    setCart(newArray);
  };

  const clear = () => {
    setCart([]);
  };

  const totalItems = () => {
    const totalProducts = cart.reduce(
      (acc, element) => acc + element.quantity,
      0
    );
    return totalProducts;
  };

  return (
    <CartContext.Provider
      value={{ cart, isInCart, addItem, removeItem, clear, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
