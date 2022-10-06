import React from 'react';
import {Link} from 'react-router-dom';

const Secciones = () => {
  return (
    <>
      <li className="nav-item">
        <Link to= "/conocenos">
      
        <a className="nav-link active" href="#">Conocenos!
          <span className="visually-hidden">(current)</span>
        </a>
        </Link>
      </li>
      <li className="nav-item">
      <Link to= "/contacto">
        <a className="nav-link" href="#">Contacto</a>
        </Link>
      </li>
      
      

    </>
  );
}

export default Secciones;
