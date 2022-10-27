import React, { useState, useContext, useEffect } from "react";
import { CarritoContext } from "../../context/CarritoContext";



const Carrito = () => {
  const { carrito, agregarProducto, eliminarProducto } =
    useContext(CarritoContext);
  const [carritoLocal, setCarritoLocal] = useState([]);
  

  useEffect(() => {
    const renderCarrito = carrito.map((producto) => (
      <div className="card cardProducto" key={producto.id}>
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">Precio: {producto.precio}</p>
          <p className="card-text">Cantidad: {producto.cantidad}</p>
          <p className="card-text">
            Precio Total: {producto.precio * producto.cantidad}
          </p>
          <button
            className="btn btn-dark"
            onClick={() => eliminarProducto(producto)}
          >
            Eliminar
          </button>
        </div>
      </div>
     
     

 

    ) )
   
    ;
   
   
    setCarritoLocal(renderCarrito);
  

   
  }, [carrito]);
  const a =carrito.reduce((accum, producto) => accum = accum + producto.cantidad * producto.precio, 0)
  console.log(a)

  function saludo(){
    alert("gracias por su compra, te redirigiremos a la plataforma de pago")
  }
  

  

  if (carrito.length != 0) {
    return (
      <>
        <div className="row"> {carritoLocal} </div>
        <div> Total= {a} </div>
        <button onClick={()=>saludo()}>FINALIZAR COMPRA</button>
      
      </>
    );
  } else {
    return (
      <>
        <h1>No existen elementos en el carrito </h1>
      </>
    );
  }
};

export default Carrito;
