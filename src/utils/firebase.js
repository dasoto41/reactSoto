// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection,addDoc,doc,getFirestore,getDocs,getDoc,updateDoc}from"firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-ds-69072.firebaseapp.com",
  projectId: "react-ds-69072",
  storageBucket: "react-ds-69072.appspot.com",
  messagingSenderId: "628275644287",
  appId: "1:628275644287:web:3a2623ffc4eb33f5a07c4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore()

const cargarBDD= async () =>{
  const promise=await fetch ("./json/productos.json")
  const productos= await promise.json ()
  productos.forEach (async (producto)=>{
    await addDoc(collection(db,"productos"),{//generar nuevo producto
      nombre:producto.nombre,
      categoria:producto.nombreCategoria,
      stock:producto.stock,
      img:producto.img,
      precio:producto.precio

    })

  })
}

const getProducto =async (id)=>{
const producto= await getDoc (doc(db,"productos",id))

return producto

}
const getProd = async()=>{
  const prod = await getDocs(collection(db,"productos"))
  const items = prod.docs.map(producto =>[producto.id, producto.data()])
  return items

}

const actualizarProducto = async(id,data)=>{
  const estado =await updateDoc(doc(db,"productos",id),data)
  return estado

}

const crearOrden=async(nombre,apellido,email,preTotal)=>{
  const orden =await addDoc (collection(db,"ordenCompra"),{
    nombre: nombre,
    apellido: apellido,
    email: email,
    precioTotal: preTotal
  })
  return orden

}

const getOrden= async(id)=>{
  const ordendeCompra = await getDoc(doc(db,"ordenCompra",id))
  return ordendeCompra
}

export{cargarBDD,getProd,getProducto,actualizarProducto,getOrden,crearOrden}