import React from 'react';
import styles from '../styles/Tarjeta.module.css';

const Tarjeta = ({descripcion}) => {
    // Destructurar las propiedades de descripcion
    const {image, title, text, bgColor} = descripcion;

    return (
        <figure className={styles.figure} style={{backgroundColor: bgColor}}>
            <img src={image} alt={text} className={styles.img} />
            <div className={styles.div}>
                <h2 className={styles.h2}>{title}</h2>
                <figcaption className={styles.figcaption}>{text}</figcaption>
            </div>
        </figure>
    )
}

export default Tarjeta;
