// context/AppContext.js
import { useEffect, createContext, useReducer } from 'react';
import { shopReducer } from '@/reducer/shopReducer';
import { shopInitialState } from '@/reducer/shopInitialState';
import axios from 'axios';
import { TYPES } from '@/actions/actions';

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(shopReducer, shopInitialState);

    const updateState = async () => {
        const ENDPOINT = {
          products: "http://localhost:5000/products",
          cart: "http://localhost:5000/cart"
        };
        const responseProducts = await axios.get(ENDPOINT.products);
        const responseCart = await axios.get(ENDPOINT.cart);
        const productsList = await responseProducts.data;
        const cartList = await responseCart.data;
    
        dispatch({ type: TYPES.READ_STATE, payload: { products: productsList, cart: cartList } });
    
    }

    useEffect(() => {
        updateState();
    }, []);

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
