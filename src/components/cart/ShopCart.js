import {useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { TYPES } from '@/actions/actions';
import { AppContext } from '../../context/app';
import React from 'react';
import Products from './Products';
import Cart from './Cart';
import Modal from './Modal';

const ShopCart = () => {
  const { state, dispatch} = useContext(AppContext);
  const { products, cart } = state;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectProduct, setSelectProduct] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmPurchase = async () => {
    if (!selectProduct) {
      clearCart();  // Limpiamos el carrito después de confirmar la compra
      alert("Compra confirmada! Gracias por tu pedido.");
      closeModal();
    } else {
      try {
        const product = products.find((product) => product.id === selectProduct);
        const item = cart.find((item) => item.id === selectProduct);
        if (item) {
          // si el item ya está en el carrito, actualizo la cantidad en +1 (petición PUT - actualizar)
          await axios.put("http://localhost:5000/cart/" + selectProduct, {
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
  
        setSelectProduct(null);
        closeModal(); // Cerramos el modal
        dispatch({ type: TYPES.ADD, payload: selectProduct });
      } catch (error) {
        console.error("Error al agregar al carrito", error);
      } 
    }
  };

  const addCart = async (id) => {
    setSelectProduct(id);
    openModal();
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
        <h4>Buzos y remeras</h4>
        <div className='products'>
          {
            products.map(product => <Products key={product.id} product={product} addCart={addCart} />)
          }
        </div>

        <div className='cart'>
        <h4>Carrito</h4>
          {
            cart.map((item, i) => <Cart key={i} item={item} removeCart={removeCart} />)
          }

          
            <h6>Productos totales: {state.totalQuantity}</h6>
            <h6>Precio Total: ${state.totalPrice}</h6>
            <div className='end-confirm'>
              <button onClick={openModal}>Confirmar compra</button>
              <button onClick={clearCart}>Vaciar carrito</button>
            </div>
        
          <Modal isOpen={isModalOpen} closeModal={closeModal} confirmPurchase={confirmPurchase} />
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

             .shop h4 {
                margin-left: 20px
             }
             .products {   
                 display: grid;
                 grid-template-columns: repeat(4,1fr)  
             }

             .cart {
                max-width: 300px;
                display: grid;
                grid-templeate-columns: repeat(1,1fr);
                justify-items: center;
                border: 1px solid;
                border-radius: 10px;
                padding:10px 0px 10px 0px;
                background-color: rgb(228, 227, 227);
             }

             .end-confirm {
                display: flex;
                justify-content: center;
             }

             button {
                width: 35%;
                border: solid grey;
                border-radius: 5px;  
                padding: 2px;
                margin:3px 3px 3px 0px;
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
