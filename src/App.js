import React from "react";
import { useState, useEffect } from "react";

import { Footer, Blog, Carrusel, Restaurantes, Header } from "./containers";
import {
  Categorias,
  Navbar,
  ItemListContainer,
  ItemCount,
  Cart,
  CartWidget
} from "./components";
import "./App.css";

const App = () => {
  const [numeroProductos, setNumeroProductos] = useState(0);


  const agregar = (productos, stock) => {
    if(productos<=stock){
      console.log("dentro del carrito", productos);
      setNumeroProductos(productos);
    }


  };
  console.log("numeroProductos", numeroProductos);

  return (
    <div className="App">
      <div className="gradient__bg">
        <Header />
        <Navbar />
      </div>
      <ItemListContainer />
      <ItemCount stock={5} initial={0} onAdd={agregar} />
{/*       <Cart numeroCarrito={numeroProductos} /> */}
      <Categorias />
      <Carrusel />
      <Restaurantes />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
