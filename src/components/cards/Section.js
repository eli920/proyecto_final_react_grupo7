import React from 'react'
import ShopCart from './ShopCart'

const Section = () => {
  return (
    <>
      <div className='sectionCards'>
        <h2>Últimos productos disponibles</h2>
        <ShopCart />
      </div>
      <style jsx>
        {`
        .sectionCards {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        h1 {
          padding-bottom: 20px

        }

        `}
      </style>
    </>
  )
}

export default Section