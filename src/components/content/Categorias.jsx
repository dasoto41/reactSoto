import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Categorias = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  const consultaBase = async (ruta) => {
    const response = await fetch(ruta);
    const producto = await response.json();
    return producto;
  };
  useEffect(() => {
    consultaBase("./json/productos.json").then((productos) => {
      const categoria = productos.filter(
        (producto) => producto.idCategoria === parseInt(id)
      );
      console.log(categoria);
      const card = productos.map((producto) => (
        <div className="container">
          <div className="card cardProd" key={producto.id}>
            <img
              src={`${producto.img}`}
              className="card-img-top img"
              alt={producto.nombre}
            />
            <div className="card-body ">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">
                {" "}
                Categoria: {producto.nombreCategoria}
              </p>
              <p className="card-text">Precio: {producto.precio}</p>
              <p className="card-text">Stock: {producto.stock}</p>
              <Link className="nav-link" to={`/productos/${producto.id}`}>
                <button className="btn btn-ligth button">Ver Producto</button>
              </Link>
            </div>
          </div>
        </div>
      ));
      setProductos(card);
    });
  }, []);

  return <div></div>;
};

export default Categorias;
