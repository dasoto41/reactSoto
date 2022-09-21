import React from 'react';

const Dropdown = () => {
  return (
    <>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Cuadros</a>
          <a className="dropdown-item" href="#">Pinturas</a>

          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </li>
    </>
  );
}

export default Dropdown;
