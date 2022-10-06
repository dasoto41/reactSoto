import React from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Productos
        </a>
        <div className="dropdown-menu">
          <Link to = "./Categorias/1">
          <a className="dropdown-item" href="#">
            Animales
          </a>
          </Link>
          <Link to = "./Categorias/2">
          <a className="dropdown-item" href="#">
            Flores
          </a>
          </Link>
          <Link to = "./Categorias/3">
          <a className="dropdown-item" href="#">
            Abstracto
          </a>
          </Link>
        </div>
      </li>
    </>
  );
};

export default Dropdown;
