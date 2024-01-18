import React from 'react'

const Cart = ({item, removeCart}) => {
    const {id, image, name, price, quantity } = item;
    return (
        <div className='cards-cart'>
            <img src={image} alt={name} />
            <div className='description-cart'>
                <h4>{name}</h4>
                <h5>${price} x {quantity} = ${price*quantity}</h5>
                <button onClick={()=>removeCart(id, false)}>Eliminar</button>
                <button onClick={()=>removeCart(id, true)}>Eliminar todos</button>
            </div>
        </div>
    )
}

export default Cart