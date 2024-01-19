import React from 'react'
import ListaDeTarjetas from "./ListaDeTarjetas"

const Seccion = () => {
    
    return (
        <>
        <section>
            <h2>¿Por que elegir 'nombre de la empresa'?</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ListaDeTarjetas/>
        </section>

        <style jsx>{`
        section {
            width: 70%;
            height: 20vh;
            display: flex;
            flex-direction: column;
            allign-items: center;
        }
        `}</style>
        </>
    );
};

export default Seccion;