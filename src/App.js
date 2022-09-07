import React from "react";
import { useState } from "react";

import { Footer, Comprar, Contacto, Nosotros,ItemDetailContainer } from "./containers";
import { Navbar, ItemListContainer, Cart } from "./components";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [numeroProductos, setNumeroProductos] = useState(0);

  const agregar = (productos, stock) => {
    if (productos <= stock) {
      setNumeroProductos(productos);
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route
            path="/item/:id"
            element={<ItemDetailContainer />}
          />
          <Route path="/comprar" element={<Comprar />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<p>¡No hay nada por acá!</p>} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
