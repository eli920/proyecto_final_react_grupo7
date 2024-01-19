import React from 'react'
import Tarjeta from "./Tarjeta"

const descripcion = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbQ4-uo5uhHfmTluWGZmw0B5KjrnHvv5G4oHNQ5enppX8_zW2LhC5gPRTLLA&s",
        title: 'Mision',
        text: 'Conectar personas globalmente mediante comercio en línea seguro y eficiente.',
        bgColor: "blue",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwWytRUA29KFy1H-Jzrr1z0QOkW0OgZ93iKeyGR-Eyiyimbh1--_pcQb-lg&s",
        title: 'Vision',
        text: 'Líder global en comercio electrónico, innovación y satisfacción del cliente.',
        bgColor: "red",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0BUTZIm9BgdWhnWKyL918M022FhQl_E22ei479dTVK7JJSESOC4sntO1x&s",
        title: 'Valores',
        text: 'Integridad - Innovacion - Colaboracion',
        bgColor: "green",
    },
]

const ListaDeTarjetas = () => {
    return (
    <>
    <div className="container">
        <div className="cards-list">
            {
                descripcion.map((descripcion,index) => <Tarjeta key={index} descripcion={descripcion} />)
            }
        </div>
    </div>

            <style jsx>{`
                .container {
                    display: flex;
                    justify-content: center;
                }
                .cards-list {
                    display: grid;
                    grid-template-columns: repeat(3,1fr);
                    width: 100%;
                }

                @media screen and (max-width: 1024px){
                    .cards-list{
                        grid-template-columns: repeat(2,1fr);
                    }
                }

                @media screen and (max-width: 581px){
                    .cards-list{
                        grid-template-columns: repeat(1,1fr);
                    }
                }
            `}</style>
        </>
    )
}

export default ListaDeTarjetas