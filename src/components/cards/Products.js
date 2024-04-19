import React from 'react'

const Products = ({ product, addCart }) => {
    const { id, image, name, price } = product;
    return (
        <>
            <figure className='cards-products'>
                <img src={image} alt={name} />
                <div className='description-products'>
                    <span>{name}</span>
                    <span>${price}</span>
                    <button onClick={() => addCart(id)}>Comprar</button>
                </div>
            </figure>
            <style jsx>
                {`
      
            .cards-products {
                width: 170px;
                border: 1px solid;
                border-radius: 10px;
            }
            
            .description-products{
                width: 90%;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.5rem;
                margin-bottom: 1rem;
                font-family: 'founders';
            }
            
            img {
                border-radius: 10px 10px 0px 0px;
                width:100%;
                object-fit:cover
            }
            span {
                font-size: 0.85rem;
            }
            
            button {
                width: 80%;
                border: solid grey;
                border-radius: 5px;  
            }
            `}
            </style>
        </>
    )
}

export default Products