import React from "react";
import ProductCard from "../components/ProductCard";
import useProducts from "../context/hook/useProducts";

const Home = () => {
  const { state } = useProducts();
  const { products } = state;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {products.map((item) => (
        <ProductCard product={item} key={item._id} />
      ))}
    </div>
  );
};

export default Home;
