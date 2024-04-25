import React from 'react'
import ShopCart from './ShopCart'

const Section = () => {
  return (
    <>
      <div className='section-cards'>
        <h2>Últimos productos disponibles</h2>
        <ShopCart />
      </div>
      <style jsx>
        {`
        .section-cards {
            width: 90%;
            display: flex;
            flex-direction: column;
            allign-items: center;
        }

        h2 {
            margin-left: auto;
            margin-right: auto
        }

        `}
      </style>
    </>
  )
}

export default Section