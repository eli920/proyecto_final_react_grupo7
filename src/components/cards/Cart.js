import React from 'react'

const Cart = ({item, removeCart}) => {
    const {id, image, name, price, quantity } = item;
    return (
        <>
        <div className='cards-cart'>
            <img src={image} alt={name} />
            <div className='description-cart'>
                <h4>{name}</h4>
                <h5>${price} x {quantity} = ${price*quantity}</h5>
                <button onClick={()=>removeCart(id, false)}>Eliminar</button>
                <button onClick={()=>removeCart(id, true)}>Eliminar todos</button>
            </div>
        </div>
        <style jsx>
        {`
      
        .cards-cart {
            max-width: 100px;
            height: auto;
            border: 1px solid;
            border-radius: 10px;
          }
        
        .description-cart{
            width: 100%;
            font-family: 'founders';
        }
          
        .description-cart h4, h5 {
            text-align: center;
            font-size: 1.2rem;
            font-weight: lighter;
            padding-bottom: 5px
          }
        
        button {
            width: 80%;
            justify-content: center;
            align-items:center;
            margin: 5px
        }
          
        img {
            border-radius: 10px 10px 0px 0px;
            width:100%
        }
        `}
      </style>
    </>
    )
}

export default Cart