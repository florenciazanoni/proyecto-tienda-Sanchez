import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const [stockState, setStockState] = useState(stock);
  
  const disminuir = () => {
    if (count > initial) {
      setCount(count - 1);
      setStockState(stockState + 1);
    }
  };
  const aumentar = () => {
    if (count < stock) {
      setCount(count + 1);
      setStockState(stockState - 1);
    }
  };


  return (
    <div className="contenedorBtns">
      <button disabled={stock===0} onClick={() => onAdd(count, stock)} className="buttonStyle">
        Agregar al carrito
      </button> <div className="contenedorBtn">
      <button disabled={stock===0} onClick={aumentar} className="buttonStyle-2">
        +
      </button>
      <p className="contadorStyle"> {count}</p>
{/*       <p> {stockState}</p>
 */}      <button disabled={stock===0}  onClick={disminuir} className="buttonStyle-2">
        -
      </button></div>
    </div>
  );
};

export default ItemCount;
