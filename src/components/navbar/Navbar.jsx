import React from "react";
import {useState, useEffect} from "react";
import "./navbar.css";
import CartWidget from "../cartwidget/CartWidget";
import ItemCount from "../itemcount/ItemCount";
import ImgLogo from "../../assets/imgs/mate.png";

const Navbar = () => {
  const [estadoCarrito, setEstadoCarrito] = useState("Carrito vacio");
  const [numeroProd, setnumeroProd] = useState(0);

  const agregar = (productos) => {
    console.log("funcion agregar", productos);
    setnumeroProd(productos);
    setEstadoCarrito(`el carrito tiene ${productos}`);
    console.log("estadoCarrito", estadoCarrito);
  };
  console.log("numeroProd", numeroProd);
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-logo">
          <img src={ImgLogo} className="imagen" ></img>
          <h1 className="logo">DANMA</h1>
        </div>
        <div className="navbar-links_container">
          <div className="card">
            <p>
              <a href="#home">
                <span className="navbar_text">Inicio</span>
              </a>
            </p>
          </div>
          <div className="card">
            <p>
              <a href="#mates">
                <span className="navbar_text">Nuestros mates</span>
              </a>
            </p>
          </div>
          <div className="card">
            <p>
              <a href="#comprar">
                <span className="navbar_text">¿Cómo comprar?</span>
              </a>
            </p>
          </div>
          <div className="card">
            <p>
              <a href="#nosotros">
                <span className="navbar_text">Nosotros</span>
              </a>
            </p>
          </div>
        </div>
        <div className="navbar-cartwidget">
            <CartWidget numeroCarrito={numeroProd}/>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
