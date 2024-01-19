import React from 'react'

const Tarjeta = ({descripcion}) => {

    // Destructurar las propiedades de descripcion
    const {image, title, text, bgColor} = descripcion; //Un objeto

    return (
        <>
        <figure>
            <img src={image} alt={text} />
            <div>
                <h2>{title}</h2>
                <figcaption>{text}</figcaption>
            </div>
        </figure>

            <style jsx>{`
                figure {
                    width: 200px;
                    height: 400px;
                    border: 2px solid black;
                }
                img {
                    width: 100%;
                    height:50%;
                    object-fit: cover;
                }
                div {
                    width: 90%;
                    margin: 0 auto;
                    padding: 10px;
                    display: flex;
                    flex-direction: column;
                    allign-items: center;
                }
                h2 {
                    text-align: center;
                    padding: 0 0 5px 0;
                    font-size: 1.2rem;
                }
                figcaption {
                    text-align: center;
                    font-size: .85rem;
                }
            `}</style>
        </>
    )
}

export default Tarjeta