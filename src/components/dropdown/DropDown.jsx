import React from "react";
import "./dropdown.css";

const DropDown = () => {
  window.addEventListener("load", () => {
    const colorItem = document.querySelectorAll(".color-item");
    colorItem.forEach((item) => {
      item.addEventListener("click", function () {
        const idSelected = this.id;
        document.body.className = idSelected;
      });
    });
  });

  return (
    <div>
      <div className="card-2">
        <p className="nombre">Colores disponibles</p>
        <ul>
          <li className="color-item" id="rojo"></li>
          <li className="color-item" id="azul"></li>
          <li className="color-item" id="verde"></li>
          <li className="color-item" id="morado"></li>
          <li className="color-item" id="rosa"></li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
