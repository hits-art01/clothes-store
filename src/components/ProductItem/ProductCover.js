import React from "react";
import "./product-item.scss";

const ProductCover = ({ product }) => {
  return (
    <div
      className="product-item__image"
      style={{ backgroundImage: `url(${product.image})` }}
    />
  );
};

export default ProductCover;
