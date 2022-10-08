import React from "react";
import { useSelector } from "react-redux";
import CurrentItem from "../components/CurrentItem.js/CurrentItem";

const ProductPage = () => {
  const product = useSelector((state) => state.currentProduct.currentProduct);
  return (
    <div className="product-page">
      <CurrentItem product={product} />
    </div>
  );
};

export default ProductPage;
