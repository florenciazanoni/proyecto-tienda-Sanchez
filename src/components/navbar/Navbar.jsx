import React from "react";
import {useState, useEffect} from "react";
import {
  AiTwotoneShopping,
  AiFillMedicineBox,
  AiOutlineUser,
} from "react-icons/ai";
import { IoFastFoodSharp } from "react-icons/io5";
import { SiFastapi } from "react-icons/si";
import "./navbar.css";
import CartWidget from "../cartwidget/CartWidget";
import ItemCount from "../itemcount/ItemCount";

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
          <span class="square1" />
          <span class="square2" />
          <h1 className="logo">YUMI</h1>
        </div>
        <div className="navbar-links_container">
          <div className="card">
            <p>
              <a href="#turbo">
                <SiFastapi />
                Turbo
              </a>
            </p>
          </div>
          <div className="card">
            <p>
              <a href="#restaurantes">
                <IoFastFoodSharp />
                Restaurantes
              </a>
            </p>
          </div>
          <div className="card">
            <p>
              <a href="#supermercados">
                <AiTwotoneShopping />
                Supermercados
              </a>
            </p>
          </div>
          <div className="card">
            <p>
              <a href="#farmacias">
                <AiFillMedicineBox />
                Farmacias
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
