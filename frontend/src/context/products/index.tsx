import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

import api from '../../services/api';

const initialState = {
  products: [],
  getProducts: (category: string) => {},
};

export const ProductsContext = createContext(initialState);

export const ProductsProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function getProducts(category: string) {
    try {
      const res = await api.get(category);

      dispatch({
        type: 'GET_PRODUCTS',
        payload: res.data.products,
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <ProductsContext.Provider value={{ products: state.products, getProducts }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
