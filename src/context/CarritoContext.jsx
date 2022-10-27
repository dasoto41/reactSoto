import React ,{createContext , useState}from 'react';


const CarritoContext = createContext () //creo contexto

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);
    const agregarProducto = (prod, cant)=>{
        const aux = carrito //creo aux. para poder modificar el carrito (sin el state)
        let indice = aux.findIndex (producto =>producto.id ==prod[0])
        console.log(indice)
    

    if (indice != -1){
      aux[indice].cantidad=cant
    }else{
      const id=prod[0]
      const x =prod[1]
      const prodCart ={id,...x,cantidad: cant}
      aux.push(prodCart)
    }
    setCarrito(structuredClone(aux))

    }

    const eliminarProducto = (prod) =>{
        const aux = carrito 
        let indice = aux.findIndex (producto =>producto.id ==prod.id)

        aux.splice(indice,1)
        setCarrito(structuredClone(aux))
    


    }
    return (
        <>
            <CarritoContext.Provider value ={{carrito,agregarProducto,eliminarProducto}} >
                {props.children}
           </CarritoContext.Provider>
             


        </>
    );
}

export {CarritoContext, CarritoProvider} ;
