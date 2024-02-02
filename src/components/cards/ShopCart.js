import { useReducer, useEffect } from 'react';
import axios from 'axios';
import { TYPES } from '@/actions/actions';
import { shopInitialState } from '@/reducer/shopInitialState';
import { shopReducer } from '@/reducer/shopReducer';
import React from 'react';
import Products from './Products';
import Cart from './Cart';


const ShopCart = () => {
    const [state, dispatch] = useReducer(shopReducer, shopInitialState);
    console.log(state)
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
            await axios.post("http://localhost:5000/cart", { id });
            dispatch({ type: TYPES.ADD, payload: id });
        } catch (error) {
            console.error('Error al agregar al carrito', error);
        }
    };
    
    const removeCart = async (id, all) => {
        try {
            if (all) {
                await axios.delete(`http://localhost:5000/cart`);
                dispatch({ type: TYPES.REMOVE_ALL, payload: id });
            } else {
                await axios.delete(`http://localhost:5000/cart/${id}`);
                dispatch({ type: TYPES.REMOVE_ONE, payload: id });
            }
        } catch (error) {
            console.error('Error al eliminar del carrito', error);
        }
    };

    const clearCart = async () => {
        try {
            await axios.delete("http://localhost:5000/cart");
            dispatch({ type: TYPES.CLEAR });
        } catch (error) {
            console.error('Error al vaciar el carrito', error);
        }
    };
    
    //FUNCIONES ANTES DE USAR AXIOS
    //const addCart = (id) => dispatch({ type: TYPES.ADD, payload: id });
    // const removeCart = (id, all) => {
    //     if (all) {
    //         dispatch({ type: TYPES.REMOVE_ALL, payload: id });
    //     } else {
    //         dispatch({ type: TYPES.REMOVE_ONE, payload: id });
    //     }
    // };
    // const clearCart = () => dispatch({ type: TYPES.CLEAR });

    return (
        <>
            <div className='shop'>
                <h3>Productos</h3>
                <div className='products'>
                    {
                        products.map(product => <Products Key={product.id} product={product} addCart={addCart} />)
                    }
                </div>
                <h3>Carrito</h3>
                <div className='cart'>
                    {
                        cart.map((item, i) => <Cart Key={i} item={item} removeCart={removeCart} />)
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
