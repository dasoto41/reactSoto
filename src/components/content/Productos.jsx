import React, { useState, useEffect } from "react";
import DetalleProducto from "./DetalleProducto";
import { useParams } from "react-router-dom";
import { getProducto } from "../../utils/firebase";

const Productos = () => {
    const consultaBase = async (ruta) => {
      const response = await fetch(ruta);
      const producto = await response.json();
      return producto;
    };
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getProducto(id).then(producto => 
      setData([producto.id,producto.data()])
);
  }, []);

  if(data.length != 0){
    return (
      <>
        
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <DetalleProducto producto={data} />
        </div>
      </>
    );

  }
  
};

export default Productos;
