import React, { useState, useEffect } from "react";
import { getProd } from "../../utils/firebase";
import { Link } from "react-router-dom";

const Home = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProd().then((producto) => {
      const card = producto.map((producto) => (
        <div className="container">
          <div className="card cardProd" key={producto[0]}>
            <img src={`${producto[1].img}`} className="card-img-top img" />
            <div className="card-body ">
              <h5 className="card-title">{producto[1].nombre}</h5>
              <p className="card-text">
                {" "}
                Categoria: {producto[1].nombreCategoria}
              </p>
              <p className="card-text">Precio: {producto[1].precio}</p>
              <p className="card-text">Stock: {producto[1].stock}</p>
              <Link className="nav-link" to={`/productos/${producto[0]}`}>
                <button className="btn btn-ligth button">Ver Producto</button>
              </Link>
            </div>
          </div>
        </div>
      ));
      setProductos(card);
    });
  }, []);
  return <div className="row">{productos}</div>;
};

export default Home;
