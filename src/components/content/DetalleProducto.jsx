import React from "react";

const DetalleProducto = ({ producto }) => {
  console.log("prod", producto);
  return (
    <>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`.${producto.img}`}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">{producto.nombreCategoria}</p>
            <p className="card-text">{producto.precio}</p>
            <p className="card-text">{producto.stock}</p>
            <button className="btn btn-dark">Comprar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalleProducto;
