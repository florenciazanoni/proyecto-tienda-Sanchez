import React from "react";
import { useState, useEffect } from "react";
import "./navbar.css";
import { CartWidget } from "../index.js";
import ImgLogo from "../../assets/imgs/mate.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
          <CartWidget ></CartWidget>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
