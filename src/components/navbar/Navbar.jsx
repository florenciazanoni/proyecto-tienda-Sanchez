import React from "react";
import { useState, useEffect } from "react";
import "./navbar.css";
import {CartWidget, ItemCount} from "../index.js"
import ImgLogo from "../../assets/imgs/mate.png";
import { NavLink } from "react-router-dom";

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
        <NavLink to="/" className="navbar-logo">
          <img src={ImgLogo} className="imagen"></img>
          <h1 className="logo">DANMA</h1>
        </NavLink>
        <div className="navbar-links_container">
          <NavLink
            className={({ isActive }) =>
              isActive ? "classActive" : "classInactive"
            }
            to="/"
          >
            <div className="card">
                <p className="navbar_text">Inicio</p>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "classActive" : "classInactive"
            }
            to="/categoria/Novedades"
          >
            <div className="card">
                <p className="navbar_text">Novedades</p>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "classActive" : "classInactive"
            }
            to="/comprar"
          >
            <div className="card">

                <p className="navbar_text">¿Cómo comprar?</p>

            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "classActive" : "classInactive"
            }
            to="/nosotros"
          >
            <div className="card">

                <p className="navbar_text">Nosotros</p>

            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "classActive" : "classInactive"
            }
            to="/contacto"
          >
            <div className="card">
                <p className="navbar_text">Contacto</p>

            </div>
          </NavLink>
        </div>
        <div className="navbar-cartwidget">
          <CartWidget numeroCarrito={numeroProd} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
