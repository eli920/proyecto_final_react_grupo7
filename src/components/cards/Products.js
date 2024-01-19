import React from 'react'

const Products = ({ product, addCart }) => {
    const { id, image, name, price } = product;
    return (
        <>
        <div className='cards-products'>
            <img src= {image} alt= {name} />
            <div className='description-products'>
                <h4>{name}</h4>
                <h5>${price}</h5>
                <button onClick={()=> addCart(id)}>Comprar</button>
            </div>
        </div>
        <style jsx>
        {`
      
        .cards-products {
            max-width: 150px;
            height: auto;
            border: 1px solid;
            border-radius: 10px;
          }
        
        .description-products{
            width: 100%;
            font-family: 'founders';
        }
          
        .description-products h4, h5 {
            text-align: center;
            font-size: 1.2rem;
            font-weight: lighter;
            padding-bottom: 5px
          }
        
        button {
            width: 80%;
            margin: 5px;    
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

export default Products