import React from "react";
import { useState } from "react";

import { Footer, Contacto, Nosotros,ItemDetailContainer,CartContainer } from "./containers";
import { Navbar, ItemListContainer, Cart } from "./components";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CartProvider} from "./context/CartContext";

const App = () => {


  return (
    <CartProvider>
    <BrowserRouter>
      <span className="App">
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

          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<p>¡No hay nada por acá!</p>} />

        </Routes>
        <Footer />
      </span>
    </BrowserRouter>
    </CartProvider>
  );
};

export default App;
