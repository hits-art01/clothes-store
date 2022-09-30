import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <div
        className="product-item__image"
        style={{ backgroundImage: `url(${product.image})` }}
      />
      <div className="product-item__item">{product.title}</div>
      <div>{product.description}</div>
    </div>
  );
};

export default ProductItem;
