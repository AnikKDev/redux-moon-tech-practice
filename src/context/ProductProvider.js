import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useReducer } from "react";
import {
  initialState,
  productReducer,
} from "../state/ProductState/productReducer";
import { actionTypes } from "../state/ProductState/actionTypes";
const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  // declaring initial reducer state
  const [state, dispatch] = useReducer(productReducer, initialState);

  // const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        dispatch({ type: actionTypes.FETCHING_START });
        const { data } = await axios.get("http://localhost:5000/products");
        dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data.data });
      } catch (err) {
        dispatch({ type: actionTypes.FETCHING_ERROR });
        console.log(err);
      }
    };
    getData();
  }, []);

  // data
  const value = {
    state,
    dispatch,
  };
  console.log(state);
  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export { ProductProvider, PRODUCT_CONTEXT };
