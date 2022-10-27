import React from 'react';
import {Link} from 'react-router-dom';

const Secciones = () => {
  return (
    <>
      <li className="nav-item">
       
      
        <Link className="nav-link active" to="/conocenos">Conocenos! </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link active" to="/contacto">Contacto </Link>
      
      </li>
      
      

    </>
  );
}

export default Secciones;
