import React, { useState } from 'react';

const Prueba = () => {
    const [contador, setContador] = useState(0);
    function contar(operacion) {
        if (operacion === "+") {
            setContador(contador + 1)
        } else {
            if (contador > 0) {
                setContador(contador - 1)
            }

        }
    }
    return (
        <>
            <button onClick={() => { contar("+") }}>sumar</button>
            <h1>{contador}</h1>
            <button onClick={() => { contar("-") }}>restar</button>
        </>
    );
}

export default Prueba;

