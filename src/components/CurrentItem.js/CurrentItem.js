import React from "react";
import ProductCover from "../ProductItem/ProductCover";
import "./current-item.scss";
import "../ProductItem/product-item.scss";
import ProductBuy from "../ProductBuy/ProductBuy";

const CurrentItem = ({ product }) => {
  if (!product) return null;
  return (
    <div className="current-item">
      <div className="current-item__image">
        <img src={`${product.image}`} alt={`${product.title}`} />
      </div>
      <div className="current-column">
        <div className="current-title">{product.title}</div>
        <div className="current-category">
          <span>{product.category} </span>
        </div>
        <div className="current-description">{product.description}</div>
        <ProductBuy product={product} />
      </div>
    </div>
  );
};

export default CurrentItem;
