import React from 'react'

const Cart = ({ item, removeCart }) => {
    const { id, image, name, price, quantity } = item;
    return (
        <>
            <figure className='cards-cart'>
                <img src={image} alt={name} />
                <div className='description-cart'>
                    <h4>{name}</h4>
                    <h5>${price} x {quantity} = ${price * quantity}</h5>
                    <button onClick={() => removeCart(id, false)}>Eliminar</button>
                    <button onClick={() => removeCart(id, true)}>Eliminar todos</button>
                </div>
            </figure>
            <style jsx>
                {`
      
            .cards-cart {
                width: 250px;
                height: 170px;
                border: 1px solid;
                border-radius: 10px;
                display: flex;
                justify-content: center;
                overflow: hidden;
                gap: 15px
               
            }
            
            .description-cart{
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                item-align: center;
                font-family: 'founders';
            }
            
            img {
                border-radius: 10px 0px 0px 10px;
                width: 50%;
                height: auto;
                object-fit:cover
            }
            h5 {
                font-size: 0.85rem;
            }
            
            button {
                width: 70%;
                padding:5px;
                border: solid grey;
                border-radius: 5px;
                font-size: 0.65rem;  
            }
            `}
            </style>

        </>
    )
}

export default Cart