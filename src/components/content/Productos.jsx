import React, { useState, useEffect } from "react";
import DetalleProducto from "./DetalleProducto";
import { useParams } from "react-router-dom";

const Productos = () => {
    const consultaBase = async (ruta) => {
      const response = await fetch(ruta);
      const producto = await response.json();
      return producto;
    };
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    consultaBase("../json/productos.json").then((productos) => {
        console.log(productos)
        const productofind= productos.find(prodarray=>prodarray.id==id)
        setData(productofind)
        
        console.log(productofind);
      
    });
  }, []);

  return (
    <>
      <div>Soy ItemListContainer</div>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <DetalleProducto producto={data} />
      </div>
    </>
  );
};

export default Productos;
