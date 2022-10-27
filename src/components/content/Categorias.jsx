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
    consultaBase('../json/productos.json').then(productos => {
        const productosCategoria = productos.filter(producto => producto.idCategoria === parseInt(id) )
        const categoria = productosCategoria.map(producto => 
            <div className="container">
            <div className="card cardProducto" key={producto.id}>
                <img src={`${producto.img}`} className="card-img-top" alt={producto.nombre} />
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">Precio: {producto.precio}</p>
                        <p className="card-text">Stock: {producto.stock}</p>
                        <button className='btn btn-dark'><Link className='nav-link' to={`/productos/${producto.id}`}>Ver Producto</Link></button>
                </div>
            </div>
            </div>)
        
        setProductos(categoria)
    })
}, [id]);
return (
    <div className="row">
        {productos}
    </div>)
}

export default Categorias;

