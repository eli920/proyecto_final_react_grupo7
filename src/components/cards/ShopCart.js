import {useState, useReducer, useEffect } from 'react';
import axios from 'axios';
import { TYPES } from '@/actions/actions';
import { shopInitialState } from '@/reducer/shopInitialState';
import { shopReducer } from '@/reducer/shopReducer';
import React from 'react';
import Products from './Products';
import Cart from './Cart';

const ShopCart = () => {
    const [state, dispatch] = useReducer(shopReducer, shopInitialState);
    console.log(state); 
    const { products, cart } = state;
    
    //AXIOS
    const updateState= async ()=> {
        const ENDPOINT= {
            products:"http://localhost:5000/products",
            cart:"http://localhost:5000/cart"
        };
        const responseProducts= await axios.get(ENDPOINT.products);
        const responseCart= await axios.get(ENDPOINT.cart);
        const productsList= await responseProducts.data;
        const cartList= await responseCart.data;
        
        dispatch({type:TYPES.READ_STATE, payload:{products:productsList, cart:cartList}});

    }
    useEffect(()=> {
        updateState()
    }, []);
    
    const addCart = async (id) => {
        try {
          const product = products.find((product) => product.id === id);
          const item = cart.find((item) => item.id === id);
          if (item) {
            // si el item ya está en el carrito, actualizo la cantidad en +1 (petición PUT - actualizar)
            await axios.put("http://localhost:5000/cart/" + id, {
              ...item,
              quantity: item.quantity + 1,
            });
          } else {
            //si no está en el carrito, agrego TODO el objeto
            await axios.post("http://localhost:5000/cart", {
              ...product,
              quantity: 1,
            });
          }
          dispatch({ type: TYPES.ADD, payload: id });
          
        } catch (error) {
          console.error("Error al agregar al carrito", error);
        }
      };
   
    const removeCart = async (id, all) => {
        try {
          const item = cart.find((item) => item.id === id);
          if (all) {
            await axios.delete(`http://localhost:5000/cart/${id}`);
            dispatch({ type: TYPES.REMOVE_ALL, payload: id });
          } else {
            if (item.quantity > 1) {
              //acá chequeo si el item en el carrito tiene más de una unidad
              await axios.put(`http://localhost:5000/cart/${id}`, {
                ...item,
                quantity: item.quantity - 1,
              }); //si tiene cantidad de más de 1, actualizo reduciendo la cantidad en -1 (petición PUT)
              dispatch({ type: TYPES.REMOVE_ONE, payload: id });
            } else {
              await axios.delete(`http://localhost:5000/cart/${id}`); //si tiene 1 solo, borro el item del carrito directamente (petición PUT)
              dispatch({ type: TYPES.REMOVE_ONE, payload: id });
            }
          }
          
        } catch (error) {
          console.error("Error al eliminar del carrito", error);
        }
      };

    const clearCart = async () => {
      try {
          // Iterar sobre cada elemento del carrito y eliminarlo uno por uno
          cart.forEach(async (item) => {
              await axios.delete(`http://localhost:5000/cart/${item.id}`);
          });
  
          // Después de eliminar todos los elementos del carrito, actualizar el estado local
          dispatch({ type: TYPES.CLEAR });
          
      } catch (error) {
          console.error('Error al vaciar el carrito', error);
      }

  };
    
    return (
        <>
            <div className='shop'>
                <h3>Productos</h3>
                <div className='products'>
                    {
                        products.map(product => <Products key={product.id} product={product} addCart={addCart} />)
                    }
                </div>
                <h3>Carrito</h3>
                <div className='cart'>
                    {
                        cart.map((item, i) => <Cart key={i} item={item} removeCart={removeCart} />)
                    }
                    <button onClick={clearCart}>Vaciar carrito</button>
                    
                </div>
                
            </div>
           
            <style jsx>
                {`
             .shop {
                display: grid;
                grid-template-columns: repeat(1,1fr);
                justify-content: center;
                item-align: center
             }
             .shop h3 {
                margin-left: 20px
             }
             .products {   
                 display: grid;
                 grid-template-columns: repeat(4,1fr)  
             }

             .cart {
                display: grid;
                grid-templeate-columns: repeat(1,1fr);
             }

             button {
                width: 10%;
                border: solid grey;
                border-radius: 5px;  
                padding: 5px;
                margin: 40px;
            }

            
            
            @media screen and (max-width: 1024px){
                .products {
                    grid-template-columns: repeat(3,1fr);
                }
            }
            @media screen and (max-width: 769px){
                .products {
                    grid-template-columns: repeat(2,1fr);
                }
            }

            @media screen and (max-width: 481px){
                .products {
                    grid-template-columns: repeat(1,1fr);
                } 
            
               
         `}
            </style>
        </>
    )
}

export default ShopCart
