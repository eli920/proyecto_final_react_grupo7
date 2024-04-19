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
                    background-color: ${bgColor};
                    width: 250px;
                    height: 400px;
                    border: 2px solid black;
                    border-radius: 5px;
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
                    border-top: 1px solid black;
                }
                h2 {
                    text-align: center;
                    font-weight: bold;
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