import { TYPES } from '@/actions/actions';
import React from 'react'
import { shopInitialState } from './shopInitialState';

export const shopReducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD:{
      let newItem= state.products.find(product=> product.id === action.payload);
      let itemInCart = state.cart.find(item=> item.id === newItem.id);

      return itemInCart
      ?{
        ...state,
        cart: state.cart.map(item=>
          item.id === newItem.id
            ?{
              ...item,
              quantity: item.quantity + 1
            }
            : item
          )
      }
      : {
        ... state,
        cart: [...state.cart, {...newItem, quantity: 1}]
      }
    };
    case TYPES.REMOVE_ONE: {
      let itemRemove = state.cart.find(item => item.id === action.payload);

      return itemRemove.quantity > 1
        ?{
          ...state,
          cart: state.cart.map(item =>
            item.id === itemRemove.id
              ? {
                ...item,
                quantity: item.quantity - 1
              }
              : item
          )
        }
        :{
          ...state,
          cart: state.cart.filter(item=>item.id !== itemRemove.id)
        }
      }; 
    case TYPES.REMOVE_ALL: {
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      }
    };
    case TYPES.CLEAR: {
      return shopInitialState
    };
  
    default:
        return state;
  };
};
