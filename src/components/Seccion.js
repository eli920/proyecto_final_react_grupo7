import React from 'react';
import ListaDeTarjetas from "./ListaDeTarjetas";
import styles from '../styles/Seccion.module.css';

const Seccion = () => {
    return (
        <section className={styles.section}>
            <h2>¿Por qué elegir Trown?</h2>
            <p>
            En Trown nos enorgullecemos de ofrecer indumentaria de la más alta calidad. Cada pieza está cuidadosamente diseñada y fabricada con materiales premium para garantizar durabilidad y comodidad, brindando a nuestros clientes la confianza de lucir siempre impecables.
            </p>
            <ListaDeTarjetas />
        </section>
    );
};

export default Seccion;
