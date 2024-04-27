import React from 'react';
import Tarjeta from "./Tarjeta";
import styles from '../styles/Listadetarjetas.module.css';

const descripcion = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbQ4-uo5uhHfmTluWGZmw0B5KjrnHvv5G4oHNQ5enppX8_zW2LhC5gPRTLLA&s",
        title: 'Misión',
        text: 'En Trown, nos dedicamos a ofrecer prendas de calidad que resalten la belleza de cada individuo, promoviendo la confianza y la sostenibilidad en cada paso.',
        
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwWytRUA29KFy1H-Jzrr1z0QOkW0OgZ93iKeyGR-Eyiyimbh1--_pcQb-lg&s",
        title: 'Visión',
        text: 'Buscamos ser líderes en moda, reconocidos por nuestra innovación y compromiso con el bienestar de nuestros clientes y el medio ambiente.',
        
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0BUTZIm9BgdWhnWKyL918M022FhQl_E22ei479dTVK7JJSESOC4sntO1x&s",
        title: 'Valores',
        text: 'En Trown, nos guiamos por la calidad, la autenticidad y la responsabilidad, promoviendo la diversidad, la inclusión y la sostenibilidad en todo lo que hacemos.',
      
    },
]

const ListaDeTarjetas = () => {
    return (
        <div className={styles.container}>
            <div className={styles['cards-list']}>
                {descripcion.map((descripcion, index) => <Tarjeta key={index} descripcion={descripcion} />)}
            </div>
        </div>
    )
}

export default ListaDeTarjetas;
