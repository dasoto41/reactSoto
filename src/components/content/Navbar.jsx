import React from "react";
import { Link } from "react-router-dom";
import Form from "../layouts/Form";
import Dropdown from "../layouts/Dropdown";
import Secciones from "../layouts/Secciones";
import Carrito from "./Carrito";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  nav">
        <div className="container-fluid">
        <li className="nav-item">
            <Link className="nav-link active" to="/">
              <button className='btn btn-secondary home'>
              <i className="fas fa-home"></i>
                </button>
            </Link>
        </li>
         
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <Secciones />
              <Dropdown />
            </ul>
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/carrito">
                  <button className="btn btn-secondary">
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                </Link>
              </li>
            </ul>

            <Form />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
