import React from 'react'

const Products = ({ product, addCart }) => {
    const { id, image, name, price } = product;
    return (
        <div className='cards-products'>
            <img src= {image} alt= {name} />
            <div className='description-products'>
                <h4>{name}</h4>
                <h5>${price}</h5>
                <button onClick={()=> addCart(id)}>Agregar</button>
            </div>
        </div>
    )
}

export default Products