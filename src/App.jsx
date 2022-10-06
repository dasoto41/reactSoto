import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/content/Navbar";
import Carrito from "./components/content/Carrito";
import Home from "./components/content/Home";
import Productos from "./components/content/Productos";
import Conocenos from "./components/content/Conocenos";
import Contacto from "./components/content/Contacto";
import Categorias from "./components/content/Categorias";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos/:id" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/conocenos" element={<Conocenos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/categorias/:id" element={<Categorias />} />



        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
