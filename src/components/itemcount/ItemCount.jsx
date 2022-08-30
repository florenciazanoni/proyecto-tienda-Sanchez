import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [stockState, setStockState] = useState(stock);
  const aumentar = () => {
    if (count < stock) {
      setCount(count + 1);
      setStockState(stockState - 1);
    }
  };

  const disminuir = () => {
    if (count > initial) {
      setCount(count - 1);
      setStockState(stockState + 1);
    }
  };

  return (
    <div>
      <p>Cantidad {count}</p>
      <p>Stock {stockState}</p>
      <button onClick={aumentar}>+</button>
      <button onClick={disminuir}>-</button>
      <button onClick={() => onAdd(count, stock)} className="btn_add">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
