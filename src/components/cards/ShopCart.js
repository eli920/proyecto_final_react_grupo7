import { useReducer } from 'react';
import { TYPES } from '@/actions/actions';
import { shopInitialState } from '@/reducer/shopInitialState';
import { shopReducer } from '@/reducer/shopReducer';
import React from 'react';
import Products from './Products';
import Cart from './Cart';


const ShopCart = () => {
    const [state, dispatch]= useReducer(shopReducer, shopInitialState);
    const {products, cart} = state;

    const addCart= (id)=>dispatch({type: TYPES.ADD, payload: id});
    const removeCart= (id, all)=> {
        if(all) {
            dispatch({type: TYPES.REMOVE_ALL, payload:id}); 
        }else {
            dispatch({type: TYPES.REMOVE_ONE, payload:id}); 
        }
    }; 
    const clearCart= ()=>dispatch({type: TYPES.CLEAR});
  return (
    <div className='shop'>
        <h2>Carrito de compras</h2>
        <h3>Productos</h3>
        <div className='products'>
            {
               products.map(product=><Products Key= {product.id} product={product} addCart={addCart}/>) 
            }
        </div>
        <h3>Carrito</h3>
        <div className='cart'>
            {
                cart.map((item, i)=> <Cart Key= {i} item={item} removeCart={removeCart}/>)
            }
        </div>
        <button onClick={clearCart}>Limpiar carrito</button>

    </div>
  )
}

export default ShopCart
