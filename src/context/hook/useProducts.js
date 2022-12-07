import React, { useContext } from "react";
import { PRODUCT_CONTEXT } from "../ProductProvider";

const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
};

export default useProducts;
