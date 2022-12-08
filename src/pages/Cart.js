import React from "react";
import ProductCard from "../components/ProductCard";
import useProducts from "../context/hook/useProducts";
import LoadingDots from "../UI/LoadingDots";

const Cart = () => {
  const { state } = useProducts();
  const { products, loading, error, cart } = state;

  let content;
  if (loading) {
    content = <LoadingDots />;
  }
  if (error) {
    content = <p>Error</p>;
  }
  if (!loading && !error && cart.length === 0) {
    content = <p>Nothing to show! product is empty</p>;
  }
  if (!loading && !error && cart.length) {
    content = cart.map((item) => <ProductCard product={item} key={item._id} />);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default Cart;
