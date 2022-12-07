import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/products");
        setData(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  // data
  const value = {
    data,
  };
  console.log(value);
  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export { ProductProvider, PRODUCT_CONTEXT };
