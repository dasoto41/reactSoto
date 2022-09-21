import React from 'react';
import Navbar from './components/Navbar';
import Prueba from './components/Prueba';
import ItemListContainer from './components/ItemListContainer';

import "./App.css"

const App = () => {
    return (
        <>

            <Navbar />,
            <ItemListContainer greetings={"Bienvenidos a mi Tienda"} />,
            <Prueba />
        </>

    );
}

export default App;
