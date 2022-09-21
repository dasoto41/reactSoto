import React from 'react';
import Form from './Form';
import Dropdown from './Dropdown';
import Secciones from './Secciones';
import Cartwidget from './Cartwidget';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <Secciones />
              <Cartwidget />

              <Dropdown />

            </ul>
            <Form />

          </div>
        </div>
      </nav>

    </div>
  );
}

export default Navbar;
